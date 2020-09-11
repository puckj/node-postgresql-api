import Task from '../models/Task'

export const getTasks = async (req, res) => {
    try {
        const tasks = await Task.findAll({
            attributes: ['id', 'projectid', 'name', 'done'],
            order: [
                ['id', 'DESC']
            ]
        })
        return res.status(200).json(tasks)
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        })
    }
}

export const getTasksByProject = async (req, res) => {

}

export const getOneTask = async (req, res) => {

}

export const createTask = async (req, res) => {
    try {
        const { name, done, projectid } = req.body;
        const newTask = await Task.create({
            name,
            done,
            projectid
        }, {
            fields: ['name', 'done', 'projectid']
        })
        if (newTask) {
            return res.status(200).json({
                message: 'New Task Created',
                data: newTask
            });
        }
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        })
    }
}

export const deleteTask = async (req, res) => {

}

export const updateTasks = async (req, res) => {

}
