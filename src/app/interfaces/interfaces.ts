import { StringMap } from '@angular/compiler/src/compiler_facade_interface';

export interface IPackages{
    name:string,
    basePrice:number
    [type:number]:
    {
        discount: number,
        percentage:number,
        subTotal:number,
        name:string,
        quantity:number
    }
 
}
export interface IAdditionals{
    name:string,
    rate:number,
    percentage:number,
    quantity:number,
    subTotal:number
}