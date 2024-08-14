import { Router } from "express";
import { isAdmin } from "../middlewares/isAdmin";
import { createFlashCard, getAllFlashCards, getFlashCard } from "../controllers/cardController";

const router = Router()

router.route('/create').post(createFlashCard)
router.route('/get').get(getFlashCard)
router.route('/get-all').get(getAllFlashCards)

export default router