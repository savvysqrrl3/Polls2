import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(pollList: Array<any>, searchterms: String): any {
    if(searchterms == null){
      return pollList;
    }
    var results = [];
    for (let entry of pollList){
      if(entry.author.toLowerCase().includes(searchterms.toLowerCase())|| entry.title.toLowerCase().includes(searchterms.toLowerCase()) || entry.created_at.toString().includes(searchterms) )
      {
        results.push(entry)
      }
    }
    return results;
  }

}
