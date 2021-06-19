## Commands for database setup in PostgreSQL 

### Steps to follow to work on this template:

- `sudo su -u postgres`

- `psql template1` 

- `CREATE USER your_username WITH PASSWORD 'your_password'`

- `CREATE DATABASE your_database`

- `GRANT ALL PRIVILEGES ON DATABASE your_database TO your_username`

- `ALTER USER your_username WITH superuser`


