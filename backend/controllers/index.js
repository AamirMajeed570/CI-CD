import Task from "../models/Task.js"

export const getTask = async (req, res) => {
    try {
        const task = await Task.find();
        if (!task) {
            return res.status(400).json({
                message: "No Such Task Found",
                data: task
            })
        }
        return res.status(200).json({
            message: "Task Found Succesfully",
            data: task
        })
    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
}

export const createTask = async (req, res) => {
    try {
        const task = req.body;
        console.log("Task", task)
        const newTask = new Task(task);
        const item = await newTask.save();
        return res.status(200).json({
            message: "Task Created Succesfully",
            data: item
        })
    } catch (error) {
        console.log("Error", error)
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
}

export default {
    getTask, createTask
}