import { Component, OnInit } from '@angular/core';
import { MockNftsService } from '../services/mock-nfts.service';
import { nft } from '../models/nft';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {
  contador:number = 10000;
  pessoas:number = 601;
  nfts:nft[] = [];
  choosedNft:nft = new nft();
  position:number = 0;
  constructor(private mockNft:MockNftsService) { }

  ngOnInit(): void {
    this.contagemRegressiva();
    this.contagemPessoas();
    this.getMocks();
    this.chooseNft();
  }

  contagemRegressiva(){
    setInterval(() => {
      this.contador--;
    }, 1000);
  }

  contagemPessoas(){
    setInterval(() => {
      this.pessoas = Math.floor(Math.random() * 601) + 400;
    }, 2000);
  }

  getMocks(){
    debugger;
    this.nfts = this.mockNft.nftArray;
  }

  chooseNft(){
    this.position = Math.floor(Math.random() * (4 - 0 + 1) + 0)
    this.choosedNft = this.nfts[this.position]
  }

  changeNft(signal:string){
    this.position;
    debugger;
    if(this.position >= 4){
      this.position = 0
      return;
    }

    if(this.position == 0 && signal == '-'){
      this.position = 4;
      this.choosedNft = this.nfts[this.position]
      return;
    }

    if(signal == '+'){
      this.position += 1;
      this.choosedNft = this.nfts[this.position]
    }

    if(signal == '-'){
      debugger;
      this.position -= 1;
      this.choosedNft = this.nfts[this.position]
    }
  }
}
