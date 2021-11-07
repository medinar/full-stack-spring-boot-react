# ACME Student Management System

This project is about creating a full stack CRUD application with CI/CD using Github Actions and features the use of the most popular cloud platform today, AWS. (Work in progress)

### Screenshots
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

### Diagrams
Diagram below shows Maven bundles the front-end and backend application then creates a docker image. The Jib Maven plugin then either builds a local docker image or builds and pushes docker image to docker hub. A docker-compose.yml file contains the reference to the image in the docker hub to be deployed to the AWS.
![fullstack-spring-react-1](https://user-images.githubusercontent.com/25921121/140598305-2491aab0-de17-405b-9756-d39a7050e177.jpg)

Diagram below shows the docker image uploaded to AWS Elastic Beanstalk Environment. It is now managed inside the ECS Cluster and protected by SG (Security Group). The application inside the EC2 instance has permission to access the AWS RDS PostgreSQL since they reside in the same environment. To grant our local application to access the AWS RDS, an SG must be defined. 
![fullstack-spring-react-2](https://user-images.githubusercontent.com/25921121/140598482-d7254220-97db-42e7-84e1-cca79dd341d6.jpg)


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
What things you need to install the software and how to install them

```
[Java 17](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html)
[Docker](https://www.docker.com/get-started)
[Docker PostgreSQL Image](https://hub.docker.com/_/postgres)
[Intellij](https://www.jetbrains.com/idea/)
[AWS](https://portal.aws.amazon.com/billing/signup#/start)
```

[top :arrow_up:](https://github.com/medinar/full-stack-spring-boot-react#acme-student-management-system)

### Installation

[top :arrow_up:](https://github.com/medinar/full-stack-spring-boot-react#acme-student-management-system)

## Usage

### Connecting to Docker PostgreSQL

1. Create docker network

   ```shell
   ❯ docker network create db                                               
   92cc19cc6ef7f64a6387ad0465dc133eefe1c425171c17bb418503a9e5fbcc58
                                                                                                                                                                 
   full-stack-spring-boot-react git/edit-favicon*  
   ❯ 
   ```

2. Create a folder to mount `/var/lib/postgresql/data` and `cd` to that folder

   Example: db-data

   ```shell
   full-stack-spring-boot-react  
   ❯ cd ~/Desktop/db-data               
                                                                                                                                                                 
   ```

3. Run the command below.

   ```shell
   ~/Desktop/db-data   
   ❯ docker run --name db -p 5432:5432 --network=db -v "$PWD:/var/lib/postgresql/data" -e POSTGRES_PASSWORD=password -d postgres:alpine
   b59cfc5db67e861bae4279487e5aea6ff6860915d7b33b78a944903bb53f7d7f                                                                                               
   
   ~/Desktop/db-data   
   ❯
   ```

4. Check if the container is running

   ```shell
   ~/Desktop/db-data   
   ❯ docker ps                                                                                                                         
   CONTAINER ID   IMAGE             COMMAND                  CREATED          STATUS          PORTS                    NAMES
   b59cfc5db67e   postgres:alpine   "docker-entrypoint.s…"   10 minutes ago   Up 10 minutes   0.0.0.0:5432->5432/tcp   db
                                                                                                                                                                 
   ~/Desktop/db-data   
   ❯
   ```

5. Connecting to the DB using PSQL Container

   ```shell
   ~/Desktop/db-data   
   ❯ docker run -it --rm --network=db postgres:alpine psql -h db -U postgres
   Password for user postgres: 
   psql (14.0)
   Type "help" for help.
   
   postgres=# \l
                                    List of databases
      Name    |  Owner   | Encoding |  Collate   |   Ctype    |   Access privileges   
   -----------+----------+----------+------------+------------+-----------------------
    medinardb | postgres | UTF8     | en_US.utf8 | en_US.utf8 | 
    postgres  | postgres | UTF8     | en_US.utf8 | en_US.utf8 | 
    template0 | postgres | UTF8     | en_US.utf8 | en_US.utf8 | =c/postgres          +
              |          |          |            |            | postgres=CTc/postgres
    template1 | postgres | UTF8     | en_US.utf8 | en_US.utf8 | =c/postgres          +
              |          |          |            |            | postgres=CTc/postgres
   (4 rows)
   
   postgres=# \c medinardb
   You are now connected to database "medinardb" as user "postgres".
   medinardb=# \d 
                   List of relations
    Schema |       Name       |   Type   |  Owner   
   --------+------------------+----------+----------
    public | student          | table    | postgres
    public | student_sequence | sequence | postgres
   (2 rows)
   
   medinardb=# 
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
  - [Spring Data JPA](https://spring.io/projects/spring-data-jpa)
  - [React](https://reactjs.org/)
  - [Ant Design](https://ant.design/)
  - [Jib Maven Plugin](https://github.com/GoogleContainerTools/jib)
  - [Docker](https://hub.docker.com/)
  - [Docker PostgreSQL](https://hub.docker.com/_/postgres)
  - [AWS](https://aws.amazon.com/)
 
[top :arrow_up:](https://github.com/medinar/full-stack-spring-boot-react#acme-student-management-system)
