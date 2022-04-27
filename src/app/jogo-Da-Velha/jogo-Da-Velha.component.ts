import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jogo-Da-Velha',
  templateUrl: './jogo-Da-Velha.component.html',
  styleUrls: ['./jogo-Da-Velha.component.scss']
})
export class JogoDaVelhaComponent implements OnInit {

  private readonly TAMTAB: number = 3;
  private readonly COLVAZIO: string = '';
  private readonly COLVAZIOB: boolean = false;

  private jogadores: string[] = [];
  private indexJogadorAtual: number = 0;
  private qtdjogadas: number = 0;
  private ganhador: boolean = false;

  public finalizaJogo: boolean = false;
  public marcaTabuleiro: any;
  public tabuleiro: any;
  public resultado: string = '';
  public jogadorAtual: string = ''

  constructor() { }

  ngOnInit(): void {

    this.inicializarTabuleiro();
  }


  public jogar(x: number, y: number) {
    if (this.tabuleiro[x][y] == '' && this.finalizaJogo == false) {
      this.tabuleiro[x][y] = this.jogadores[this.indexJogadorAtual]
      this.qtdjogadas++;
      if (this.qtdjogadas >= 9) {
        this.finalizaJogo = true;
        this.resultado = 'Esse jogo empatou'
      }
      else {
        this.verificaGanhador();
        console.log('ganhador=' + this.ganhador)
        console.log('this.qtdjogadas=' + this.qtdjogadas)
        console.log('this.tabuleiro[0]=' + this.tabuleiro[0])
        console.log('this.tabuleiro[1]=' + this.tabuleiro[1])
        console.log('this.tabuleiro[2]=' + this.tabuleiro[2])
        if (this.ganhador === true && this.qtdjogadas > 1) {
          this.finalizaJogo = true;
          this.resultado = 'O vencedor foi o jogador ' + this.jogadorAtual
        }
        this.trocaJogador();
      }
    }
  }

  public clear() {
    this.inicializarTabuleiro();
  }

  private inicializarTabuleiro(): void {
    this.resultado = '';
    this.ganhador = false;
    this.qtdjogadas = 0;
    this.finalizaJogo = false;
    this.jogadores[0] = 'X';
    this.jogadores[1] = 'O';
    this.indexJogadorAtual = 0;
    this.jogadorAtual = this.jogadores[0];
    this.tabuleiro = [this.TAMTAB];
    this.marcaTabuleiro = [this.TAMTAB];
    for (let i = 0; i < this.TAMTAB; i++) {
      this.tabuleiro[i] = [this.COLVAZIO, this.COLVAZIO, this.COLVAZIO];
      this.marcaTabuleiro[i] = [this.COLVAZIOB, this.COLVAZIOB, this.COLVAZIOB];
    }
  }

  private trocaJogador() {
    if (this.indexJogadorAtual === 0) {
      this.indexJogadorAtual += 1;
    } else {
      this.indexJogadorAtual -= 1;
    }
    this.jogadorAtual = this.jogadores[this.indexJogadorAtual];
  }

  private verificaGanhador() {

    this.verificaLinha();

    if (this.ganhador === false) {
      this.verificaColuna();
      if (this.ganhador === false) {
        this.verificaVertical();
      }
    }
  }

  private verificaLinha() {

    if ((this.tabuleiro[0][0] != '' && this.tabuleiro[0][1] != '' && this.tabuleiro[0][2] != '') ||
      (this.tabuleiro[1][0] != '' && this.tabuleiro[1][1] != '' && this.tabuleiro[1][2] != '') ||
      (this.tabuleiro[2][0] != '' && this.tabuleiro[2][1] != '' && this.tabuleiro[2][2] != '')
    ) {
      if ((this.tabuleiro[0][0] === this.tabuleiro[0][1] && this.tabuleiro[0][1] === this.tabuleiro[0][2] && this.tabuleiro[0][1] != '') ||
        (this.tabuleiro[1][0] === this.tabuleiro[1][1] && this.tabuleiro[1][1] === this.tabuleiro[1][2] && this.tabuleiro[1][1] != '') ||
        (this.tabuleiro[2][0] === this.tabuleiro[2][1] && this.tabuleiro[2][1] === this.tabuleiro[2][2] && this.tabuleiro[2][1] != '')) {
        this.ganhador = true;
        if (this.tabuleiro[0][0] === this.tabuleiro[0][1] && this.tabuleiro[0][1] === this.tabuleiro[0][2] && this.tabuleiro[0][1] != '') {
          this.marcaTabuleiro[0][0] = true;
          this.marcaTabuleiro[0][1] = true;
          this.marcaTabuleiro[0][2] = true;
        }
        else {
          if (this.tabuleiro[1][0] === this.tabuleiro[1][1] && this.tabuleiro[1][1] === this.tabuleiro[1][2] && this.tabuleiro[1][1] != '') {
            this.marcaTabuleiro[1][0] = true;
            this.marcaTabuleiro[1][1] = true;
            this.marcaTabuleiro[1][2] = true;
          }
          else {
            this.marcaTabuleiro[2][0] = true;
            this.marcaTabuleiro[2][1] = true;
            this.marcaTabuleiro[2][2] = true;
          }

        }
      }
    }
  }

