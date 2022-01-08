import express from 'express';
import {join, login} from '../controllers/userController';
import {trending, search} from '../controllers/videoController';

const globalRouter = express.Router();//글로벌 라우터

const handleHome = (req,res) => res.send("Home");
const handleJoin = (req,res) => res.send("Join");

globalRouter.get("/", trending);//app.get대신 router.get을 사용한다.
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/search", search);

export default globalRouter;