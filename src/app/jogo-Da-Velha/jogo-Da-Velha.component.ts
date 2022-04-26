import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jogo-Da-Velha',
  templateUrl: './jogo-Da-Velha.component.html',
  styleUrls: ['./jogo-Da-Velha.component.scss']
})
export class JogoDaVelhaComponent implements OnInit {

  private readonly TAMTAB: number = 3;
  private readonly COLVAZIO: string = 'X';

  tabuleiro: any;
  jogadores: string[] = []; 
  resultado: string = '' ;
  

  constructor() { }

  ngOnInit(): void {
    this.resultado = 'Jogador 2 venceu'
    this.jogadores[0] = 'X';
    this.jogadores[1] = 'O';
    this.inicializarTabuleiro();
  }

  inicializarTabuleiro(): void {
    this.tabuleiro = [this.TAMTAB];
    for (let i = 0; i < this.TAMTAB; i++) {
      this.tabuleiro[i] = [this.COLVAZIO, this.COLVAZIO, this.COLVAZIO];
    }
  }

  jogar(x:number, y:number){
    alert('entrou aqui');
    console.log(`${x}, ${y}`);

  }
  

}
