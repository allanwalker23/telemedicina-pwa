import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resgate-senha-enviado',
  templateUrl: './resgate-senha-enviado.component.html',
  styleUrls: ['./resgate-senha-enviado.component.css']
})
export class ResgateSenhaEnviadoComponent implements OnInit {

  constructor(
    public router:Router
  ) { }

  ngOnInit(): void {
  }

  home(){
    this.router.navigateByUrl('home')
  }

}
