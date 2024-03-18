const express = require('express')

// CONTROLLERS

const { 
    getTests, 
    getTest, 
    createTest, 
    deleteTest, 
    updateTest, 
} = require('../controllers/testsControllers')

const router = express.Router()

// GET all tests
router.get('/', getTests)

// GET a single test
router.get('/:id', getTest)

// POST a new test
router.post('/', createTest)

// DELETE a test
router.delete('/', deleteTest)

// UPDATE a test
router.patch('/:id', updateTest)

module.exports = router