import Project from '../models/Project'

export const getProjects = async (req, res) => {
    try {
        const projects = await Project.findAll();
        return res.status(200).json({
            data: projects
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        })
    }
}

export const getOneProject = async (req, res) => {
    try {
        const { id } = req.params;
        const project = await Project.findOne({
            where: {
                id: id
            }
        });
        return res.status(200).json(project)
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        })
    }
}

export const createProject = async (req, res) => {
    const { name, priority, description, deliverydate } = req.body;
    try {
        let newProject = await Project.create({
            name,
            priority,
            description,
            deliverydate
        }, {
            fields: ['name', 'priority', 'description', 'deliverydate']
        })
        if (newProject) {
            return res.status(200).json({
                message: 'Project created successfully',
                data: newProject
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

export const deleteProject = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteRowCount = await Project.destroy({
            where: {
                id: id
            }
        });
        return res.status(200).json({
            message: 'Project Delete Successfully!',
            count: deleteRowCount
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        })
    }
}

export const updateProject = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, priority, description, deliverydate } = req.body;

        const projects = await Project.findAll({
            attributes: ['id', 'name', 'priority', 'description', 'deliverydate'],
            where: {
                id
            }
        })

        if (projects.length > 0) {
            projects.forEach(async project => {
                await project.update({
                    name,
                    priority,
                    description,
                    deliverydate
                })
            })
        }
        return res.status(200).json({
            message: 'Project Updated Successfully!',
            data: projects
        })

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        })
    }
}