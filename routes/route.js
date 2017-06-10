const express = require ('express')
const router = express.Router();
const Question = require('../models/questions');

//gets
router.get('/',(req,resp, next) =>{
  resp.json({"size": "count"});
});

router.get('/questions/count',(req,resp,next) =>{
 Question.count({},function(err, count) {
   let return_obj = {"size": count}
    resp.json(return_obj);
  });
});

router.get('/questions',(req,resp,next) =>{

  let limit = req.query.limit || 25;
  let page = req.query.page || 1;
  Question.find(function(err, questions) {
    resp.json(questions)
  }).skip(limit*(page-1)).limit(limit).sort({createdOn: "desc"});
});

router.get('/questions/:id',(req,resp,next) =>{
  Question.find({_id: req.params.id}, function(err,result){
    if (err){
      resp.json(err);
    }
    else {
      resp.json(result);
    }
  });
});



// post
router.post('/questions/',(req,resp,next) =>{

  let newQuestion = new Question({
    question_text: req.body.question_text,
    answer: req.body.answer,
    distractions: req.body.distractions
  });
  newQuestion.save(function(err,questions){
    if (err) {
      resp.json({msg:"Error adding new Question " + err});
    }
    else {
      resp.json({msg: "Question Added Successfully"});
    }
  });
});

// text search
router.post('/questions/search', (req,resp,next) =>{
  
  Question.find({$text: {$search: req.body.search}})
    .exec(function(err,result) {
        if (err) {
          resp.json(err);
        }
        else {
          resp.json(result);
        }
      });

});

//update
router.put('/questions/:id',(req,resp,next) =>{
  let id = req.params.id;
  let newQuestion = new Question({
    question_text: req.body.question_text,
    answer: req.body.answer,
    distractions: req.body.distractions
    });

  questionToUpdate = {};
  questionToUpdate = Object.assign(questionToUpdate,newQuestion._doc);
  delete questionToUpdate._id;
  Question.findByIdAndUpdate(id,questionToUpdate,{upsert: true}, function(err,result){
      if (err){
        resp.json(err);
     }
     else {
       resp.json({msg:"Resource succesfully Updated"});
     }
    });
});
//Delete
router.delete('/questions/:id',(req,resp,next) =>{
  Question.remove({_id: req.params.id}, function(err,result){
    if (err){
      resp.json(err);
    }
    else {
      resp.json(result);
    }
  });
});


module.exports = router;
