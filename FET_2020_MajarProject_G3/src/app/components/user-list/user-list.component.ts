import { Component, OnInit } from '@angular/core';
import { ChartService } from 'src/app/services/chart.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  usersoftheDay: any;
  constructor(private chartService:ChartService) {
    this.getUsers();
   }
  getUsers():void{
    this.chartService.getUsers().subscribe((res)=>{
      this.usersoftheDay=res;
    })
 }

  ngOnInit(): void {
  }

}
