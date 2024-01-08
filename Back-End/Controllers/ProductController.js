
import Product from "../Models/ProductModel.js";
import User from "../Models/UserModel.js";


const createProduct = async (req, res) => {
  try {
    const { 
        title,
        category,
        price,
        description,


    } = req.body;
    
    const newProduct = await Product.create({ 
        title,
        category,
        price,
        description,});

    res.status(201).json({
      data: newProduct,
      status: 201,
      success: true,
      message: 'product created successfully!',
    });
  } catch (err) {
    res.status(400).json({
      data: null,
      status: 400,
      success: false,
      message: err.message,
    });
  }
};


const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { title,
        category,
        price,
        description, } = req.body;
    

    const product = await Product.findByPk(id);

    if (!product) {
      return res.status(404).json({
        data: null,
        status: 404,
        success: false,
        message: 'product not found!',
      });
    }

    await Product.update(
      {
        title,
        category,
        price,
        description,
      },
      { where: { id } }
    );

    res.status(200).json({
      data: { id, title,
        category,
        price,
        description},
      status: 200,
      success: true,
      message: 'product updated successfully!',
    });
  } catch (err) {
    res.status(400).json({
      data: null,
      status: 400,
      success: false,
      message: err.message,
    });
  }
};




const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json({
      data: products,
      status: 200,
      success: true,
      message: "products retrieved successfully",
    });
  } catch (err) {
    res.status(500).json({
      data: null,
      status: 500,
      success: false,
      message: err.message,
    });
  }
};

const getProductById = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findByPk(productId);
    if (!product) {
      return res.status(404).json({
        data: null,
        status: 404,
        success: false,
        message: "product not found",
      });
    }
    res.json({
      data: product,
      status: 200,
      success: true,
      message: "product retrieved successfully",
    });
  } catch (err) {
    res.status(500).json({
      data: null,
      status: 500,
      success: false,
      message: err.message,
    });
  }
};



const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findByPk(id);

    if (!product) {
      return res.status(404).json({
        data: null,
        status: 404,
        success: false,
        message: 'product not found!',
      });
    }

    await Product.destroy({ where: { id } });

    res.status(200).json({
      data: null,
      status: 200,
      success: true,
      message: 'product deleted successfully!',
    });
  } catch (err) {
    res.status(400).json({
      data: null,
      status: 400,
      success: false,
      message: err.message,
    });
  }
};


export { createProduct, getAllProducts, getProductById, updateProduct, deleteProduct };