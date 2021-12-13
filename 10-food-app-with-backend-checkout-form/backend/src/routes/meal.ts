import { Router } from 'express';
import { MealController } from '../controller/meal';
const router = Router();
const mealController = new MealController();

router.get('/', mealController.getAllMeals);
router.post('/', mealController.createMealItem);

export const MealRouter = router;