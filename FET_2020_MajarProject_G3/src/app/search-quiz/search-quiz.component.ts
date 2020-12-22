import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Quize } from '../models/Search.model';
import { SearchService } from '../search.service';
import { AddtoFavService } from '../services/addto-fav.service';
import { LoginServicesService } from '../login-services.service';

@Component({
  selector: 'app-search-quiz',
  templateUrl: './search-quiz.component.html',
  styleUrls: ['./search-quiz.component.scss']
})
export class SearchQuizComponent implements OnInit {
  quizes?: Quize[];
  quizList: any = [];
  quizname = '';
  selected: boolean = false;
  favlistData: any;
  quizelistLength: any;
  favListLength: any;
  UpdatedQuiz: any = [];
  quizeId: any;
  user: any;
  userId: any;
  userMail: any;
  data: any;
  constructor(private quizeService: SearchService,
    private route: ActivatedRoute,
    private router: Router,
    private addFavService: AddtoFavService,
    private activatedRoute: ActivatedRoute,
    private loginService: LoginServicesService
  ) {

    this.loginService.getuserDetails().subscribe((data: any) => {
      this.user = JSON.parse(JSON.stringify(data));
      this.userId = this.user.id;
      this.userMail = this.user.email;
      this.addFavService.getFavListOfUser(this.userId).subscribe((res: any) => {
        this.favlistData = res;
        this.favListLength = res.length;

      });
    });
  }

  ngOnInit(): void {
    this.searchTitle();
  }


  searchTitle(): void {
    this.quizeService.findByTitle(this.quizname)
      .subscribe(
        (data: any) => {
          this.quizes = data;
          this.quizList = data;
          
    this.addFavService.getFavListOfUser(this.userId).subscribe((res: any) => {
      this.favlistData = res;
      this.favListLength = res.length;
      this.showQuize();
    });     
        },
        (error: any) => {

        });

  }



  toggleSelected(qid: any, i: any,status:any): void {
            
    this.UpdatedQuiz[i].status = !this.UpdatedQuiz[i].status;
   
    let mystatus;
    status==true?mystatus=false:mystatus=true;

    this.addFavService.getFavListOfUser(this.userId).subscribe((res: any) => {
      this.favlistData = res;
      this.favListLength = res.length;

    });

    let fav = {
      "userid": this.userId,
      "quizid": qid,
      "status": true
      }
    this.data = this.favlistData.find((item: { quizeId: any; }) => item.quizeId === qid);
    if ( mystatus== true)
     {
       if (this.data == undefined)
        {
          this.addFavService.insertFav(fav).subscribe((res) => {
            this.showQuize();
          });
        }
      else 
      {
        this.UpdatedQuiz[i].status=true;
          let updateStatus = {
          "status": true,
          "userId": this.userId
         }
         this.addFavService.updateFav(qid, updateStatus).subscribe((res) => {
      this.showQuize();
         });
    
      }
    }
    else {
      this.UpdatedQuiz[i].status=false
      let updateStatus = {
        "status": false,
        "userId": this.userId
      }
      this.addFavService.updateFav(qid, updateStatus).subscribe((res) => { this.showQuize();});
      ;
    }


   
  }



  showQuize() {
    this.searchTitle();
    this.addFavService.getFavListOfUser(this.userId).subscribe((res: any) => {
      this.favlistData = res;
      this.favListLength = res.length;
    });

    //if there is no data in favourite list
    if (this.favListLength == 0) {
      for (let i: any = 0; i < this.quizList.length; i++) {
        this.UpdatedQuiz[i] = {
          ...this.quizList[i],
          status: false

        };
      }
    }

    
      for (let i: any = 0; i < this.quizList.length; i++) {

        for (let j: any = 0; j < this.favlistData.length; j++) {
           
            
          if (this.quizList[i].id == this.favlistData[j].quizeId) {

            this.UpdatedQuiz[i] = {
              ...this.quizList[i],
              status: this.favlistData[j].status

            };
            break;
          }
          else {
            this.UpdatedQuiz[i] = {
              ...this.quizList[i],
              status: false,
            };
          }
        }
      }

      
    }
  

//routing
  quizeRounting(id:any)
  {
  
  this.router.navigate(['/dashboard/mcqPage/'+id])
  }

}
