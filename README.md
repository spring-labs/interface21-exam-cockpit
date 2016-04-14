# i21 Exam Cockpit

The i21 Exam Cockpit serves as a demo application, that is used in lectures on "Mobile Backend Engineering". Students will built this
application step-by-step and will use it afterwards to take an exam.

The latest version of Exam Cockpit is running on Heroku [https://exam-cockpit.herokuapp.com/index.html][https://exam-cockpit.herokuapp.com/index.html]
(login with username/password: user/test)

## Technologies

- Java SE 1.8
- Spring Boot, Spring Data Rest, Spring Cloud OAuth2
- JPA w/ Hibernate
- Netflix components: Eureka, Ribbon, Zuul, Archaius, Feign, Hystrix
- Angular (2)
- Twitter Bootstrap
- Maven (prob. Gradle)
- OAuth2

## Functional Description
An user interface with corresponding backend services to manage, execute and evaluate electronic exams.

The Business Object Model (BOM) looks like follows

![Domain model][dModel]

A lecturer is able to ...

### Create exams
An exam (`Exam`, or better spoken exam definition) combines a collection of questions that need to be answered by exam candidates. A maximum number of score points can be achieved by
executing the exam (`Execution`).

### Add questions and answers to an exam
An exam question (`Question`) may be an multiple-choice question, a single-choice question, may require to give a textual answer or challenges the
exam candidate to solve a puzzle (i.e. code puzzle, where pre-defined code snippets must be applied in correct order). An exam should be
populated with a number of questions, otherwise an execution makes no sense. Each question may have one or more answers, depending on the
type of question (`QuestionType`).

### Deactivate obsolete exams
Exams may change over the time and only the newest version of the exam definition should be kept active and released for execution. A lecturer
can modify exams, apply version information to them and activate or deactivate an exam.

A candidate can...

### Take an Exam


## Deployment process

First ensure that you have JDK in verion 1.8+ installed, in order to compile and run the application.

### Clone and Develop

```
$ git clone git@github.com:interface21io/interface21-exam-cockpit.git exam-cockpit
$ cd exam-cockpit/src/main/resources/static
$ npm start
```

Your favorite webbrowser is started and you're pointed t [http://localhost:3000/index.html](http://localhost:3000/index.html) to verify
code changes. When you switch back to your editor (we prefer vscode) and make changes, these changes become visible as soon as you
go back to the webbrowser.

## Development process

### Clone, Build and Run

```
$ git clone git@github.com:interface21io/interface21-exam-cockpit.git exam-cockpit
$ cd exam-cockpit
$ mvn package
$ java -jar target/cockpit.jar
```

Open your favorite webbrowser and go to [http://localhost:8080/index.html](http://localhost:8080/index.html). The default user has the
following credentials: `username: admin` and `password: test`. The available operations can be found by sending a `GET` request to
[/api](http://localhost:8080/api).

### Architecture (Backend)

For this sample app we try to make the backend services as simple as possible - with less code as possible. A more fine-grained domain
model than the [BOM][Domain model] is used as persisted model (Entity Object Model) and API model (usually referred to as View Object Model).
Therefore we annotate our classes with JPA annotations and expose them as RESTful resources (Spring Data Rest annotations).

> No layering - just stuff, no fluff.

Bootstrapping the backend services happens as Spring Boot application (class `ExamCockpitApplication`). Since we're using HATEOS to expose
our domain, we only need to expose the entry points to the domain model. All other types can be referenced through the RESTful API.

#### How to identify domain model entry points?

> Well, an entry point is a type that has no incoming directed relationships.

To identify all entry points we need to have a closer look at the effective domain model in Java and figure out domain classes that aren't
referenced from other domain classes.

![Persisted model][pModel]

The `Exam` and `Execution` class (green color) are those we define as model entry points. From both classes we can reference all other types
of interest. Only for these two classes we need to implement a Spring Data Repository.

### Architecture (Frontend)

The frontend application to manage exams is built with Angular (version 2), based on TypeScript and Twitter Bootstrap.

[dModel]: ./src/site/img/domain_model.png
[pModel]: ./src/site/img/persisted_model.png