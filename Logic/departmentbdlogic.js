const db = require('../db/connection');

//Alphabetize Depts.
readDepartment = () =>{
    const sql = 'Select * FROM department';

    db.query(sql, (err, data) => {
        if(err) throw err;

        console.table(data)
    }) 
   
}

// delete dept.
// deleteDepartment = (id) => {
//     const sql = 'DELETE FROM department WHERE id = ?';

//     return db.query(sql, id)
// }

// create new dept.
addDepartment = (name =>{ 
    const sql = 'INSERT INTO Department (name) values (?)'; 
    
    db.query(sql, [name], (err, data) => {
        if(err) throw err
    })
}
);

module.exports = {

    readDepartment,
    // deleteDepartment, 
    addDepartment
}

