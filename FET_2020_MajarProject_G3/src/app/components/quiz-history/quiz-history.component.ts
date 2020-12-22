import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServicesService } from 'src/app/login-services.service';
import { QuizHistoryService } from 'src/app/services/quiz-history.service';

@Component({
  selector: 'app-quiz-history',
  templateUrl: './quiz-history.component.html',
  styleUrls: ['./quiz-history.component.scss']
})
export class QuizHistoryComponent implements OnInit {
msg:string='';
  quizList:any;
  completeQuizList:any;
  userId:any;
  user:any;
  constructor( private router: Router
    ,private profileService:QuizHistoryService,
    private loginService:LoginServicesService) {

    this.loginService.getuserDetails().subscribe((data:any) =>{
      this.user=JSON.parse(JSON.stringify(data));
      this.userId=this.user.id;
      this.getCompleteList();
      this.getQuize();
    });
  }
  ngOnInit(): void {
    
  }
  quizeRounting(id:any)
  {

  this.router.navigate(['/dashboard/mcqPage/'+id])
  }

  getCompleteList(){
    this.profileService.getCompleteListOfUser(this.userId).subscribe((res: any) => {
      this.completeQuizList=res;

      
    })
  }

  getQuize(){
    this.profileService.getIncompleteQuize(this.userId).subscribe((res:any)=>{
      this.quizList=res;
 
      
    })
  }
}
