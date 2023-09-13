import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/Usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  // Criar a variavel com URL da API
  private url = ' http://localhost:3000/usuarios';

  // Criar uma lista da classe de Usuários
  public listaUsuarios: Usuario[] = [];

  // criar uma instancia do HttpClient
  constructor(private http:HttpClient){}

  //MÉTODOS DO CRUD COM A API

  //Para o READ, teremos 2 métodos

  // 1° Buscar todos os registros
  public getAll(){
    // Retornar a busca de dados na URL da API
    return this.http.get(this.url);
  }

  //2° Busca 1 unico registro
  public getOne(id: number){
    return this.http.get(`${this.url}/${id}`);
  }

}
