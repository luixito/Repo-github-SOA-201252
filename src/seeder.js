const { Pool } = require('pg');
const { v4: uuidv4 } = require('uuid');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'tareas',
  password: '232001',
  port: 5432,
});

const dataToInsert = [];
for (let i = 1; i <= 40; i++) {
  dataToInsert.push({
    title: `Tarea ${i}`,
    des: `Descripción de la tarea ${i}`,
  });
}

async function seed() {
  try {
    for (const item of dataToInsert) {
      const id = uuidv4();
      const now = new Date();

      await pool.query('INSERT INTO tareas (id, title, des, created_at) VALUES ($1, $2, $3,$4)', [id, item.title, item.des,now]);
    }
    console.log('Datos insertados correctamente.');
  } catch (error) {
    console.error('Error al insertar datos:', error);
  } finally {
    pool.end();
  }
}

seed();
