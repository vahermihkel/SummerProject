import { Project } from 'src/app/new-project/project.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByYear'
})
export class FilterByYearPipe implements PipeTransform {

  transform(value: Project[], year: string): Project[] {
    let filteredArray = value.filter(function (project) {
      if (project.year != 'Pole alustatud' ){
        let yearAsNumber = Number(project.year);
        return yearAsNumber == Number(year);
      } else {
        return 'Pole alustatud' == year;
      }
    })
    if (year == null) {
      return value;
    } else {
      return filteredArray;
    }
  }

}
