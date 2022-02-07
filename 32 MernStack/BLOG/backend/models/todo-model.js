const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
        minlength: 3,
        maxlength:100
    },

    author: {
        type: String,
    },

    a_id: {
        type: String,
    },

    isComplete: {
        type: Boolean,
    },

    date: {
        type: Date,
        default: new Date()
    },

});

const Todo = mongoose.model('Todo', todoSchema);

exports.Todo = Todo;
// module.exports = Todo
// export default Todo