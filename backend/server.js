import express from 'express'
import cors from 'cors';
import { dbConnection } from './config/dbConnection.js';
import error from './middlewares/error.js'


//routes import
import productRoute from './routes/productRoute.js'

const app = express();
const port = 3000

app.use(express.json());
app.use(cors());
app.use(error);

//mongoDb connection
dbConnection();

//Routes

app.use("/api/product", productRoute);




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})