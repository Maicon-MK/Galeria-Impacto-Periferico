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



  connectOneInch() {

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


