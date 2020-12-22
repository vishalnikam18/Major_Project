import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { ChartService } from '../services/chart.service';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  
  topScorer: any=[];
  categoryOne:any=[];
  categoryTwo:any=[];
  categoryThree: any=[];


  quizenames: string[] = [];
  public barChartLabels: Label[] = this.quizenames;
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  chartData: any;
  countData: number[] = [];
  public barChartData: ChartDataSets[] = [
    { data: ([] = this.countData), label: 'Series A' },
  ];

  constructor(private chartService: ChartService) {


    this.chartService.getTopScore().subscribe((res)=>{
      this.topScorer=res;
      this.getTopScorer();
     
    });

    this.chartService.chart().subscribe((res: any) => {
      this.chartData = res;
      this.chart();
    });

  }
  
  chart() {
    for (let index = 0; index < this.chartData.length; index++) {
      this.quizenames.push(this.chartData[index].quizname);
      this.countData.push(this.chartData[index].count);
    }
  }


  

  getTopScorer():void{
   
    for (let index = 0; index < this.topScorer.length; index++) 
   {
    //  debugger;
        if(this.topScorer[index].quizes.categoryId==1){
          this.categoryOne.push(this.topScorer[index]);
        }
        else if(this.topScorer[index].quizes.categoryId==2){
          this.categoryTwo.push(this.topScorer[index]);
        }
        else{
          this.categoryThree.push(this.topScorer[index]);
        }
        }
     
   


  }

 

  ngOnInit(): void {
  }

}
