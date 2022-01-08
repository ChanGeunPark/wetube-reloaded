import express from 'express';
import { edit, remove, see, logout } from '../controllers/userController';

const usersRouter = express.Router();

usersRouter.get("/:id", see);
usersRouter.get("/logout", logout);
usersRouter.get("/edit", edit);
usersRouter.get("/delete", remove);

export default usersRouter;