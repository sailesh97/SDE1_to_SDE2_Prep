1. NOT NULL
```
CREATE TABLE CUSTOMERS
(
    id INT NOT NULL,
    name VARCHAR(100) NOT NULL
);
```

2. DEFAULT VALUE
You can use two constraints on same column as well

```
CREATE TABLE customers
(
    acc_no INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    acc_type VARCHAR(50) NOT NULL DEFAULT 'SAVINGS'
)
```

3. Auto increment feature: Use "SERIAL"

```
CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    firstname VARCHAR(50),
    lastname VARCHAR(50)
);
```

4. Task:
```
CREATE TABLE employees(
    emp_id SERIAL PRIMARY KEY,
    fname VARCHAR(50) NOT NULL,
    lname VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    dept VARCHAR(50),
    salary DECIMAL(10,2) DEFAULT 30000.00,
    hire_date DATE NOT NULL DEFAULT CURRENT_DATE
);
```

Insert Data:
```
INSERT INTO employees (emp_id, fname, lname, email, dept, salary, hire_date) 

      VALUES

(1, 'Raj', 'Sharma', 'raj.sharma@example.com', 'IT', 50000.00, '2020-01-15'),

(2, 'Priya', 'Singh', 'priya.singh@example.com', 'HR', 45000.00, '2019-03-22'),

(3, 'Arjun', 'Verma', 'arjun.verma@example.com', 'IT', 55000.00, '2021-06-01'),

(4, 'Suman', 'Patel', 'suman.patel@example.com', 'Finance', 60000.00, '2018-07-30'),

(5, 'Kavita', 'Rao', 'kavita.rao@example.com', 'HR', 47000.00, '2020-11-10'),

(6, 'Amit', 'Gupta', 'amit.gupta@example.com', 'Marketing', 52000.00, '2020-09-25'),

(7, 'Neha', 'Desai', 'neha.desai@example.com', 'IT', 48000.00, '2019-05-18'),

(8, 'Rahul', 'Kumar', 'rahul.kumar@example.com', 'IT', 53000.00, '2021-02-14'),

(9, 'Anjali', 'Mehta', 'anjali.mehta@example.com', 'Finance', 61000.00, '2018-12-03'),

(10, 'Vijay', 'Nair', 'vijay.nair@example.com', 'Marketing', 50000.00, '2020-04-19');
```

### Issue:
We've defined `emp_id` as SERIAL constraint, but for the records we've explicitly mentioned the value. It won't throw error, but all 10 records inserted in a single statement, hence the counter increased by `1`. 

While inserting 11th record, If you won't explicitly mention value of emp_id, it will try to insert 1 instead of 10+1(11).

### Check Current value of autoincrement (SERIAL) column:
tableName_columnName_seq

SELECT currval('employees_emp_id_seq');

### Set value of auto-increment column:
SELECT setval('employees_emp_id_seq', 1);

