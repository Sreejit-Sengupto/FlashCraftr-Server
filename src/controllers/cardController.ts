import { Request, Response } from "express";
import { Error } from "mongoose";
import CardModel from "../models/card";

const createFlashCard = async (req: Request, res: Response) => {
    const { question, answer, username } = req.body;
    if (!question) {
        throw new Error('Question is required')
    }

    const card = await CardModel.create({
        question: question,
        answer: answer,
        username: username
    })
    console.log(card);
    

    if (!card) {
        throw new Error('Failed to create flashcard')
    }

    return res.status(200).json({ flashCard: card, message: 'Flash card created successfully' })
}

const getFlashCard = async (req: Request, res: Response) => {
    const page = parseInt(req.query.page as string) || 1
    const limit = parseInt(req.query.limit as string) || 1
    const username = req.query.username    

    const skip = (page - 1) * limit

    const flashCards = await CardModel.find({ username: username }).skip(skip).limit(limit)
    const totalCards = await CardModel.countDocuments()
    if (!flashCards) {
        throw new Error('No flashcards found')
    }
    return res.status(200).json({ totalCards, flashCards, message: 'Fetched flashcards successfully' })
}


const getAllFlashCards = async (req: Request, res: Response) => {
    const username = req.query.username
    const flashcards = await CardModel.find({ username: username })
    if (!flashcards) {
        throw new Error('No flashcards')
    }
    return res.status(200).json({ flashcards, message: "Cards fetched successfully" })
}

export { createFlashCard, getFlashCard, getAllFlashCards }