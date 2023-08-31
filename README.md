# Repo-github-SOA-201252

URL base localhost:3000/getTask esto devuelve las tareas, su id y estado
URL alternativas
http://localhost:3000/postTask Mediante un json se inserta la inforamcion recibe titulo y des
http://localhost:3000/getTaskById/[IdObjetivo] Utilizando la id que se desea visualizar devuelve toda la informacion de la tarea
http://localhost:3000/updateTaskStatus/[IdObjetivo] Mediante un json se cambia el status solo acepta Status=true/false

Pasos para ejecutar el porgrama.
-Ubicarse en la carpeta del proyecto
-Abrir una terminal de comandos
-Ejecutar el comando "nodemon src/index.js"

En caso de querer ejecutar el seader utilizar 
-desde el paso 2, ejecutar "node src/seeder.js"

DB_Postgresql-Scrips para creacion de base de datos y tabla en carpeta "database"
