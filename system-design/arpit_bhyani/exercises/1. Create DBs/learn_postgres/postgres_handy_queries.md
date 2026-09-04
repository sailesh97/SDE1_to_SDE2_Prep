enter into db mode, login to db:  
psql -U postgres
\l;

List all dbs
select datname from pg_database;

change db
\c

Describe table schema
\d table_name;

List all tables present in DB:
\dt;

List all views:
\dv;
