import { Router } from "express";
import generateUser from '../utils/mock.js';

const userRoutes = Router();

userRoutes.get('/',(req, res)=>{
    const users = [];
    for(let i=0;i<100;i++){
        users = generateUser();
    }
    res.render = {status:'success',playload:users};
});

export default userRoutes;