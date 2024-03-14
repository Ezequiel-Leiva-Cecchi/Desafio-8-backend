import express from 'express';
import mockingProductsController from '../controllers/mockingProducts.controller.js';
import { getProducts, getProduct, addProduct, editProduct, deleteProduct } from '../controllers/product.controller.js';

const ProductsRouter = express.Router();

// Ruta para obtener una lista de productos paginados
ProductsRouter.get('/', getProducts);

// Ruta para obtener un producto por su ID
ProductsRouter.get('/:productId', getProduct);

// Ruta para agregar un nuevo producto
ProductsRouter.post('/', addProduct);

// Ruta para editar un producto existente
ProductsRouter.put('/:productId', editProduct);

// Ruta para eliminar un producto por su ID
ProductsRouter.delete('/:productId', deleteProduct);

// Ruta para manejar las solicitudes a /mockingproducts
ProductsRouter.get('/mockingproducts', mockingProductsController);

export default ProductsRouter;
