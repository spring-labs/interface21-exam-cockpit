import { Exam } from './exam';

export var EXAMS: Exam[] = [
    { "id":  1, "examIdentifier": "SS-01/2015", "title": "Systeme & Signale (Q1)", "maxScorePoints": 20, "active": false, "version": "1.0",
    "questions": [
        {
            "id": "1",
            "text": "When has Napoleon died?",
            "order": 1,
            "weight": 20,
            "dtype": "SINGLE"
        }    
    ]},
    { "id":  2, "examIdentifier": "SS-05/2015", "title": "Systeme & Signale (Q2)", "maxScorePoints": 20, "active": true, "version": "1.1" },
    { "id":  3, "examIdentifier": "DF-01/2016", "title": "Digitale Filter", "maxScorePoints": 18, "active": false, "version": "1.2" },
    { "id":  4, "examIdentifier": "DF-04/2016", "title": "Digitale Filter", "maxScorePoints": 18, "active": true, "version": "2.0" },
    { "id":  5, "examIdentifier": "DS-04/2014", "title": "Digitale Signalverarbeitung", "maxScorePoints": 20, "active": false, "version": "1.0" },
    { "id":  6, "examIdentifier": "DS-01/2015", "title": "Digitale Signalverarbeitung", "maxScorePoints": 20, "active": false, "version": "1.1" },
    { "id":  7, "examIdentifier": "DS-04/2015", "title": "Digitale Signalverarbeitung", "maxScorePoints": 20, "active": true, "version": "2.0" },
    { "id":  8, "examIdentifier": "03/2015", "title": "Numerik I", "maxScorePoints": 20, "active": false, "version": "v1.0" },
    { "id":  9, "examIdentifier": "11/2015", "title": "Numerik I", "maxScorePoints": 20, "active": true, "version": "v2.0" },
    { "id": 10, "examIdentifier": "02/2015", "title": "Numerik II", "maxScorePoints": 18, "active": true, "version": "v1.0" }
];
