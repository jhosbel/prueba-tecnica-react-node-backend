const SpecialPrice = require("../models/specialPrice.model");
const Product = require("../models/product.model");

exports.getSpecialPrices = async (req, res) => {
  try {
    const { userId } = req.query;

    if (!userId) {
      return res.status(400).json({ message: "Se requiere userId" });
    }
    const specialPrices = await SpecialPrice.find({ userId })
      .populate({
        path: "productId",
        select: "name price category",
      })
      .lean();

    const productsWithSpecialPrices = specialPrices.map((sp) => ({
      specialPriceId: sp._id,
      ...sp.productId,
      originalPrice: sp.productId.price,
      specialPrice: sp.specialPrice,
      assignedAt: sp.createdAt,
    }));

    if (productsWithSpecialPrices.length === 0) {
      return res.status(404).json({
        message: "No se encontraron precios especiales para este usuario",
      });
    }

    res.json(productsWithSpecialPrices);
  } catch (error) {
    res.status(500).json({
      message: "Error al buscar precios especiales",
      error: error.message,
    });
  }
};

exports.getUsersWithSpecialPrices = async (req, res) => {
  try {
    const users = await SpecialPrice.distinct('userId');
    
    if (users.length === 0) {
      return res.status(404).json({ 
        message: "No se encontraron usuarios con precios especiales" 
      });
    }
    
    res.json(users);
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener usuarios",
      error: error.message
    });
  }
};

exports.createSpecialPrice = async (req, res) => {
  try {
    const { userId, productId, specialPrice } = req.body;

    if (!userId || !productId || !specialPrice) {
      return res.status(400).json({ error: "Todos los campos son requeridos" });
    }

    const existingPrice = await SpecialPrice.findOne({
      userId,
      productId,
    });

    if (existingPrice) {
      return res.status(400).json({
        error: "Este usuario ya tiene un precio especial para este producto",
      });
    }

    const productExists = await Product.exists({ _id: productId });
    if (!productExists) {
      return res.status(400).json({ error: "Producto no encontrado" });
    }

    const newSpecialPrice = new SpecialPrice({
      userId,
      productId,
      specialPrice,
    });

    await newSpecialPrice.save();
    res.status(201).json(newSpecialPrice);
  } catch (error) {
    console.error("Error creating special price:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

exports.updateSpecialPrice = async (req, res) => {
  try {
    const { id } = req.params;
    const { specialPrice } = req.body;

    if (typeof specialPrice !== "number" || specialPrice < 0) {
      return res.status(400).json({ error: "Precio no válido" });
    }

    const updatedPrice = await SpecialPrice.findByIdAndUpdate(
      id,
      { specialPrice },
      { new: true, runValidators: true }
    );

    if (!updatedPrice) {
      return res.status(404).json({ error: "Precio especial no encontrado" });
    }

    res.json(updatedPrice);
  } catch (error) {
    console.error("Error updating special price:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

exports.deleteSpecialPrice = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPrice = await SpecialPrice.findByIdAndDelete(id);
    if (!deletedPrice) {
      return res.status(404).json({
        message: "Precio especial no encontrado",
      });
    }
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: "Error eliminando el precio especial" });
  }
};
