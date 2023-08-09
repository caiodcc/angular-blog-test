import { Component, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
import { TextsService } from '../services/texts.service';
import { TextExample } from '../services/interfaces/text';

@Component({
  selector: 'app-admin-post',
  templateUrl: './admin-post.component.html',
  styleUrls: ['./admin-post.component.css']
})
export class AdminPostComponent  {

  @Output() colecao: TextExample[];
  searchText: string ='';
  submit
  constructor(private textService : TextsService){
  
  }

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });


 
}
