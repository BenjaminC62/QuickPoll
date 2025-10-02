export interface User {
    id: number,
    nom: string,
    prenom: string,
    email: string,
    password: string,
    confirm_password: string,
    role?: string,
    createdSurvey: Survey[],
    responses: Response[],
}

export interface Response {
    id: number,
    userId: number,
    surveyId: number,
    reponse: string,
}

export interface Survey {
    id: number, 
    question: string, 
    userId: number,
    creator: User,
    response: Response[]
}