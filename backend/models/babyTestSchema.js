const mongoose = require('mongoose')

const Schema = mongoose.Schema

// CONTENTS OF SCHEMA
const babyTestSchema = new Schema({
    testName: {
        type: String,
        required: true,
    },
    complete: {
        type: Boolean,
        required: true,
    },
    notes: {
        type: String,
        required: false,
    }
},
{
    timestamps: true,
})

module.exports = mongoose.model('BabyTest', babyTestSchema)