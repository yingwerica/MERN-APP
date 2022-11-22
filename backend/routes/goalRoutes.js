const express = require('express')
const router = express.Router()
const {getGoals,
    setGoal,
    updateGoal,
    deleteGoal
} = require('../controllers/goalController')

//bring in the protect middleware to protect route
const {protect} = require('../middleware/authMiddleware')

// router.get('/', getGoals)

// router.post('/', setGoal)

// router.put('/:id', updateGoal)

// router.delete('/:id', deleteGoal)

/////////cleaner code for all the routers
//add protect to protect routes that only can access by authenticated user
router.route('/').get(protect, getGoals).post(protect, setGoal)
router.route('/:id').put(protect, updateGoal).delete(protect, deleteGoal)


module.exports = router