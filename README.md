### OVERVIEW

This code intended to take the technical test phase 2 at Folkatech. This code is written using Typescript with ExpressJS framework and combined with several dependencies and unit testing.

### REQUIREMENTS TO RUN THIS CODE

1. Docker
2. Docker Compose

### HOW TO RUN THIS CODE?

1. Open terminal and run this line.
   `docker-compose up -d`
2. Run this script on your terminal to insert initial data in database
   ```
   docker exec -it postgres-server psql -U postgres -d technical_test -c "INSERT INTO customers (customer_number, name) VALUES (1001, 'Bob Martin'); INSERT INTO customers (customer_number, name) VALUES (1002, 'Linus Torvalds'); INSERT INTO accounts (account_number, customer_number, balance) VALUES (555001, 1001, '10000'); INSERT INTO accounts (account_number, customer_number, balance) VALUES (555002, 1002, '15000');"
   ```
3. ✅ Server started successfully on port 3005

### HOW TO TEST API?

1. Open postman
2. Import posman collection (Technical Test Folkatech.postman_collection.json)
3. Register user
4. Select spesific user then change role from `user` to `admin` (all important access restricted with role `admin`)

### HOW TO RUN UNIT TEST?

1. Open terminal and run this line
   `yarn test`

### CREDIT

Iqbal Ikhlasul Amal
