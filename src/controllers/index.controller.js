const { Pool } = require("pg");
const { v4: uuidv4 } = require('uuid');

const pool = new Pool({
    hots: "localhost",
    user: "postgres",
    password: '232001',
    port: "5432",
    database: "tareas",
});



const getTask = async (req, res) => {
    try {
        const response = await pool.query(
            'SELECT id, title, CASE WHEN status = false THEN \'no completada\' ELSE \'completada\' END AS Estado FROM tareas'
        );
        console.log(response.rows);
        res.status(200).send(response.rows);
    } catch (err) {
        console.error(err.stack);
        res.status(500).send("Internal Server Error");
    }

};


const postTask = async (req, res) => {
    try {
        const msm = "registro creado con exito";
        const { title, des } = req.body;
        id = uuidv4();
        const now = new Date();
        await pool.query('INSERT INTO tareas (id, title, des,created_at) VALUES ($1, $2, $3, $4)', [id, title, des, now]);
        res.json({
            message: msm,
            body: {
                Task: {
                    id, title, des
                }
            }
        })
    } catch (err) {
        console.error(err.stack);
        res.status(500).send("Internal Server Error");
        console.log('req', req.body)
    }
};

const getTaskById = async (req, res) => {
    try {
        const taskId = req.params.id;
        const response = await pool.query('SELECT id, title, des, CASE WHEN status = false THEN \'no completada\' ELSE \'completada\' END AS Estado FROM tareas WHERE id = $1', [taskId]);
        const msm = "Registro recuperado";
        res.status(200);
        res.json({
            message: msm,
            response: {
                body: {
                    Task: response.rows[0]
                }
            }
        })
    } catch (err) {
        console.error(err.stack);
        res.status(500).send("Internal Server Error");
    }
};

const updateTaskStatus = async (req, res) => {
    try {
        const taskId = req.params.id;
        const { status } = req.body; 
        const now = new Date();

        await pool.query('UPDATE tareas SET status = $1, updated_at = $2 WHERE id = $3', [status, now, taskId]);

        const msm = "Estado de tarea actualizado";
        res.json({
            message: msm,
        });
    } catch (err) {
        console.error(err.stack);
        res.status(500).send("Internal Server Error");
    }
};

module.exports = {
    getTask,
    postTask,
    getTaskById,
    updateTaskStatus,
}

