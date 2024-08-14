import mongoose, { Schema } from "mongoose";
import { Question } from "../types/Question";

const cardSchema: Schema<Question> = new Schema({
    question: {
        type: String,
        required: true,
    },
    answer: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    }
}, { timestamps: true })

const CardModel = (mongoose.models.Card as mongoose.Model<Question>) || mongoose.model<Question>('Card', cardSchema)

export default CardModel