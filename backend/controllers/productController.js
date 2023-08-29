import ProductModel from "../models/productModel.js";
import mongoose from "mongoose";
import ErrorHandler from "../utils/errorhandler.js";
import ApiFeature from "../utils/apiFeatures.js";


export const createProduct = async(req,res) => {
    const {name, price, description , category} = req.body;
try{
    const newProduct = new ProductModel({
        name: name,
        price: price,
        description: description,
        category: category
    });

    await newProduct.save();
    return res.status(200).json({
        Success: true,
        newProduct
    });
}catch(err){
  res.json({
    Message: "Error while creating product",
    Error: err,
  })
}
    
}


export const getAllProducts = async(req,res) => {
    try{
        const apiFeature = new ApiFeature(ProductModel.find(), req.query).search();
        const allProducts = await apiFeature.query;
        // const count = await ProductModel.countDocuments({});
        return res.status(200).json({
            Success: true,
            // TotalProducts:count ,
            allProducts
        });
    }catch(err){
        res.json({
            Message: "Error while fetching All products",
            Error: err,
          })
    }

}

export const updateProduct = async(req,res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(500).json({
            Message: "product not found",
            
        });
        
    }
    try{
        
        let product = await ProductModel.findById(req.params.id);
            product = await ProductModel.findByIdAndUpdate(req.params.id, req.body),{
                new: true,
                runValidators:true, 
                 useFindAndModify: false
            }
            return res.status(200).json({
                sucess: true,
                product
            })
    }catch(err){
        res.json({
            Message: "Error ",
            Error: err,
          })

    }

}

export const deleteProduct = async(req,res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(500).json({
            Message: "product not found",
            
        });}
    try{
        let product = await ProductModel.findById(req.params.id);
        

        await ProductModel.findByIdAndDelete(req.params.id);
        return res.status(200).json({
            Message: "Product deleted Successfully"
        })

    }catch(err){
        res.json({
            Message: "Error ",
            Error: err,
          })
    }

}

export const getSingleProduct = async(req,res, next) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return next(new ErrorHandler("Product Not Found", 404))}
    try{
    let product = await ProductModel.find({_id: id});
    return res.status(200).json({
        Success: true,
        product
    })

    }catch(err){
res.json({
            Message: "Error ",
            Error: err,
          })
    }
}

// export const getAllProducts = async(req,res) => {
//     try{

//     }catch(err){
// res.json({
//             Message: "Error ",
//             Error: err,
//           })
// }}