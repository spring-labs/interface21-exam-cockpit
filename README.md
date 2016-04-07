# interface21-exam-cockpit
An user interface and corresponding backend services to manage exams and their contents. A lecturer is able to ...

## Create exams
An exam (`Exam`, or better spoken exam definition) combines a collection of questions that need to be answered by exam candidates. A maximum number of score points can be achieved by
executing the exam (`Execution`).

## Add questions and answers to an exam
An exam question (`Question`) may be an multiple-choice question, a single-choice question, may require to give a textual answer or challenges the
exam candidate to solve a puzzle (i.e. code puzzle, where pre-defined code snippets must be applied in correct order). An exam should be
populated with a number of questions, otherwise an execution makes no sense. Each question may have one or more answers, depending on the
type of question (`QuestionType`).

## Deactivate obsolete exams
Exams may change over the time and only the newest version of the exam definition should be kept active and released for execution. A lecturer
can modify exams, apply version information to them and activate or deactivate an exam.


