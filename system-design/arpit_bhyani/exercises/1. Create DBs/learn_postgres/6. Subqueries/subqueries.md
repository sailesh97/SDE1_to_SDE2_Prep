In PostgreSQL, a **subquery** is a query nested inside another SQL query. It is usually used when the result of one query is needed by another query.

Let's use this sample schema:

```sql
employees
---------
id
name
department_id
salary
manager_id

departments
-----------
id
name
```

## 1. Subquery in `WHERE`

### Find employees earning more than the average salary

```sql
SELECT name, salary
FROM employees
WHERE salary > (
    SELECT AVG(salary)
    FROM employees
);
```

The inner query:

```sql
SELECT AVG(salary)
FROM employees;
```

returns something like:

```text
75000
```

Then the outer query becomes conceptually:

```sql
SELECT name, salary
FROM employees
WHERE salary > 75000;
```

This is a **scalar subquery** because it returns a single value.

---

## 2. Subquery with `IN`

### Find employees working in the IT or HR departments

```sql
SELECT name
FROM employees
WHERE department_id IN (
    SELECT id
    FROM departments
    WHERE name IN ('IT', 'HR')
);
```

Inner query:

```sql
SELECT id
FROM departments
WHERE name IN ('IT', 'HR');
```

might return:

```text
1
2
```

So the outer query effectively becomes:

```sql
SELECT name
FROM employees
WHERE department_id IN (1, 2);
```

---

## 3. Subquery with `NOT IN`

### Find employees who don't belong to departments located in Bangalore

```sql
SELECT name
FROM employees
WHERE department_id NOT IN (
    SELECT id
    FROM departments
    WHERE location = 'Bangalore'
);
```

---

## 4. Subquery with `EXISTS`

### Find departments that have at least one employee

```sql
SELECT d.name
FROM departments d
WHERE EXISTS (
    SELECT 1
    FROM employees e
    WHERE e.department_id = d.id
);
```

Here the inner query is **correlated** with the outer query:

```sql
e.department_id = d.id
```

The subquery is evaluated in relation to each department.

`EXISTS` only cares whether the subquery returns **at least one row**.

---

## 5. `NOT EXISTS`

### Find departments with no employees

```sql
SELECT d.name
FROM departments d
WHERE NOT EXISTS (
    SELECT 1
    FROM employees e
    WHERE e.department_id = d.id
);
```

---

## 6. Subquery in `FROM`

A subquery can act like a temporary table.

### Find departments whose average salary is greater than 80,000

```sql
SELECT department_id, avg_salary
FROM (
    SELECT department_id, AVG(salary) AS avg_salary
    FROM employees
    GROUP BY department_id
) AS dept_salary
WHERE avg_salary > 80000;
```

The inner query produces something like:

```text
department_id | avg_salary
--------------+-----------
1             | 95000
2             | 72000
3             | 88000
```

The outer query filters that result.

This type is commonly called a **derived table**.

---

## 7. Subquery in `SELECT`

You can also put a subquery directly in the `SELECT` list.

### Show each employee along with the company's average salary

```sql
SELECT
    name,
    salary,
    (SELECT AVG(salary) FROM employees) AS company_avg_salary
FROM employees;
```

Result:

```text
name    | salary | company_avg_salary
--------+--------+-------------------
Alice   | 90000  | 75000
Bob     | 60000  | 75000
Charlie | 70000  | 75000
```

---

## 8. Correlated subquery

A **correlated subquery** refers to a column from the outer query.

### Find employees earning more than their department's average salary

```sql
SELECT e.name, e.salary, e.department_id
FROM employees e
WHERE e.salary > (
    SELECT AVG(e2.salary)
    FROM employees e2
    WHERE e2.department_id = e.department_id
);
```

Notice:

```sql
e2.department_id = e.department_id
```

`e.department_id` comes from the **outer query**.

Conceptually:

```text
For each employee
       ↓
Find average salary of their department
       ↓
Compare employee salary with that average
       ↓
Return employee if salary > average
```

This is one of the most important examples for understanding correlated subqueries.

---

## 9. Subquery with `ANY`

### Find employees whose salary is greater than at least one employee in department 2

```sql
SELECT name, salary
FROM employees
WHERE salary > ANY (
    SELECT salary
    FROM employees
    WHERE department_id = 2
);
```

Suppose department 2 salaries are:

```text
50,000
60,000
70,000
```

Then:

```sql
salary > ANY (...)
```

essentially means:

```text
salary > 50,000
```

because being greater than **at least one** value is enough.

---

## 10. Subquery with `ALL`

```sql
SELECT name, salary
FROM employees
WHERE salary > ALL (
    SELECT salary
    FROM employees
    WHERE department_id = 2
);
```

This means the employee's salary must be greater than **every** salary in department 2.

If department 2 has:

```text
50,000
60,000
70,000
```

then the employee must earn:

```text
> 70,000
```

---

# 11. Subquery with `UPDATE`

Subqueries aren't limited to `SELECT`.

### Give a 10% raise to employees in the IT department

```sql
UPDATE employees
SET salary = salary * 1.10
WHERE department_id = (
    SELECT id
    FROM departments
    WHERE name = 'IT'
);
```

---

# 12. Subquery with `DELETE`

### Delete employees belonging to inactive departments

```sql
DELETE FROM employees
WHERE department_id IN (
    SELECT id
    FROM departments
    WHERE status = 'inactive'
);
```

---

# 13. Subquery with `INSERT`

Suppose you want to create a table containing high-paid employees:

```sql
INSERT INTO high_paid_employees (employee_id, name, salary)
SELECT id, name, salary
FROM employees
WHERE salary > (
    SELECT AVG(salary)
    FROM employees
);
```

---

# Main types to remember

| Type                     | Example                        | Returns                   |
| ------------------------ | ------------------------------ | ------------------------- |
| **Scalar subquery**      | `salary > (SELECT AVG(...))`   | One value                 |
| **Multi-row subquery**   | `id IN (SELECT id...)`         | Multiple rows             |
| **Correlated subquery**  | `WHERE e.dept_id = e2.dept_id` | Depends on outer row      |
| **Subquery in `WHERE`**  | `WHERE salary > (...)`         | Filtering                 |
| **Subquery in `FROM`**   | `FROM (SELECT ...) x`          | Temporary/derived table   |
| **Subquery in `SELECT`** | `SELECT (SELECT AVG(...))`     | Computed value            |
| **`EXISTS` subquery**    | `WHERE EXISTS (...)`           | Checks existence          |
| **`ANY` subquery**       | `> ANY (...)`                  | Compare with at least one |
| **`ALL` subquery**       | `> ALL (...)`                  | Compare with every value  |

### A useful mental model

Think of a subquery as:

```text
             Outer Query
                 │
        ┌────────▼────────┐
        │   Subquery      │
        │                 │
        │ Produces value/ │
        │ rows            │
        └────────┬────────┘
                 │
                 ▼
        Outer query uses it
```

The **three most important forms to learn first** are:

```sql
-- 1. Scalar
WHERE salary > (SELECT AVG(salary) FROM employees)

-- 2. Multi-row
WHERE department_id IN (SELECT id FROM departments)

-- 3. Correlated
WHERE salary > (
    SELECT AVG(e2.salary)
    FROM employees e2
    WHERE e2.department_id = e.department_id
)
```

These will make `IN`, `EXISTS`, `ANY`, `ALL`, derived tables, and correlated subqueries much easier to understand.
