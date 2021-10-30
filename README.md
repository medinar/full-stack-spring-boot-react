# Fullstack Spring Boot React Application

## Run db container in docker



## Running the docker image

````shell
docker run --rm -p 8080:8080 medinar/fullstack-spring-boot-react
````



## Running the database instance of postgres using docker command

```shell
❯ docker run -it --rm --network=db postgres:alpine psql -h db -U postgres
Password for user postgres: ********
psql (14.0)
Type "help" for help.

postgres=#
```



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



```shell
docker loginAuthenticating with existing credentials...
Login Succeeded	
```



Mac

```shell
./mvnw clean install -P build-frontend -P jib-push-to-dockerhub -Dapp.image.tag=3
```

Windows

```shell
mvnw clean install -P build-frontend -P jib-push-to-dockerhub -Dapp.image.tag=3
```

```
name: CI

on:
  pull_request:
    branches: [ main ]

  workflow_dispatch:

env:
  POSTGRESQL_VERSION: 14.0
  POSTGRESQL_DB: medinardb
  POSTGRESQL_USER: postgres
  POSTGRESQL_PASSWORD: password
  JAVA_VERSION: 1.17

jobs:
  build:
    runs-on: ubuntu-latest
    services:
      postgres:
        image: postgres:14.0
        env:
          POSTGRES_DB: ${{ env.POSTGRESQL_DB }}
          POSTGRES_USER: ${{ env.POSTGRESQL_USER }}
          POSTGRES_PASSWORD: ${{ env.POSTGRESQL_PASSWORD }}
        ports:
          - 5432:5432
        options: --health-cmd pg_isready --health-interval 10s --health-timeout 5s --health-retries 5
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-java@v1.4.3
        with:
          java-version: ${{ env.JAVA_VERSION }}
      - name: Maven Clean Package
        run: |
          ./mvnw --no-transfer-progress clean package -P build-frontend
```



## AWS CLI

**To terminate an environment**

- Run the following command.

```shell
aws elasticbeanstalk terminate-environment --environment-name Fullstackspringbootreact-env
```



To stop a DB instance by using the AWS CLI, call the [stop-db-instance](https://docs.aws.amazon.com/cli/latest/reference/rds/stop-db-instance.html) command with the following option:

```shell
aws rds stop-db-instance --db-instance-identifier aa7owmyzt7q7ch
```

[DB-INSTANCE](https://ca-central-1.console.aws.amazon.com/rds/home?region=ca-central-1#database:id=aa7owmyzt7q7ch;is-cluster=false)

