const express = require("express");
const router = express.Router();
import { getUsers, createUser, getUserSurveys } from "../controllers/UserController";

router.get('/getUsers', getUsers);
router.post('/createUser', createUser);
router.get('/getUserSurveys/:userId', getUserSurveys);

export default router;