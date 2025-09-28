import * as z from "zod";

export const SurveySchema = z.object({
  id: z.number().optional(),
  question: z.string().min(1, { message: "La question ne peut pas être vide" }),
  userId: z.number(),
  creator: z
    .object({
      id: z.number(),
      nom: z.string(),
      prenom: z.string(),
      email: z.string().email(),
      role: z.string().default("user"),
    })
    .optional(),
  response: z
    .array(
      z.object({
        id: z.number(),
        userId: z.number(),
        surveyId: z.number(),
        reponse: z.string(),
      })
    )
    .optional(),
});

export const ResponseSchema = z.object({
  id: z.number().optional(),
  userId: z.number(),
  surveyId: z.number(),
  reponse: z.string().min(1, { message: "La réponse ne peut pas être vide" }),
});

export const UserSchema = z.object({
  id: z.number().optional(),
  nom: z.string().min(1),
  prenom: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(6),
  confirm_password: z.string().min(6),
  role: z.string().optional(),
  createdSurvey: z.array(SurveySchema).optional(),
  responses: z.array(ResponseSchema).optional(),
});
