import mongoose from "mongoose";
const taskSchema = new mongoose.Schema({
    task: {
       type: String,
       required: true
    }
}, {
    timestamps: true,
});
const Task = new mongoose.model('task',taskSchema)
export default Task;