const db = require('../..db/connection');

//Alphabetize Depts.
readDepartment = () =>{
    const sql = 'Select * FROM department';

    return dbquery(sql)
}

// delete dept.
deleteDepartment = (id) => {
    const sql = 'DELETE FROM department WHERE id = ?';

    return db.query(sql, id)
}

// create new dept.
addDepartment = (name =>{ 
    const sql = 'INSERT INTO Department (name) values (?)'; 
    
    return db.query(sql, name);
}
);

module.exports = {

    readDepartment, deleteDepartment, addDepartment
}

