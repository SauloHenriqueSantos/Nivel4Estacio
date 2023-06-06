import { Injectable } from '@angular/core';
import { Editora } from './editora';

@Injectable({
  providedIn: 'root'
})
export class ControleEditoraService {
  editoras: Editora[];
  
  constructor() {
    this.editoras = [
      {
        codEditora: 1,
        nome: 'Saraiva',
        autor: 'Fábio Ulhoa Coelho',
      },
      {
        codEditora: 2,
        nome: 'Campus Jurídico',
        autor: 'Marcio Pestana',
      },
      {
        codEditora: 3,
        nome: 'Atlas',
        autor: 'Direito Constitucional',
      },
    ];
  }

  getEditoras(): Editora[] {
    return this.editoras;
  }

  getNomeEditora(codEditora: number): string {
    const editora = this.editoras.filter((e) => e.codEditora === codEditora)[0];
    return editora ? editora.nome : '';
  }
}