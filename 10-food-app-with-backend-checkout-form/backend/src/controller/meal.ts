import { Request, Response } from 'express';
import { MealItem } from '../model/MealItem';
export class MealController {
    public getAllMeals = async (req: Request, res: Response) => {
        const meals = await MealItem.find();
        return res.json({
            msg: `Found ${meals.length} records`,
            data: meals
        });
    }

    public createMealItem = async (req: Request, res: Response) => {
        if (!req.body || Object.keys(req.body).length !== 3) {
            return res.status(400).json({
                msg: `Invalid request data`,
            });
        }

        const meal = await MealItem.create(req.body);

        return res.status(201).json({
            msg: `Meal created successfully`,
            meal
        });
    }

}