const mongoose = require("mongoose");
const ToDoUserSchema = new mongoose.Schema({    
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required:true
    },
    todos: {
        type: Array,
        required: true
    }
});

const ToDoUser = mongoose.model("ToDoUser", ToDoUserSchema);
module.exports=ToDoUser;