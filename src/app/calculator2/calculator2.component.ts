import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPackages, IAdditionals } from '../../app/interfaces/interfaces';

@Component({
  selector: 'app-calculator2',
  templateUrl: './calculator2.component.html',
  styleUrls: ['./calculator2.component.scss']
})
export class Calculator2Component implements OnInit {
  subPreQuarter: number;
  subPreHalf: number;
  subPreYear: number;
  subValQuarter: number;
  subValHalf: number;
  subValYear: number;
  subEssQuarter: number;
  subEssHalf: number;
  subEssYear: number;
  subADOC: number;
  subADOU: number;
  subADOV: number;
  packages: IPackages[];
  additionals:IAdditionals[];
  preQuarter(percentage: number, quantity: number) {
    var percent: number;
    percent = +percentage;
    var quant: number;
    quant = +quantity;
    this.subPreQuarter = percent + quant
  }
  preHalf(percentage: number, quantity: number) {
    var percent: number;
    percent = +percentage;
    var quant: number;
    quant = +quantity;
    this.subPreHalf = percent + quant;

  }
  preYear(percentage: number, quantity: number) {
    var percent: number;
    percent = +percentage;
    var quant: number;
    quant = +quantity;
    this.subPreYear = percent + quant;

  }
  valQuarter(percentage: number, quantity: number) {
    var percent: number;
    percent = +percentage;
    var quant: number;
    quant = +quantity;
    this.subValQuarter = percent + quant;


  }
  valHalf(percentage: number, quantity: number) {
    var percent: number;
    percent = +percentage;
    var quant: number;
    quant = +quantity;
    this.subValHalf = percent + quant;

  }
  valYear(percentage: number, quantity: number) {

    var percent: number;
    percent = +percentage;
    var quant: number;
    quant = +quantity;
    this.subValYear = percent + quant;

  }
  essQuarter(percentage: number, quantity: number) {
    var percent: number;
    percent = +percentage;
    var quant: number;
    quant = +quantity;
    this.subEssQuarter = percent + quant;

  }
  essHalf(percentage: number, quantity: number) {
    var percent: number;
    percent = +percentage;
    var quant: number;
    quant = +quantity;
    this.subEssHalf = percent + quant;
  }
  essYear(percentage: number, quantity: number) {
    var percent: number;
    percent = +percentage;
    var quant: number;
    quant = +quantity;
    this.subEssYear = percent + quant;
  }
  addonCompany(percentage: number, quantity: number) {
    var percent: number;
    percent = +percentage;
    var quant: number;
    quant = +quantity;
    this.subADOC = percent + quant
  }
  addonUser(percentage: number, quantity: number) {
    var percent: number;
    percent = +percentage;
    var quant: number;
    quant = +quantity;
    this.subADOU = percent + quant
  }
  addonVAssistant(percentage: number, quantity: number) {
    var percent: number;
    percent = +percentage;
    var quant: number;
    quant = +quantity;
    this.subADOV = percent + quant
  }
  constructor(private http: HttpClient) { }
  packageUrl = "http://www.json-generator.com/api/json/get/bQFmimpTWW?indent=2"
  AdditionalUrl = "http://www.json-generator.com/api/json/get/bUUnVRrbzC?indent=2"
  ngOnInit() {
    this.http.get(this.packageUrl).toPromise().then((data: any) => {
      this.packages = data.Packages;
      console.log(this.packages)
    });
    this.http.get(this.AdditionalUrl).toPromise().then((data:any) => {
      this.additionals=data.Additionals
      console.log(this.additionals)
    });

  }
}