  private verificaColuna() {

    if ((this.tabuleiro[0][0] != '' && this.tabuleiro[1][0] != '' && this.tabuleiro[2][0] != '') ||
      (this.tabuleiro[0][1] != '' && this.tabuleiro[1][1] != '' && this.tabuleiro[2][1] != '') ||
      (this.tabuleiro[0][2] != '' && this.tabuleiro[1][2] != '' && this.tabuleiro[2][2] != '')
    ) {
      if ((this.tabuleiro[0][0] === this.tabuleiro[1][0] && this.tabuleiro[1][0] === this.tabuleiro[2][0] && this.tabuleiro[1][0] != '') ||
        (this.tabuleiro[0][1] === this.tabuleiro[1][1] && this.tabuleiro[1][1] === this.tabuleiro[2][1] && this.tabuleiro[1][1] != '') ||
        (this.tabuleiro[0][2] === this.tabuleiro[1][2] && this.tabuleiro[1][2] === this.tabuleiro[2][2] && this.tabuleiro[1][2] != '')) {
        this.ganhador = true;
        if (this.tabuleiro[0][0] === this.tabuleiro[1][0] && this.tabuleiro[1][0] === this.tabuleiro[2][0] && this.tabuleiro[1][0] != '') {
          this.marcaTabuleiro[0][0] = true;
          this.marcaTabuleiro[1][0] = true;
          this.marcaTabuleiro[2][0] = true;
        }
        else {
          if (this.tabuleiro[0][1] === this.tabuleiro[1][1] && this.tabuleiro[1][1] === this.tabuleiro[2][1] && this.tabuleiro[1][1] != '') {
            this.marcaTabuleiro[0][1] = true;
            this.marcaTabuleiro[1][1] = true;
            this.marcaTabuleiro[2][1] = true;
          }
          else {
            this.marcaTabuleiro[0][2] = true;
            this.marcaTabuleiro[1][2] = true;
            this.marcaTabuleiro[2][2] = true;
          }

        }

      }
    }
  }


  private verificaVertical() {

    if ((this.tabuleiro[0][0] != '' && this.tabuleiro[1][1] != '' && this.tabuleiro[2][2] != '') ||
      (this.tabuleiro[2][0] != '' && this.tabuleiro[1][1] != '' && this.tabuleiro[0][2] != '')
    ) {
      if ((this.tabuleiro[0][0] === this.tabuleiro[1][1] && this.tabuleiro[1][1] === this.tabuleiro[2][2] && this.tabuleiro[1][1] != '') ||
        (this.tabuleiro[2][0] === this.tabuleiro[1][1] && this.tabuleiro[1][1] === this.tabuleiro[0][2] && this.tabuleiro[1][1] != '')) {
        this.ganhador = true;
        if (this.tabuleiro[0][0] === this.tabuleiro[1][1] && this.tabuleiro[1][1] === this.tabuleiro[2][2] && this.tabuleiro[1][1] != '') {
          this.marcaTabuleiro[0][0] = true;
          this.marcaTabuleiro[1][1] = true;
          this.marcaTabuleiro[2][2] = true;
        }
        else {
          this.marcaTabuleiro[2][0] = true;
          this.marcaTabuleiro[1][1] = true;
          this.marcaTabuleiro[0][2] = true;
        }
      }
    }
  }



}
