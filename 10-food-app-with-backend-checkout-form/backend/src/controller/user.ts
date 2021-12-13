import { Request, Response, NextFunction } from "express";

export function userSignUp(req: Request, res: Response, next: NextFunction) {
    const {
        email,
        firstName,
        lastName,
        password
    } = req.body;

    // if(bodyValidate){}
}