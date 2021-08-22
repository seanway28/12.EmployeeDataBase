// Require the Inquier npm package

const inquirer = require('inquirer');
const departmentDbLogic = require('./Logic/dbLogic/departmentDbLogic')
const employeedbLogic = require('./Logic/dbLogic/employeeDblogic') 
const roledbLogic = require('./Logic/dbLogic/roleDblogic') 

const testInquirer = () => {
    console.log(` 
    ================== 
    Employee Database 
    ================== 
    `); 
    inquirer.prompt([{ 
      type: 'list', 
      name: 'companyChoice', 
      message: 'What would you like to do?', 
      choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update employee role','quit'],
      validate: titleInput => { 
        if (titleInput) { 
            return true; 
        } else { 
            console.log('Please enter a title.'); 
        return false; 
        } 
      }
    }])
    .then(answer => { 
      if (answer.companyChoice === 'view all departments') { 
        readDepartment().then(departments => { 
          console.table(departments) 
          testInquirer()
        })
      }        
      else if (answer.companyChoice === 'view all roles') { 
        readRole().then(roles => { 
          console.table(roles) 
          testInquirer()
        })
      }
      else if (answer.companyChoice === 'view all employees') { 
        readEmployee().then(employees => { 
          console.table(employees) 
          testInquirer()
        })
      }
      else if (answer.companyChoice === 'add a department') 
        addDepartment();
      else if (answer.companyChoice === 'delete a department') { 
        deleteDepartment(); 
      } 
      else if (answer.companyChoice === 'add a role') { 
        addRole(); 
      } 
      else if (answer.companyChoice === 'add an employee') { 
        addEmployee(); 
      } 
      else if (answer.companyChoice === 'update an employee role') { 
        updateEmployee(); 
      } 
      else {
        console.log('Goodbye!')
      }     
    });
  };
  testInquirer()

const addDepartment = () => { 
        console.log(` 
        ================= 
        Add a Department 
        ================= 
        `); 
        return inquirer.prompt([ 
        { 
            type: 'input', 
             name: 'departmentName', 
            message: 'What is the name of the department? (Required)', 
            validate: nameInput => { 
                if (nameInput) { 
                    return true; 
                } else { 
                console.log('Please enter a name.'); 
                return false; 
                } 
            } 
        }    
    ]) 
    .then(answer => { 
    return departmentdbLogic.addDepartment(answer.departmentName) 
    
    }) 
    .then((result)=> { 
    console.log(result) 
    chooseOption() 
    
    });
};
const addRole = () => { 
        console.log(` 
        ================= 
        Add a Role 
        ================= 
            `);
            return inquirer.prompt([ 
                { 
            type: 'input', 
            name: 'roleTitle', 
            message: 'What is the title of the role? (Required)', 
            validate: titleInput => { 
                if (titleInput) { 
                    return true; 
                } else { 
                    console.log('Please enter a title.'); 
                return false; 
                } 
            } 
        }, 
    { 
            type: 'number', 
            name: 'roleSalary', 
            message: 'What is the salary of the role? (Required)', 
            validate: salaryInput => { 
                if (salaryInput) { 
                     return true; 
                } else { 
                    console.log('Please Enter your salary.'); 
                    return false; 
                } 
            } 
    }, 
    { 
            type: 'number', 
            name: 'departmentId', 
            message: 'What is the department ID of the role? (Required)', 
            validate: idInput => { 
                if (idInput) { 
                    return true; 
                } else { 
                console.log('Please enter an ID.'); 
                    return false; 
                } 
            } 
         } 
    ]) 
    .then(answer => { 
    return roledbLogic.addRole(answer.roleTitle, answer.roleSalary, answer.departmentId) 
                
    }) 
    .then((result)=> { 
    console.log(result) 
    chooseOption() 
    }); 
                
    }; 
    const addEmployee = () => { 
    console.log(` 
    ================= 
    Add an Employee 
    ================= 
    `); 

        return inquirer.prompt([ 
        { 
        type: 'input', 
        name: 'firstName', 
        message: 'What is the first name of the employee? (Required)', 
        validate: firstInput => { 
            if (firstInput) { 
                return true; 
            } else { 
                console.log('Please enter a first name.'); 
                return false; 
                } 
            } 
        }, 
        { 
        type: 'input', 
        name: 'lastName', 
        message: 'What is the last name of the employee? (Required)', 
        validate: lastInput => { 
            if (lastInput) { 
                return true; 
            } else { 
                console.log('Please enter a last name.'); 
                return false; 
                } 
            } 
        }, 
        { 
        type: 'number', 
        name: 'roleId', 
        message: 'What is the role ID of the employee? (Required)', 
        validate: roleInput => { 
            if (roleInput) { 
                return true; 
        } else { 
                console.log('Please enter an ID.'); 
                return false; 
                } 
            } 
        }, 
        { 
        type: 'number', 
        name: 'departmentId', 
        message: 'What is the department ID of the employee? (Required)', 
        validate: departmentInput => { 
            if (departmentInput) { 
                return true; 
            } else { 
                console.log('Please enter an ID.'); 
                return false; 
                } 
            } 
        } 
                
    ]) 
    .then(answer => { 
        return employeedbLogic.addEmployee(answer.firstName, answer.lastName, answer.roleId, answer.departmentId) 
                
    }) 
    .then((result)=> { 
        console.log(result) 
                chooseOption() 
                
 }); 
                
    }; 
    const updateEmployee = () => { 
        console.log(` 
        ================= 
        Update an Employee 
        ================= 
    `); 
    return inquirer.prompt([ 
        { 
        type: 'number', 
        name: 'roleId', 
        message: 'What is the role ID of the employee? (Required)', 
        validate: roleInput => { 
            if (roleInput) { 
            return true; 
        } else { 
            console.log('Please enter a role ID!'); 
            return false; 
            } 
        } 
    }, 
        { 
        type: 'number', 
        name: 'employeeId', 
        message: 'What is the id of the employee? (Required)', 
        validate: idInput => { 
            if (idInput) { 
            return true; 
        } else { 
            console.log('Please enter an id.'); 
            return false; 
            } 
        }      
        }    
    ]) 
    .then(answer => { 
    return employeedbLogic.updateEmployee(answer.roleId, answer.employeeId) 
                
    }) 
    .then((result)=> { 
    console.log(result) 
    chooseOption() 
                
    }); 
                
   }; 
//    chooseOption(); 