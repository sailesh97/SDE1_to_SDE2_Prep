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