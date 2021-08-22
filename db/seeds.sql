INSERT INTO department
( id, name )
VALUES
 (1, 'Front-end Development'),
 (2, 'Back-end Development'), 
 (3, 'Marketing'), 
 (4, 'Management'); 

INSERT INTO role 
 (id, title, salary, department_id) 

VALUES 
 (1, 'Senior UI Director', 105000, 1), 
 (2, 'Software Developer', 93000, 2), 
 (3, 'Marketing Research Analyst', 77000, 3), 
 (4, 'Manager', 100000, 4);

 INSERT INTO employee 
 (id, first_name, last_name, role_id, manager_id) 
VALUES 
 (1'Gandolf', 'Frodo', 1, 4), 
 (2 'Arwen', 'Aragorn', 2, 4), 
 (3, 'Galadriel', 'Legolas', 3, 4), 
 (4, 'Samwise', 'Gimli son of Gloin', 4, 4); 


// Question: How do I connect the manager_id?