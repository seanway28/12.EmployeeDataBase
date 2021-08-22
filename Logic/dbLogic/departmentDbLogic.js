const db = require("../../db/connection"); 

//  Alphabetize Departments
readDepartment = () => {
    const sql = 'SELECT * FROM department';

    return query(sql)
}
// Delete a department
    deleteDepartment = (id) => {
        const sql = 'DELETE FROM department WHERE id = ?';

        return query(sql, id)
    }
// Create new depsrtment
addDepartment = (name) => { 
    const sql = 'INSERT INTO Department (name) values (?)'; 
    
    return query(sql, name);
}


module.exports = { 
    readDepartment, deleteDepartment, addDepartment
}

