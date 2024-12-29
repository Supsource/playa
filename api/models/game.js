const mongoose = require('mongoose');
const schema = mongoose.Schema;

const gameSchema = new schema({
    sport : {
        type: String,
        required: true
    },
    area : {
        type: String,
        required: true // Change this to true to ensure area is required
    },
    date: {
        type: String, // Change this from Date to String
        required: true // Change this to true to ensure date is required
    },
    time: {
        type: String,
        required: true // Change this to true to ensure time is required
    },
    activityAccess : {
        type: String,
        default: "public"
    },
    totalPlayers : {
        type: Number,
        required: true
    },
    instruction : {
        type: String,
    },
    admin : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    players : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    queries : [
        { 
            question: String,
            answer: String,
        }
    ],
    requests : [
        {
            userId : {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
                required: true
            },
            comment :
            {
                type: String,
            },
        }
    ],
    isBooked : {
        type: Boolean,
        default: false
    },
    matchFull : {
        type: Boolean,
        default: false
    },
    courtNumber : {
        type: String,
    }
});

module.exports = mongoose.model('Game', gameSchema);
