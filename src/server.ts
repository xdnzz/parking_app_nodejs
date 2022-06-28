import express from 'express';
import {categoriesRoutes} from '../src/routes/categories.routes';
import {specificationRoutes} from './routes/specification.routes'



const app = express();

app.use(express.json());  

app.use("/categories",categoriesRoutes);

app.use("/specifications", specificationRoutes);

app.listen(3333, ()=> console.log('server is running'));

