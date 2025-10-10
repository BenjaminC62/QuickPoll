const express = require("express");
const router = express.Router();
import { getSurveys, createSurvey } from "../controllers/SurveyController";

router.get("/getSurveys", getSurveys);
router.post("/createSurvey", createSurvey);

export default router;
