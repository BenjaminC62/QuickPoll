import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/UserRoute";
import surveyRoutes from "./routes/SurveyRoute";

// Configuration des variables d'environnement
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/surveys", surveyRoutes);

// Route de base
app.get("/", (req, res) => {
  res.json({ message: "ça run lol!" });
});

// Démarrage du serv
app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
