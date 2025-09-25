const express = require("express");
const router = express.Router();
import { getUsers, createUser } from "../controllers/UserController";

router.get('/getUsers', getUsers);
router.post('/createUser', createUser);

export default router;