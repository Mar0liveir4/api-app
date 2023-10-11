import { ActivatedRoute, Route, Router } from '@angular/router';
import { Usuario } from './../models/Usuario.model';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { identifierName } from '@angular/compiler';

@Component({
  selector: 'app-alterar-usuario',
  templateUrl: './alterar-usuario.page.html',
  styleUrls: ['./alterar-usuario.page.scss'],
})
export class AlterarUsuarioPage implements OnInit {

usuario!:Usuario;

  constructor(
    private activeRoute: ActivatedRoute,
    private userService: UsuarioService,
    private router: Router
  ) { }

  ngOnInit() {
    // Criar a variavel id
    // Pegar o ID que veio na rota
    // converter em Numeros
    const id = Number(this.activeRoute.snapshot.paramMap.get('id'));

    this.userService.getOne(id).subscribe(retorno =>{
      this.usuario = retorno;
      console.log(this.usuario);
    })
  }

}
