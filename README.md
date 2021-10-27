# Fullstack Spring Boot React Application

## Running the docker image

````shell
docker run --rm -p 8080:8080 medinar/fullstack-spring-boot-react
````



## Running the database instance of postgres using docker command

```shell
docker run -it --rm --rm postgres:alpine psql -h aa7owmyzt7q7ch.corewigv46z6.ca-central-1.rds.amazonaws.com -U medinar -d postgres
```

```shell
medinar=> create database medinardb
medinar-> ;
CREATE DATABASE
medinar=> \c medinardb
psql (14.0, server 12.5)
SSL connection (protocol: TLSv1.2, cipher: ECDHE-RSA-AES256-GCM-SHA384, bits: 256, compression: off)
You are now connected to database "medinardb" as user "medinar".
```

```shell
medinardb=> \d
               List of relations
 Schema |       Name       |   Type   |  Owner  
--------+------------------+----------+---------
 public | student          | table    | medinar
 public | student_sequence | sequence | medinar
(2 rows)

medinardb=> 
```



