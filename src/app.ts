import express from 'express'
import path from 'path'
import { isAdmin } from './middlewares/isAdmin'
import cors from 'cors'

const app = express()

app.use(cors({
    origin: ['https://flashcraftr.vercel.app', 'http://localhost:5173', 'http://192.168.1.3:5173'],
    // default: 'https://flashcraftr.vercel.app'
}))
app.use(express.static(path.join(__dirname, "client/dist")))
app.use(express.json({ limit: '16kb'}))
app.use(express.urlencoded({ extended: true, limit: '16kb' }))

app.get('/', (req: any, res: any) => {
    res.send('Hello there!')
})

import flashCardRouter from './routes/flashcardRoute'

app.use('/api/v1/flashcard', flashCardRouter)

export { app }