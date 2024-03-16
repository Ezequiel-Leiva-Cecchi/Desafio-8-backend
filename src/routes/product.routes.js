import { Router } from "express";
import generateProduct from '../utils/mock.js';

const productsRoutes = Router();

productsRoutes.get('/',(req, res)=>{
    const products = [];
    for(let i=0;i<100;i++){
        users = generateUser();
    }
    res.render = {status:'success',playload:products};
});

export default productsRoutes;