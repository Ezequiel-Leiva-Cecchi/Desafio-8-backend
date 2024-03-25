import { Router } from "express";
import { generateProduct } from '../utils/mock.js'; 
import { errorDictionary } from '../middleware/errorMiddleware.js'; 

const productsRoutes = Router();

productsRoutes.get('/mockingproducts', (req, res, next) => {
    try {
        const products = [];
        for(let i = 0; i < 100; i++){
            products.push(generateProduct()); 
        }
        res.json({ status: 'success', payload: products }); 
    } catch (error) {
        const errorMessage = errorDictionary[error.message] || 'An unexpected error occurred';
        res.status(500).json({ status: 'error', message: errorMessage });
        next(error);
    }
});

export default productsRoutes;
