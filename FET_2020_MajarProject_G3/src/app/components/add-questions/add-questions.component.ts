import { Component, OnInit, Input } from '@angular/core';
import { Question } from 'src/app/models/question.model';
import { Router, ActivatedRoute } from '@angular/router';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-add-questions',
  templateUrl:'./add-questions.component.html',
  styleUrls: ['./add-questions.component.scss']
})
export class AddQuestionsComponent implements OnInit {
  @Input() quizname: any;
  category: any;
  type: any;
  submitted = false;
  que = new Question();
  constructor(
    private questionservice: QuestionsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
   
    this.getTypeName();
    this.quizname=this.route.snapshot.paramMap.get("quizname")
  }

  

  addQuestion() {
    if (typeof this.que.answer == "undefined") {
     
      return;
    }
    this.submitted = true;

    this.que.quizname = this.quizname;
    
    this.questionservice.addQuestion(this.que).subscribe((data) => {
      
    });
  }

  btnClick() {
    this.router.navigate(["/dashboard"]);
  }
  

  getTypeName() {
    return this.questionservice.getTypeName().subscribe((que) => {
      this.type = que;

    });
  }

}
