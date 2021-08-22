const db = require('../../db/connection');

// Get the roles
readRole = () => {'SELECT * FROM role';
    const sql = 'SELECT * FROM role';

    return db.query(sql)
}
// Create a new role
addRole = (title, salary, department_id) => {
    const sql = 'INSERT INTO role (title, salary, department_id) VALUES (?,?,?)';

    return db.query(sql,[title, salary, department_id]);
}

//Delete a role
deleteRole=(id) =>{
    const sql = 'DELETE FROM role WHERE id = ?';

    return db.query(sql, id)

}

module.exports = {
    readRole, addRole, deleteRole
    
}