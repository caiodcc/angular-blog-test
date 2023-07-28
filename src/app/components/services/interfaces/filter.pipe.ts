import { Pipe, PipeTransform } from '@angular/core';
import { TextExample } from './text';

@Pipe({ name: 'appFilter' })
export class FilterPipe implements PipeTransform {

 
  transform(value: TextExample[], searchText: string): TextExample[] {
    if (!value || !searchText) {
      return value; // Caso o array ou o texto de pesquisa estejam vazios, retornamos o array original
    }

    searchText = searchText.toLowerCase(); // Para comparar sem considerar maiúsculas e minúsculas

    return value.filter((item: TextExample) => {
      return item.title.toLowerCase().includes(searchText); // Filtrar pelo título
    });
  }
}