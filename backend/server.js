import express from 'express'
import cors from 'cors';
import { dbConnection } from './config/dbConnection.js';
import error from './middlewares/error.js'
import cookieParser from 'cookie-parser';



//routes import
import productRoute from './routes/productRoute.js'
import userRoute from './routes/userRoute.js'
import orderRoute from './routes/orderRoute.js'



const app = express();
const port = 3000

app.use(express.json());
app.use(cors());
app.use(error);
app.use(cookieParser());


//mongoDb connection
dbConnection();

//Routes

app.use("/api/product", productRoute);
app.use("/api/user", userRoute);
app.use("/api/order", orderRoute);






app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})