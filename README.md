# ACME Student Management System

This project is about creating a full stack CRUD application with CI/CD using Github Actions and features the use of the most popular cloud platform today, AWS.

Table display of the students added to the system
![Table display of the students added to the system](https://user-images.githubusercontent.com/25921121/140591277-3f7ae270-ae0c-4ba2-92aa-7668678f6f9c.png) 


Create new student form
![Create new student form](https://user-images.githubusercontent.com/25921121/140593836-96d40bd9-0af0-48d4-a99e-dd90a612b575.png)


Update student form
![Update student form](https://user-images.githubusercontent.com/25921121/140593614-6b972664-b850-456c-8677-c8cd30bf9ed0.png) 


Delete student confirmation
![Delete student confirmation](https://user-images.githubusercontent.com/25921121/140593624-749b4b39-3f4f-4def-a770-91bb068b1084.png) 


Student deleted notification
![Student deleted notification](https://user-images.githubusercontent.com/25921121/140593626-1f4b317d-4966-468a-b871-0c80352a4c19.png) 

[top :arrow_up:](https://github.com/medinar/full-stack-spring-boot-react#acme-student-management-system)

### Built With
![Spring Boot](https://user-images.githubusercontent.com/25921121/140591445-e4d41b4a-ad9e-471d-863b-8587f12a261d.png) 
![Java](https://user-images.githubusercontent.com/25921121/140591466-06a89bb9-d54b-476f-9148-1d08714451e2.png)
![React](https://user-images.githubusercontent.com/25921121/140591472-90bbacde-594e-4b37-bb98-2331e0da2471.png)
![PostgreSQL](https://user-images.githubusercontent.com/25921121/140591539-21d014b2-fa93-41c8-bb3e-441df9a6ec60.png)
![Docker](https://user-images.githubusercontent.com/25921121/140591486-d7bf8ca8-6cc2-4f66-8afd-ff5c12cacdf6.png)
![Github](https://user-images.githubusercontent.com/25921121/140591506-7f167d49-19a4-44df-9d0b-cce6e0364270.png)
![AWS](https://user-images.githubusercontent.com/25921121/140591520-d312898c-250c-443f-a9d4-4920288a3b69.png)

[top :arrow_up:](https://github.com/medinar/full-stack-spring-boot-react#acme-student-management-system)

## Getting Started

### Prerequisites

[top :arrow_up:](https://github.com/medinar/full-stack-spring-boot-react#acme-student-management-system)

### Installation

[top :arrow_up:](https://github.com/medinar/full-stack-spring-boot-react#acme-student-management-system)

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

[top :arrow_up:](https://github.com/medinar/full-stack-spring-boot-react#acme-student-management-system)

## Roadmap
- [x] Implement Update Student
- [ ] Update implementation of Update Student
- [ ] Implement uploading of profile picture
- [ ] Planning to turn this into a Player Management System (Sports :bouncing_ball_man:) 

[top :arrow_up:](https://github.com/medinar/full-stack-spring-boot-react#acme-student-management-system)

## Contributing
Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". Don't forget to give the project a star! Thanks again!

Fork the Project
Create your Feature Branch (git checkout -b feature/AmazingFeature)
Commit your Changes (git commit -m 'Add some AmazingFeature')
Push to the Branch (git push origin feature/AmazingFeature)
Open a Pull Request

## License
Distributed under the MIT License. See LICENSE.txt for more information.

## Contact
Rommel Medina - rommel.d.medina@gmail.com

Project Link: [ACME - Student Management System](http://fullstackspringbootreact-env.eba-mrbwn2uj.ca-central-1.elasticbeanstalk.com/)

## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc.
- Resources:
  - [Java](https://www.java.com/en/)
  - [Spring Boot](https://spring.io/projects/spring-boot)
  - [React](https://reactjs.org/)
  - [Ant Design](https://ant.design/)
  - [Docker](https://hub.docker.com/)
  - [AWS](https://aws.amazon.com/)
 
[top :arrow_up:](https://github.com/medinar/full-stack-spring-boot-react#acme-student-management-system)
