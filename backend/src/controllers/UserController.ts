import { PrismaClient } from '../../generated/prisma';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

export const getUsers = async (req: Request, res: Response) => {
    const users = await prisma.user.findMany();
    res.json({ users });
};

export const createUser = async (req: Request, res: Response) => {
    // TODO: Le faire avec le body
};

