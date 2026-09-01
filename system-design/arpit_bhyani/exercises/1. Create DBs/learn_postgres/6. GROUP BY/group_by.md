#### No of employees in each dept:
![alt text](./2. no_of_employees_in_each_dept.png.png)


bank_db=# select dept, count(emp_id) from employees group by dept;
   dept    | count
-----------+-------
 Marketing |     2
 Finance   |     2
 IT        |     4
 HR        |     2
(4 rows)


bank_db=# select dept, sum(emp_id) from employees group by dept;
   dept    | sum
-----------+-----
 Marketing |  16
 Finance   |  13
 IT        |  19
 HR        |   7
(4 rows)