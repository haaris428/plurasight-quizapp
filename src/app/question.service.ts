import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Question} from './question';
import 'rxjs/add/operator/map';


@Injectable()
export class QuestionService {

  constructor(private http: Http) { }
  //retrieving questions
  getQuestions(pageNumber, limit){
    var url2 = '/api/v1/questions?limit='+limit+'&page='+pageNumber;
    return this.http.get(url2).map(
      res => res.json());
  }

  addQuestion(newQuestion){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('/api/v1/questions', newQuestion,{headers: headers})
      .map(res => res.json());
  }

  deleteQuestion(id){
    return this.http.delete('/api/v1/questions/'+id)
      .map(res=>res.json());
  }

  getCount(){
    return this.http.get('/api/v1/questions/count')
      .map(this.extractData)
        .catch(this.handleError);
  }
  /*updateQuestion(id:string,newQuestion:any){
    var url_string = 'http://localhost:3000/api/v1/questions/'+ id;
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(url_string, newQuestion,{headers: headers})
      .map( res => res.json());
  }*/
}
