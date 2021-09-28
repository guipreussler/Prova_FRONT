import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from "@angular/common/http";
//Componentes da aplicação
import { AppComponent } from './app.component';
import { CadastrarLivroComponent } from './components/views/livro/cadastrar-livro/cadastrar-livro.component';
import { FormsModule } from '@angular/forms';
import { ListarLivroComponent } from './components/views/livro/listar-livro/listar-livro.component';

@NgModule({
  declarations: [AppComponent, CadastrarLivroComponent, ListarLivroComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
