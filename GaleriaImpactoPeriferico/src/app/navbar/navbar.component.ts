import { Component, OnInit } from '@angular/core';
import detectEthereumProvider from '@metamask/detect-provider';
import { WalletService } from '../services/wallet.service';
import { AfterViewInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';




@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private wallet:WalletService,private router: Router) { }
  showModal:boolean = false;
  ngOnInit(): void {

  }

  ngAfterViewInit() {}

  onChildEvent(data: any) {
    debugger;
    this.showModal = false;
    if(data == 'metamask'){
      this.connectMetamask()
    }

    if(data == 'oneinch'){
      this.connectOneInch();      
    }
  }

  connect(){
    this.showModal = true;
  }



  connectOneInch(): void {
    // window['__1inch_connect_init_rpc__'] = {
    //   'https://mainnet.infura.io/v3/<infura key> or custom node address'
    // };
  
    const scriptNode = document.createElement('script');
    scriptNode.setAttribute('src', 'https://cdn.1inch.io/mobile/connect_button/desktop.js');
    scriptNode.async = true;
  
    window.addEventListener('1inch_connect_button_init', (e: any) => {
      // Next line will show QR if user wasn't connected before or do connection without showing qr if user connected
      e.detail.provider.enable().then(() => {
        // Here you should store e.detail.provider for further usage.
        // e.detail.provider is EIP-1193 provider object (like MetaMask).
        (window as any)['__1inch__'] = e.detail.provider;
      });
    });
  
    document.body.appendChild(scriptNode);
  }
  

  async connectMetamask() {
    this.showModal = true;
    const provider = await detectEthereumProvider() as any;
  
    if (provider) {
      // Prompt the user to connect to Metamask
      this.wallet.address = await provider.request({ method: 'eth_requestAccounts' });
      console.log(this.wallet.address)
    } else {
      console.error('Metamask not found');
    }
  }

  callCompra(){
    this.router.navigate(['/compra']);
  }

  galery(){
    this.router.navigate(['']);
  }

}


