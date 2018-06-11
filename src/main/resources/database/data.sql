USE entity;

IF (NOT EXISTS (
  SELECT * FROM Departments
))
  INSERT INTO Departments (Name)
    VALUES ('HR'), ('Tech'), ('Finance');

IF (NOT EXISTS (
  SELECT * FROM Employees
))
  INSERT INTO Employees (Name, Active, dp_Id)
    VALUES ('Petro', 1, 1), ('Vasyl', 1, 3), ('Olha', 1, 2),
	       ('Andriy', 1, 2), ('Solomia', 0, 1), ('Zoriana', 1, 3),
		   ('Pavlo', 0, 2), ('Vasylyna', 1, 2), ('Oleh', 0, 1),
		   ('Bohdan', 0, 3), ('Roman', 1, 1), ('Marian', 1, 3),
		   ('Bohdana', 1, 2), ('Halyna', 0, 3), ('Markian', 1, 1);