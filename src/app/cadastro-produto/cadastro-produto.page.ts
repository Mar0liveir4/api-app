import { ProdutoService } from './../services/produto.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from '../models/Produto.model';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.page.html',
  styleUrls: ['./cadastro-produto.page.scss'],
})
export class CadastroProdutoPage implements OnInit {

  produto: Produto ={
    nome: '',
    descricao:'',
    validade:'',
    preco:'',
  };
    constructor(private produtoService: ProdutoService ) { }

     ngOnInit() {
     }
}
  // export class CadastroUsuarioPage implements OnInit {

  //   usuario: Usuario = {
  //     nome:'',
  //     email:'',
  //     senha:'',
  //   };
  //   confirmaSenha = '';

  //   constructor(private userService: UsuarioService) { }

  //   ngOnInit() {
  //   }

  //   salvarUsuario(){
  //     if(this.confirmaSenha.trim() && this.usuario.senha.trim()){
  //       if(this.confirmaSenha == this.usuario.senha){
  //         this.userService.salvar(this.usuario).subscribe(retorno =>{
  //           this.usuario = retorno;
  //           alert("Sucesso! Usuário: ["+ this.usuario.id + "] foi salvo!");
  //         });
  //       }else{
  //         alert("As senhas não são iguais!");
  //       }

  //     }else{
  //       alert("Os campos de senha devem ser preenchidos!")
  //     }

  //   }
  // }
