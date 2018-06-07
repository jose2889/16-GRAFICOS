import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})
export class DonaComponent implements OnInit {

  
  // Doughnut
  public doughnutChartLabels:string[] = ['Microsoft Word', 'Microsoft PowerPoint', 'Adobe PDF','Otros'];
  
  a:number; 
  b:number; 
  c:number; 
  word:number = 4;
  
  nodes:any = [
    {"id": 11, "nombre": "word", "isFile":true, "parent": 1},
    {"id": 12, "nombre": "word", "isFile":true, "parent": 1},
    {"id": 23, "nombre": "word", "isFile":true, "parent": 2},
    {"id": 24, "nombre": "word", "isFile":true, "parent": 2},
    {"id": 35, "nombre": "word", "isFile":true, "parent": 3},
    {"id": 36, "nombre": "word", "isFile":true, "parent": 3},
  ];

  public doughnutChartData:any[]=[]; 
  //    { "valor": 50}, 
  //    { "valor": 50},
  //    { "valor": 50},
  //  ];
  public doughnutChartType:string = 'doughnut';
  

  ngOnInit(){

    console.log(this.nodes);
    this.a = 3;
    this.b = 6;
    this.c = 2;
    

    this.doughnutChartData.push(this.a);
    this.doughnutChartData.push(this.a);
    this.doughnutChartData.push(this.b);
    this.doughnutChartData.push(this.word);
    
  }
   // events
   public chartClicked(e:any):void {   
     console.log(e);
     console.log(this.doughnutChartData);
   }
  
   public chartHovered(e:any):void {
     console.log(e);
   }

}
