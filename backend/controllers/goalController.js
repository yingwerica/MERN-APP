//$ npm i express-async-handler, then require this package here
const asyncHandler = require('express-async-handler')

//desc Get goals
//route Get /api/goals
//access Private after authentication
const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Get goals'})
})

//desc Set goals
//route POST /api/goals
//access Private after authentication
const setGoal = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    res.status(200).json({message: 'Set goal'})
})

//desc Update goals
//route PUT /api/goals/:id
//access Private after authentication
const updateGoal = asyncHandler(async (req, res) => {
    res.status(200).json({message:`Update goal ${req.params.id}`})
})

//desc Delete goals
//route DELETE /api/goals/:id
//access Private after authentication
const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).json({message:`Delete goal ${req.params.id}`})
})


module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
}