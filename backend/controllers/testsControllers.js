const mongoose = require('mongoose')
const Test = require('../models/babyTestSchema')


// GET all test
const getTests = async (req, res) => {
    const tests = await Test.find({}).sort({createdAt: -1})

    res.status(200).json(tests)
}


// GET a single test
const getTest = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such test exists'})
    }

    const test = await Test.findById(id)

    if (!test) {
        return res.status(404).json({error: 'No such test exists'})
    }

    res.status(200).json(test)
}


// POST a new test
const createTest = async (req, res) => {
    const { testName, complete, notes} = req.body

    let emptyFields = []

    if (!testName) {
        emptyFields.push('test name')
    }
    if (!complete) {
        emptyFields.push('complete')
    }
    if (!notes) {
        emptyFields.push('notes')
    }
    if (emptyFields.length > 0 ) {
        return res.status(400).json({ error: 'Please fill in all fields', emptyFields})
    }

        // add to the db
        try {
         const test = await Test.create({ testName, complete, notes})
         res.status(200).json(test)
        } catch (error) {
            res.status(400).json({ error: error.message })
        }
}


// DELETE a post
const deleteTest = async (req, res) => {
    const { id } =req.params
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'No such test exists'})
    }

    const test = await Test.findOneAndDelete({ _id: id })

    if (!test) {
        return res.status(400).json({ error })
    }

    res.status(200).json(test)
}


// UPDATE a test
const updateTest = async (req, res) => {
    const { id } = req.params
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'No such test exists'})
    }

    const test = await Test.findOneAndUpdate({ _id: id }, {
        ...req.body
    })

    if (!test) {
        return res.status(400).json({ error })
    }

    res.status(200).json(test)
}


// EXPORTS
module.exports = {
    getTests, getTest, createTest, deleteTest, updateTest,
}