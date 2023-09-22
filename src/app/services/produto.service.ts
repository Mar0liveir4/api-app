import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../models/Produto.model';
import { EMPTY, Observable, catchError, map } from 'rxjs';
import { mapToCanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  //Criar a variavel com URL da API
  private url = 'http://localhost:3000/produtos';

  //Criar uma lista da classe de Produtos
  public listaProdutos: Produto[] = [];

  //Criar uma instancia do HttpClient
  constructor(private http:HttpClient){}

  //MÉTODOS DO CRUD COM A API

  //Para o READ, teremos 2 métodos

  //1° Buscar todos os registros
  public getAll(): Observable<Produto[]>{
    //Retornar a busca de dados na URL da API
    return this.http.get<Produto[]>(this.url).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))

    );
  }
    //2° Busca 1 unico registro
    public getOne(id: number): Observable<Produto> {
      return this.http.get<Produto>(`${this.url}/${id}`).pipe(
        map(retorno => retorno),
        catchError(erro => this.exibirErro(erro))
      );
    }
    exibirErro(erro: any){
      console.log(erro);
      alert("A operação não pode ser concluida");
      return EMPTY;
    }
    salvar(Produto: Produto){
      return this.http.post<Produto>(this.url, Produto).pipe(
        map(retorno => retorno),
        catchError(erro => this.exibirErro(erro))

      );
    }

}
