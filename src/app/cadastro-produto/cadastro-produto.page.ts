import { ProdutoService } from './../services/produto.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from '../models/Produto.model';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.page.html',
  styleUrls: ['./cadastro-produto.page.scss'],
})
export class CadastroProdutoPage implements OnInit {

  produto: Produto = {
    nome: '',
    descricao: '',
    validade: '',
    preco: '',
  };

  constructor(private produtoService: ProdutoService) {}

  ngOnInit() {
    // Qualquer inicialização ou lógica que você precise executar ao carregar a página.
  }

  cadastrarProduto() {
    // Este método será chamado quando você desejar cadastrar o produto.
    // Você pode usar this.produto para acessar os dados do produto e enviá-los para o serviço.
    // Por exemplo:
    
    this.produtoService.cadastrar(this.produto).subscribe(
      (resposta) => {
        // Lida com a resposta do serviço após o cadastro ser concluído com sucesso.
        console.log('Produto cadastrado com sucesso', resposta);
      },
      (erro) => {
        // Lida com erros que podem ocorrer durante o cadastro.
        console.error('Erro ao cadastrar produto', erro);
      }
    );
  }
}
