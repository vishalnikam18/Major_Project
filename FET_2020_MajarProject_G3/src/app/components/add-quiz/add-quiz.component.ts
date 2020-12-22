import { Component, OnInit } from '@angular/core';
import { Quiz } from 'src/app/models/quiz.model';
import { QuizService } from 'src/app/services/quiz.service';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.scss']
})
export class AddQuizComponent implements OnInit {


  quiz = new Quiz();
  category: any;
  submitted = false;
  constructor(private tutorialService: QuizService, private router: Router,
    private categoryservice: CategoryService) { }


  ngOnInit(): void {


    this.retrieveCategories();

  }



  retrieveCategories(): void {
    this.categoryservice.getAll().subscribe(
      (data) => {
        this.category = data;

      },
      (error) => {


      }
    );
  }


  addQuize(id: any) {


    this.tutorialService.addQuize(this.quiz).subscribe(data => {
      if (Array.isArray(data) === true) {

        this.submitted = true;
      }
      else {

        this.submitted = false;

      }
      this.router.navigate(['/dashboard/question/' + id.quizname])
    })
  }

}
