import express from "express";
import {main, restaurant, convenience_store, pharmacy, hospital, household_goods_store, coin_laundry, exchange, tourist} from "../controllers/globalController.js";

const globalRouter = express.Router();

globalRouter.get('/', main);
globalRouter.get('/restaurant', restaurant);
globalRouter.get('/convenience_store', convenience_store);
globalRouter.get('/pharmacy', pharmacy);
globalRouter.get('/hospital', hospital);
globalRouter.get('/household_goods_store', household_goods_store);
globalRouter.get('/coin_laundry', coin_laundry);
globalRouter.get('/exchange', exchange);
globalRouter.get('/tourist', tourist);

export default globalRouter;