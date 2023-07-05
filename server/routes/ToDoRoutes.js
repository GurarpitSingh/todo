const express = require("express");
const router = express.Router();
const {
    login,
    register, 
    getTodos,
    addTodo,
    deleteTodo
} = require("../controllers/ToDoController");


router.post("/login", login);
router.post("/register", register);
router.get("/getTodos/:id", getTodos);
router.post("/addTodo/:id", addTodo);
router.post("/deleteTodo/:id", deleteTodo);


module.exports = router;