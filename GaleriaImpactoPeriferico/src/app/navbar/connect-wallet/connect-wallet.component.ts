import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-connect-wallet',
  templateUrl: './connect-wallet.component.html',
  styleUrls: ['./connect-wallet.component.css']
})
export class ConnectWalletComponent implements OnInit {
  
  @Output() walletEvent = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  selectWallet(wallet:string){
      this.walletEvent.emit(wallet);
  }
}
