import { PrismaClient } from "../../generated/prisma";
import { Request, Response } from "express";
import type { Survey } from "../types/types";

const prisma = new PrismaClient();

export const getSurveys = async (req: Request, res: Response) => {
    const surveys = await prisma.survey.findMany({
        include: { creator: true, response: true },
    });
    res.json({ surveys });
};

export const createSurvey = async (req: Request, res: Response) => {
    const { question, userId } = req.body as Survey;

    try {
        const newSurvey = await prisma.survey.create({
            data: {
                question,
                userId,
            },
        });
        res.status(201).json({ survey: newSurvey });
    } catch (error) {
        console.error("Error creating survey:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
