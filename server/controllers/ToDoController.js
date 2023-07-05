const mongoose = require("mongoose");
const ToDoUser = require("../models/ToDoUser")

exports.login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await ToDoUser.find({ username: username, password: password });
        if (user.length === 0) {
            return res.status(404).json({ message: "Invalid credentials" });
        }
        return res.status(200).json({ token: user[0]._id });
    } catch (error) {
        return res.status(404).json({ message: error.message });
    }
}

exports.register = async (req, res) => {
    const { username, password, name } = req.body;
    if(!username || !password || !name){
        return res.status(404).json({ message: "Provide All Fields" });
    }
    try {
        const newUser = new ToDoUser({ username, password, name, todos: [] });
        await newUser.save();
        return res.status(200).json({ registered: true });
    } catch (error) {
        return res.status(404).json({ message: error.message });
    }
}

exports.getTodos = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await ToDoUser.findById(id);
        return res.status(200).json({ todos: user.todos });
    } catch (error) {
        return res.status(404).json({ message: error.message });
    }
}

exports.addTodo = async (req, res) => {
    const { id } = req.params;
    const { todo } = req.body;
    try {
        const user = await ToDoUser.findById(id);
        user.todos.push(todo);
        await user.save();
        return res.status(200).json({ todos: user.todos });
    } catch (error) {
        return res.status(404).json({ message: error.message });
    }
}

exports.deleteTodo = async (req, res) => {
    const { id } = req.params;
    const { todo } = req.body;
    try {
        const user = await ToDoUser.findById(id);
        user.todos = user.todos.filter((t) => t !== todo);
        await user.save();
        return res.status(200).json({ todos: user.todos });
    } catch (error) {
        return res.status(404).json({ message: error.message });
    }
}
