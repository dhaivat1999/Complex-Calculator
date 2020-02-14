import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  percentagePre:number;
  quantityPre:number;
  percentPre(value: number) {
    this.percentagePre=value;
  }
  quantPre(value:number){
    this.quantityPre=value;
  }
  constructor() { }

  ngOnInit() {
  }

}
