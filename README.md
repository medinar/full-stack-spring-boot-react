## Fullstack Spring Boot React Application

![Screen Shot 2021-11-05 at 5 20 40 PM](https://user-images.githubusercontent.com/25921121/140591277-3f7ae270-ae0c-4ba2-92aa-7668678f6f9c.png)

This project is about creating a full stack CRUD application with CI/CD using Github Actions and wiht the integration of the most popular cloud platform, AWS.

### Built With


![Spring Boot](https://user-images.githubusercontent.com/25921121/140591445-e4d41b4a-ad9e-471d-863b-8587f12a261d.png) 
![Java](https://user-images.githubusercontent.com/25921121/140591466-06a89bb9-d54b-476f-9148-1d08714451e2.png)
![React](https://user-images.githubusercontent.com/25921121/140591472-90bbacde-594e-4b37-bb98-2331e0da2471.png)
![PostgreSQL](https://user-images.githubusercontent.com/25921121/140591539-21d014b2-fa93-41c8-bb3e-441df9a6ec60.png)
![Docker](https://user-images.githubusercontent.com/25921121/140591486-d7bf8ca8-6cc2-4f66-8afd-ff5c12cacdf6.png)
![Github](https://user-images.githubusercontent.com/25921121/140591506-7f167d49-19a4-44df-9d0b-cce6e0364270.png)
![AWS](https://user-images.githubusercontent.com/25921121/140591520-d312898c-250c-443f-a9d4-4920288a3b69.png)

## Getting Started

### Prerequisites

### Installation

## Usage

### Run db container in docker

### Running the docker image

````shell
docker run --rm -p 8080:8080 medinar/fullstack-spring-boot-react
````

### Running the database instance of postgres using docker command

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

### Terminating the Elastic Beanstalk environment using the AWS CLI

Run the following command.

```shell
aws elasticbeanstalk terminate-environment --environment-name Fullstackspringbootreact-env
```

### Terminating the RDS database instance via the AWS CLI

To stop a DB instance by using the AWS CLI, call the [stop-db-instance](https://docs.aws.amazon.com/cli/latest/reference/rds/stop-db-instance.html) command with the following option:

```shell
aws rds stop-db-instance --db-instance-identifier aa7owmyzt7q7ch
```

[DB-INSTANCE](https://ca-central-1.console.aws.amazon.com/rds/home?region=ca-central-1#database:id=aa7owmyzt7q7ch;is-cluster=false)

## 

## Roadmap

## Contributing

## License

## Contact

## Acknowledgments





