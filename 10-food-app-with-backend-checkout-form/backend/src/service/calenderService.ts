import appSettings from "../appSettings";
import { User } from "../model/User";
import { Event } from "../model/Event";
import { EventTypes } from "../enum/EventTypes";

export async function getEvents(startDate: Date, endDate: Date) {
    const user = await User.findById(appSettings.DEFAULT_USER_ID);
    const eventArr: any = [];
    user.events?.forEach((event: any) => {
        if (event.startDate >= startDate && event.endDate <= endDate) {
            eventArr.push(event);
        }
    });

    return eventArr;
}

export async function insertEvents(startDate: Date, endDate: Date, type: EventTypes) {
    const user = await User.findById(appSettings.DEFAULT_USER_ID);

    await User.updateOne(
        { _id: user._id }, 
        { $push: { events: { startDate, endDate, type} } }
    );
}