import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(laptop:[],filterString:string,propname:string): any[]{
    const result:any=[];
    if(!laptop|| filterString==""||propname==""){
      return laptop
    }
    laptop.forEach((products:any)=>{
     if( products[propname].trim().toLowerCase().includes(filterString.toLowerCase())){
      result.push(products)
     }  
      })
    return result
  }

}
