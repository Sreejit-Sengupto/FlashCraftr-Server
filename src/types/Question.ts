import { Document } from "mongoose"

export interface Question extends Document {
    question: string,
    answer: string
    username: string
}
