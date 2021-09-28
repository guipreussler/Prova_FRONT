import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Livro } from "src/app/models/livro";
import { LivroService } from "src/app/services/livro.service";

@Component({
    selector: "app-cadastrar-livro",
    templateUrl: "./cadastrar-livro.component.html",
    styleUrls: ["./cadastrar-livro.component.css"],
})
export class CadastrarLivroComponent implements OnInit {
    titulo!: string;
    editora!: string;
    anopublicacao!: number;
    edicao!: number;
    pagina!: number;

    constructor(private router: Router, private service: LivroService) {}

    ngOnInit(): void {}

    cadastrar(): void {
        let livro: Livro = {
            titulo: this.titulo,
            editora: this.editora,
            anopublicacao: this.anopublicacao,
            edicao: this.edicao,
            pagina: this.pagina,
        };
        this.service.create(livro).subscribe((livro) => {
            console.log(livro);
            this.router.navigate(["livro/listar"]);
        });
    }
}
