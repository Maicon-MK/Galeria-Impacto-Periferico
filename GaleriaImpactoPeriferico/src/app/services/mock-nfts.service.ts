import { Injectable } from '@angular/core';
import { nft } from '../models/nft';

@Injectable({
  providedIn: 'root'
})
export class MockNftsService {
  nft:nft = new nft();
  nftArray:Array<nft> = []
  
  constructor() { 
    this.generateNfts();
  }

  generateNfts():nft[]{

    let nft1 = new nft();
    nft1.image = '../assets/nfts/1.jpeg';
    nft1.author = 'Pedro Henrique'
    nft1.value = 1000
    nft1.title = 'Impacto'
    nft1.description = 'Uma obra que mostra a realidade do cotidiano carioca em forma de bytes e nft'
    this.nftArray.push(nft1)

    let nft2 = new nft();
    nft2.image = '../assets/nfts/2.jpeg';
    nft2.author = 'Maria Fernanda'
    nft2.value = 5000
    nft2.title = 'Aquarela da Vida'
    nft2.description = 'Uma obra de arte digital que explora as cores e texturas da natureza em uma linguagem única de nft'
    this.nftArray.push(nft2)

    let nft3 = new nft();
    nft3.image = '../assets/nfts/3.jpeg';
    nft3.author = 'João da Silva'
    nft3.value = 2500
    nft3.title = 'O Caminho do Tempo'
    nft3.description = 'Uma obra abstrata que representa a passagem do tempo em diferentes dimensões e formas, em um formato inovador de nft'
    this.nftArray.push(nft3)

    let nft4 = new nft();
    nft4.image = '../assets/nfts/4.jpeg';
    nft4.author = 'Ana Luíza'
    nft4.value = 750
    nft4.title = 'Memórias'
    nft4.description = 'Uma obra que captura os momentos mais significativos da vida em imagens e emoções, transmitidos de forma única através de nft'
    this.nftArray.push(nft4)

    let nft5 = new nft();
    nft5.image = '../assets/nfts/5.jpeg';
    nft5.author = 'Carlos Eduardo'
    nft5.value = 15000
    nft5.title = 'Mundo Digital'
    nft5.description = 'Uma obra interativa que leva o espectador a uma jornada de descoberta através de um universo digital único, criado em nft'
    this.nftArray.push(nft5)

    return this.nftArray;
  }
}
