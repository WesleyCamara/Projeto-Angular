import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  erroAtivo: any;
  @ViewChild('conteudoInput') conteudoInput: ElementRef;
  conteudoPesquisa: any;

  constructor() { }

  ngOnInit(): void {
  }

  // Após pesquisa chama a validação do valor
  pesquisar(event) {
    event.preventDefault();
    this.verificaConteudoVazio(this.conteudoInput.nativeElement.value);
    this.limpaHashtag(this.conteudoInput.nativeElement.value);
  }

  // Verifica se o conteudo de pesquisa não está vazio
  verificaConteudoVazio(valorInput) {
    if (!valorInput) {
      this.erroAtivo = 'erro';
    } else {
      this.erroAtivo = '';
    }
  }

  // Valida os dados para pesquisa
  valida(event) {
    this.erroAtivo = '';
  }


  // Limpa o texto tirando o caractere # se houver
  limpaHashtag(texto) {
    if (texto[0] === '#') {
      texto = texto.replace(texto[0], '');
    }
    this.conteudoPesquisa = texto;
    console.log(this.conteudoPesquisa);
  }

}
