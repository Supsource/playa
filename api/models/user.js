const { default: mongoose } = require('mongoose');
const moon = require('mongoose');

// Define the schema for the User model
const userSchema = new moon.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
    },
    image : {
        type: String,
        required: true
    },
    skill : {
        type: String,
    },
    noOfGames : {
        type: Number,
        default: 0
    },
    playpals : {                                  // Playpals are the friends of the user who user played with
        type: mongoose.Schema.Types.ObjectId,     // This is the id of the user who is a friend of the user
        ref: 'User'                               // This is the reference to the User model    
    },
    sports : [
        {
            type: String,
        }
    ],
},{
    timestamps: true
});

const users = mongoose.model('User', userSchema);
module.exports = users;