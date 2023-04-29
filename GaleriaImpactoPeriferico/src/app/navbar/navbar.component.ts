import { Component, OnInit } from '@angular/core';
import detectEthereumProvider from '@metamask/detect-provider';
import { WalletService } from '../services/wallet.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private wallet:WalletService) { }

  ngOnInit(): void {
  }

  async connect() {
    const provider = await detectEthereumProvider() as any;
  
    if (provider) {
      // Prompt the user to connect to Metamask
      this.wallet.address = await provider.request({ method: 'eth_requestAccounts' });
      console.log(this.wallet.address)
    } else {
      console.error('Metamask not found');
    }
  }
  
}


