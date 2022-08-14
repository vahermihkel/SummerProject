import { Pipe, PipeTransform } from '@angular/core';
import { Project } from 'src/app/new-project/project.model';

@Pipe({
  name: 'unique'
})
export class UniquePipe implements PipeTransform {

  transform(value: Project[]): Project[] {
    let uniqueArray = new Array<Project>();
    console.log(uniqueArray);
    value.filter(function (project, index, array) { 
      if(array.map(project => project.year).indexOf(project.year) === index){
        return uniqueArray.push(project);
     }
    });
  console.log(uniqueArray);
  return uniqueArray;
  }

}
