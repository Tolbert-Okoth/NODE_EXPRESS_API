import express from 'express';



import {
    getUsers,
     createUser, 
    getUserById,
    updateUser,
    deleteUser
} from '../controllers/users.js';

const router = express.Router();



// GET all users
router.get('/', getUsers);

// POST a new user
router.post('/', createUser);

router.get('/:id', getUserById);


router.delete('/:id', deleteUser);

router.patch('/:id', updateUser);

  


    
export default router;



