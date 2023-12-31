import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../models/Usuario.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  listaUsuarios : Usuario[] =[];
  usuario?: Usuario;
  id: number = 0;

  /* para buscar dados da API, depois de criar o serviço
  * Temos que instanciar em uma variavel o serviço criado
  */
  constructor(private userService: UsuarioService) {}

  // Criar os métodos que conversam com a API

  buscarUsuarios()
  {
    // Primeiro chamamos o método do serviço
    // Depois adicionamos o subscribe para receber
    // a resposta quando ela chegar

    //  adicionamos uma variavel que guarda o retorno
    // e enviamos ela para a função anônima
    // dentro da função vamos adicionar o retorno a variavel local

    this.userService.getAll().subscribe(retorno =>{
      // "as Usuarios[]" tenta converter o retorno para este tipo
      this.listaUsuarios = retorno as Usuario[];
      console.log(this.listaUsuarios);
      this.usuario = undefined;
    });
  }

  buscarPorID(){
    this.userService.getOne(this.id).subscribe(retorno =>{
      console.log(retorno);
      this.usuario = retorno as Usuario;
      this.listaUsuarios =[];
    });
  }

ngOnInit(): void {
  this.buscarUsuarios();
}

}
