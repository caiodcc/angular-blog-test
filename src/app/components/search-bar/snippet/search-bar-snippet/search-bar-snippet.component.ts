import { Component, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';




@Component({
  selector: 'app-search-bar-snippet',
  templateUrl: './search-bar-snippet.component.html',
  styleUrls: ['./search-bar-snippet.component.css']
})


export class SearchBarSnippetComponent {

@Input() searchText = '';




}
