import * as mongoose from 'mongoose';
import * as jwt from 'jsonwebtoken';
import appSettings from '../appSettings';
import * as Joi from "joi";
import { EventTypes } from '../enum/EventTypes';
import { DayNames } from '../enum/DayNames';

export const EventInstanceSchema: mongoose.Schema = new mongoose.Schema({
    startDate: {
        type: Date,
        required: true,
        unique: true
    },
    endDate: {
        type: Date,
        required: true
    },
});

export const EventSchema: mongoose.Schema = new mongoose.Schema({
    startTime: {
        type: String,
        required: true,
        unique: true
    },
    endTime: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true,
        unique: true
    },
    endDate: {
        type: Date,
        required: true
    },
    type: {
        type: String,
        required: true,
        values: [...Object.values(EventTypes)],
    },
    recurringDays: {
        type: [String],
        required: false,
        values: [...Object.values(DayNames)],
    },
    instances: {
        type: [EventInstanceSchema],
        required: false,
    }
});

export const Event = mongoose.model('event', EventSchema);