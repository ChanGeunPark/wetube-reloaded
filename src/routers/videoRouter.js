import express from 'express';
import { see, edit, deleteVideo, upload, trending } from '../controllers/videoController';

const videoRouter = express.Router();

videoRouter.get("/trending", trending);
videoRouter.get("/upload", upload);
videoRouter.get("/:id(\\d+)", see);//(\\d+)  숫자인것만 가져올수 있다.
videoRouter.get("/:id/edit", edit);
videoRouter.get("/:id/delete", deleteVideo);



export default videoRouter;