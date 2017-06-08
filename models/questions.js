const mongoose = require('mongoose');

const QuestionsSchema = mongoose.Schema({
  question_text:{
    type: String,
    required: true
  },
  answer:{
    type:String,
    required: true
  },
  distractions:{
    type:Array,
    required:true
  },
  createdOn:{
    type:Date,
    required:true,
    default: Date.now
  },
  updatedOn:{
    type:Date,
    required:false
  }
});

const Questions = module.exports = mongoose.model('Questions',QuestionsSchema);
