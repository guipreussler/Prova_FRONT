import { Component, OnInit } from "@angular/core";
import { Livro } from "src/app/models/livro";
import { LivroService } from "src/app/services/livro.service";

@Component({
    selector: "app-listar-livro",
    templateUrl: "./listar-livro.component.html",
    styleUrls: ["./listar-livro.component.css"],
})
export class ListarLivroComponent implements OnInit {
    livros: Livro[] = [];

    constructor(private service: LivroService) {}

    ngOnInit(): void {
        this.service.list().subscribe((livros) => {
            this.livros = livros;
            console.log(livros);
        });
    }
}
