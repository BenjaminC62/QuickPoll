import { PrismaClient } from "../../generated/prisma";
import { Request, Response } from "express";
import type { User } from "../types/types";
import { ca, tr } from "zod/v4/locales";

const prisma = new PrismaClient();

export const getUsers = async (req: Request, res: Response) => {
  const users = await prisma.user.findMany();
  res.json({ users });
};

export const createUser = async (req: Request, res: Response) => {
  const {
    nom,
    prenom,
    email,
    password,
    confirm_password,
    role,
    createdSurvey,
    responses,
  } = req.body as User;

  try {
    const newUser = await prisma.user.create({
      data: {
        nom,
        prenom,
        email,
        password,
        confirm_password,
        role,
        createdSurvey: {
          create: createdSurvey.map((s) => ({
            question: s.question,
            userId: s.userId,
          })),
        },
        responses: {
          create: responses,
        },
      },
    });

    res.status(201).json({ user: newUser });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getUserSurveys = async (req: Request, res: Response) => {
  const userId = parseInt(req.params.userId);
  try {
    const surveys = await prisma.survey.findMany({
      where: { userId },
      include: { creator: true, response: true },
    });
    res.json({ surveys });
  } catch (error) {
    console.error("Error fetching user surveys:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
