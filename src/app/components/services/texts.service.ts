import { Injectable } from '@angular/core';
import { TextExample } from './interfaces/text';


@Injectable({
  providedIn: 'root'
})

export class TextsService {
  
  private colecao = [
    { id: '1', 
      title: 'Pipes com ngFor no Angular',
      author: 'Caio', 
      content: 'something',
      tag: 'Tech',
      date: new Date,
      src: '',
      subtitle: 'none' 
    
    }, { id: '2', 
    title: 'Variáveis de Ambiente no NestJS',
    author: 'Caio', 
    content: 'something',
    tag: 'Tech',
    date: new Date,
    src: '',
    subtitle: 'none' 
  
  }, { id: '3', 
  title: 'Animações no Angular',
  author: 'Caio', 
  content: 'something',
  tag: 'Tech',
  date: new Date,
  src: '',
  subtitle: 'none' 

},
{ id: '4', 
title: 'unnamed',
author: 'Caio', 
content: 'something',
tag: 'Tech',
date: new Date,
src: '',
subtitle: 'none' 

},
{ id: '5', 
title: 'unnamed_2',
author: 'Caio', 
content: 'something',
tag: 'Tech',
date: new Date,
src: '',
subtitle: 'none' 

},
{ id: '6', 
title: 'unnamed_3',
author: 'Caio', 
content: 'something',
tag: 'Tech',
date: new Date,
src: '',
subtitle: 'none' 
}
,
{ id: '7', 
title: 'unnamed_3',
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
