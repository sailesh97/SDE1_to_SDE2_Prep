We can use one string function inside another.


Can be used after where clause as well.

#### concat_ & concat_ws
select concat(fname,
 '-', lname) as FullName, dept
 from employees;
   fullname   |   dept
--------------+-----------
 Raj-Sharma   | IT
 Priya-Singh  | HR
 Arjun-Verma  | IT
 Suman-Patel  | Finance
 Kavita-Rao   | HR
 Amit-Gupta   | Marketing
 Neha-Desai   | IT
 Rahul-Kumar  | IT
 Anjali-Mehta | Finance
 Vijay-Nair   | Marketing
(10 rows)


bank_db=#


------


select concat_ws(':'
, fname, lname) as FullName, d
ept from employees;
   fullname   |   dept
--------------+-----------
 Raj:Sharma   | IT
 Priya:Singh  | HR
 Arjun:Verma  | IT
 Suman:Patel  | Finance
 Kavita:Rao   | HR
 Amit:Gupta   | Marketing
 Neha:Desai   | IT
 Rahul:Kumar  | IT
 Anjali:Mehta | Finance
 Vijay:Nair   | Marketing
(10 rows)

#### SUBSTRING

 SELECT SUBSTR('Hello Buddy!',1,6) as NewString;
 
Output:
 newstring
-----------
 Hello    +

(1 row)


#### REPLACE

Select REPLACE(dept, 'IT', 'TECH') from employees;


#### REVERSE:


SELECT REVERSE('HELL
O');

OP:
 reverse
---------
 OLLEH
(1 row)


#### LENGTH:
SELECT LENGTH('HELLO
');

 length
--------
      5
(1 row)


SELECT * from employees where length(fname) > 5;

#### UPPER & LOWER

#### LEFT, RIGHT, TRIM

Left: How many chars from left?
SELECT LEFT('HELLO WORLD', 4);
OP: HELL

RIGHT:
SELECT RIGHT('HELLO WORLD', 5);
OP: WORLD

TRIM: Remove extra space from both end
SELECT LENGTH('   ALRIGHT   ');
OP:13

SELECT LENGTH(TRIM('   ALRIGHT   '));
OP: 7

#### POSITION:
Get position of specific char in a string

select position('om' in 'Thomas')

Op: 3