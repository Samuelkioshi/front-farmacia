import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private produtos = [
    // Exemplo de produtos
    { ID_PROD: 1, NOME_PROD: 'Produto 1', FABRICANTE: 'Fabricante A', SECAO: 'Medicamentos', VALOR: 10.00 },
    { ID_PROD: 2, NOME_PROD: 'Produto 2', FABRICANTE: 'Fabricante B', SECAO: 'Beleza', VALOR: 20.00 },
    // Adicione mais produtos conforme necessário
  ];

  getProdutos() {
    return this.produtos;
  }
}