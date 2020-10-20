import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css']
})
export class LivroListaComponent implements OnInit {

  livros = [{
    id: "1",
    titulo: 'E o vento levou',
    autor: 'Margaret Mitchell',
    numPag: '650'
  },
  {
    id: "2",
    titulo: 'E o vento levou. Volume2',
    autor: 'Margaret Mitchell',
    numPag: '367'
  }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
