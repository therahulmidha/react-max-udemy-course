import { Request, Response, NextFunction } from "express";
import { getEvents, insertEvents } from "../service/calenderService";
export async function getEvent(req: Request, res: Response, next: NextFunction) {
    let { startDate, endDate } = req.query;
    if (!startDate || !endDate || new Date(startDate.toString()).toString() === 'Invalid Date' || new Date(endDate.toString()).toString() === 'Invalid Date') {
        return res.status(403).json({
            message: 'Invalid date sent',
            data: null
        })
    }

    const data = await getEvents(new Date(startDate.toString()), new Date(endDate.toString()));

    return res.status(200).json({
        message: data.length === 0 ? 'No Events found' : 'Events fetched successfully',
        data: data
    })
};

export async function insertEvent(req: Request, res: Response, next: NextFunction) {
    const { startDate, endDate, type } = req.body;
    await insertEvents(new Date(startDate), new Date(endDate), type);
    return res.status(200).json({
        message: 'Event added successfully',
        data: null
    })
}