import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Jogos } from 'src/app/models/placeholder.model';
import { JogosService } from 'src/app/services/jogos.service';

@Component({
  selector: 'app-jogos',
  templateUrl: './jogos.component.html',
  styleUrls: ['./jogos.component.css']
})
export class JogosComponent implements OnInit {
  public paginaAtual = 1;
  games: any;
  erro: any;
  constructor(private JogosService: JogosService) { 
    this.getter();
  }

  ngOnInit() {
  }

  getter(){

    this.JogosService.getJogos().subscribe((data) => {
      
      this.games = data['games'];


    }, (error:any) => {
      this.erro = error;
      
    });
  }

}
