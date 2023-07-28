import { Component, Input } from '@angular/core';
import { TextsService } from '../services/texts.service';
import { TextExample } from '../services/interfaces/text';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  colecao!: TextExample[];
  searchText: string ='';
  
  constructor(private textService : TextsService){
  
  }




  ngOnInit() {
    this.colecao = this.textService.getTexts();
    
    console.log(`coleção:`, this.colecao);

    
    
}

}
