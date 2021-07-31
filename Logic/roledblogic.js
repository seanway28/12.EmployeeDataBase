const db = require('../../db/connection');

// get the roles
readROLE = () => {'SELECT * FROM role';

return db.query(sql)
}


//create a new role
addRole = (title, salary, department_id) => {
    const sql = 'INSERT INTO role (title, salary, department_id) VALUES (?,?,?)';

    return db.query(sql,[title, salary, department_id]);

}

//delete a role

deleteRole=(id) =>{
    const sql = 'DELETE FROM role WHERE id = ?';

    return db.query(sql, id)

}

module.exports = {
    readRile, addRole, deleteRole
    
}