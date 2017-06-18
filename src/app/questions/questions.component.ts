import { Component, OnInit } from '@angular/core';
import {QuestionService} from '../question.service';
import {Question} from '../question';

import * as _ from 'underscore';
import { PagerService } from '../pager.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
  providers: [QuestionService,PagerService]
})
export class QuestionsComponent implements OnInit {

  questions: Question[];
  question: Question;
  question_text: string;
  answer: string;
  distractions: string;
  pager: any = {};
  pagedItems: any = [];
  totalItems: number;
  addButtonShowcontent: boolean = false;
  total_questions: number;
  limit: number = 10;
  constructor(private questionService: QuestionService, private pagerService: PagerService) { }

  ngOnInit() {
    this.questionService.getCount()
        .subscribe(count => {
            this.total_questions = count;
          });
    this.setPage(1,10);
  }

  showAddQuestionForm(){
    this.addButtonShowcontent = true;
  }
  cancelAddQuestionForm(){
    this.addButtonShowcontent = false;
  }
   
  setPage(page: number, limit: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        

        // get pager object from service
        this.pager = this.pagerService.getPager(this.total_questions, page, limit);
        
        this.questionService.getQuestions(page,limit).subscribe(questions => {
          this.questions = questions;
          this.pagedItems = this.questions;
        });
        // get current page of items
        //this.pagedItems = this.questions.slice(this.pager.startIndex, this.pager.endIndex + 1);

    }
    
    addQuestion(){
      const Question = {
        question_text: this.question_text,
        answer: this.answer,
        distractions: this.distractions.split(",")
      }
      this.questionService.addQuestion(Question)
        .subscribe(question => {
          this.questions.push(question);
          this.addButtonShowcontent = false;
      });
    }

    deleteQuestion(id:any){
      var questions = this.questions;
      this.questionService.deleteQuestion(id)
        .subscribe(data => {
          if (data.n==1){
            for ( var i=0 ; i < questions.length; i++){
              if (questions[i]._id == id){
                questions.splice(i,1);
              }
            }
          }
        });
    }

    /* updateQuestion(id:any){

     this.addButtonShowcontent = true;
     const Question = {
        _id: id,
        question_text: this.question_text,
        answer: this.answer,
        distractions: this.distractions
      }
      this.questionService.updateQuestion(Question)
        .subscribe(question => {
          this.questions.push(question)
      });
    }
*/
}
