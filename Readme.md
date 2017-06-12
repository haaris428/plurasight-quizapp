# HomeWork

### EndPoints
Following Apis Are Supported


### GET ALL QUESTIONS:
**API**: https://plurasight-quizapp.herokuapp.com/api/v1/questions
**Verb**: GET
**Description**: Gets all Questions From the Server (The limit imposed by API is of 25 Per Page)

### ADD, DELETE OR UPDATE:
**API**: https://plurasight-quizapp.herokuapp.com/api/v1/questions/
**Verb**: POST
**Description**: Add a Question
***Sample Body**:
~~~~{
    "question_text": "What is 3166 - 18321?",
    "answer": "1334",
    "distractions": [
      "8215",
      "2396",
      "7115",
      "3279"
    ]
  } 
  ~~~~
**API**: https://plurasight-quizapp.herokuapp.com/api/v1/questions/:id
**Verb**: DELETE
**Description**: Delete a question from the server

**API**: https://plurasight-quizapp.herokuapp.com/api/v1/questions/:id
**Verb**: PUT
**Description**: Update a question
***Sample Body**:
~~~~{
    "question_text": "What is 3166 - 18321?",
    "answer": "1334",
    "distractions": [
      "8215",
      "2396",
      "7115",
      "3279"
    ]
  } 
  ~~~~


### Pagination
**API**: https://plurasight-quizapp.herokuapp.com/api/v1/questions?limit=10&page=1
**Verb**: GET
**Description**: Get Paginated Results from the Server

### Sort
**API**: https://plurasight-quizapp.herokuapp.com/api/v1/questions?limit=10&page=1&sortby=createdOn
**Verb**: GET
**Description**: Get Results Sorted by Created On Date

### Search/Filter
**API**: https://plurasight-quizapp.herokuapp.com/api/v1/questions/search
**Verb**: POST
**Sample Body**: {"search": "8967"}
**Description**: Get Paginated Results from the Server

### Count
**API**: https://plurasight-quizapp.herokuapp.com/api/v1/questions/count
**Verb**: GET
**Description**: Get Count of Questions in the DB


### Summary
Following design decisions were made keeping in view that this was a homework task meant for prototyping:

  - Using Node JS to quickly prototype a RESTful Server 
  - Keeping FrontEnd simple in AngularJS and only implementing key functionalities
  - Using MongoDB as DB, utilizing its skip, limit and indexing functionality to introduce pagination and filtering
  - Indexing Questions on CreatedOn date only, hence only allowing sorting on CreatedOn date
  - Pagination, Filtering and Sorting were done all on backend to reduce network traffic


### Limitaions and Room For Improvement

Currently FrontEnd was kept as simple as possible. A search bar can be added, so can editting component, as well as allowing users to sort by a field of there choice (dont see a point in sorting questions by text)

Unit Test functionality can be added to both frontend and backend, due to limitation in time and simplicity of the backend server, I skipped right into coding.

As a part of this task, I was trying to get more familiar with both angular and heroku by picking up a brand new technology and getting my hands dirty in them

A functional test suite can be added in robot to test api backends

### Hosting
App is hosted on heroku

### Local Deployment:

To locally run this app there needs to be a mongodb installed.
Run importdata.py helper script to load mongodb (make sure to provide right credentials)

Following 2 indexes need to be created on MongoDB
Indexes: createdOn Descending and Text index on question_text




