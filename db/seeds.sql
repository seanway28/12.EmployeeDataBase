INSERT INTO department
( name )
VALUES
('Front-end Development'),
('Back-end Development'), 
 ( 'Marketing'), 
 ('Management'); 

INSERT INTO role 
 ( title, salary, department_id) 

VALUES 
 ('Senior UI Director', 105000, 1), 
 ('Software Developer', 93000, 2), 
 ('Marketing Research Analyst', 77000, 3), 
 ('Manager', 100000, 4);

 INSERT INTO employee 
 (first_name, last_name, role_id, manager_id) 
VALUES 
 ('Jamie', 'Fraser', 1, 4), 
 ( 'Jackie', 'London', 2, 4), 
 ( 'Roberta', 'Bruce', 3, 4), 
 ( 'Gerald', 'Griffin', 4, 4); 


