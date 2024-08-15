import { Router } from 'express';
import { isAdmin } from '../middlewares/isAdmin';
import {
    createFlashCard,
    deleteCard,
    getAllFlashCards,
    getFlashCard,
    updateCard,
} from '../controllers/cardController';

const router = Router();

router.route('/create').post(createFlashCard);
router.route('/get').get(getFlashCard);
router.route('/get-all').get(getAllFlashCards);
router.route('/update').patch(updateCard);
router.route('/delete').delete(deleteCard);

export default router;
