import { Component, OnInit } from '@angular/core';
import { Livro } from './models/livro';
import { LivroService } from './services/livro.service';

@Component({
  selector: 'app-root',
  templateUrl: "./app.component.html",
  styleUrls: []
})
export class AppComponent implements OnInit {

  livros!: Livro[];

  constructor(private service: LivroService) {}

  ngOnInit(): void {
    this.service.list().subscribe((livros) => {
      this.livros = livros;

      console.log(livros);
    });
  }
}