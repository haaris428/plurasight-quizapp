export class Question{
  _id?: string;
  question_text: string;
  answer: string;
  distractions: string[];
  showContent: boolean = false;
}
