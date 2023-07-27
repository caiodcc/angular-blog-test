import { Injectable } from '@angular/core';
import { TextExample } from './interfaces/text';


@Injectable({
  providedIn: 'root'
})

export class TextsService {
  
  private colecao = [
    { id: '1', 
      title: 'something',
      author: 'Caio', 
      content: 'something',
      tag: 'Tech',
      date: new Date,
      src: '',
      subtitle: 'none' 
    
    }, { id: '2', 
    title: 'queijo',
    author: 'Caio', 
    content: 'something',
    tag: 'Tech',
    date: new Date,
    src: '',
    subtitle: 'none' 
  
  }, { id: '3', 
  title: 'vassoura',
  author: 'Caio', 
  content: 'something',
  tag: 'Tech',
  date: new Date,
  src: '',
  subtitle: 'none' 

},
{ id: '4', 
title: 'chico',
author: 'Caio', 
content: 'something',
tag: 'Tech',
date: new Date,
src: '',
subtitle: 'none' 

},
{ id: '1', 
title: 'caio',
author: 'Caio', 
content: 'something',
tag: 'Tech',
date: new Date,
src: '',
subtitle: 'none' 

}
  ]
  constructor() { }
  
  
  addText(text: TextExample) {
    this.colecao.push(text);
  }

  getTexts(): TextExample[] {
    return this.colecao;
  }

  
}
