import mongoose from "mongoose";


export const dbConnection = ()=> {
    mongoose.connect('mongodb+srv://ecommerce:ecommerce7864@ecommerce.ohpzwkw.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected successfully');
}).catch((error) => {
  console.error('MongoDB connection failed:', error);
});
}

