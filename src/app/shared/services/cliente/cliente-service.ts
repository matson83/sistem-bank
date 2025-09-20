import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../../models/cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  api = `${environment.api}/clientes/`

  constructor(private clientHttp : HttpClient){}


  inserirClient(novoClient:Cliente): Observable<Cliente>{
    return this.clientHttp.post<Cliente>(
      this.api,
      novoClient
    )
  }

  listarClient(): Observable<Cliente[]>{
    return this.clientHttp.get<Cliente[]>(
      this.api
    )
  }

  listarPaginado(page:number , pageSize:number): Observable<Cliente[]>{
    return this.clientHttp.get<Cliente[]>(
      `${this.api}?page=${page}&pageSize=${pageSize}`
    )
  }

  deletarClient(idCliente: number): Observable<object>{
    return this.clientHttp.delete(
      `${this.api}${idCliente}`
    );
  }

  pesquisarPorId(idCliente: number): Observable<Cliente>{
    return this.clientHttp.get<Cliente>(
      `${this.api}${idCliente}`
    )
  }

  atualizarCliente(idCliente: number, cliente: Cliente): Observable<Cliente>{
    return this.clientHttp.patch<Cliente>(
      `${this.api}${idCliente}`,
      cliente
    )
  }




}
