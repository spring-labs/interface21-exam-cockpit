# i21 Exam Cockpit

## Functional Description
An user interface with corresponding backend services to manage exams and their contents. A lecturer is able to ...

The domain model looks like follows

![Domain model][dModel]

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

[dModel]: ./src/site/img/domain_model.png