import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resgate-senha',
  templateUrl: './resgate-senha.component.html',
  styleUrls: ['./resgate-senha.component.css']
})
export class ResgateSenhaComponent implements OnInit {

  constructor(
    public router:Router
  ) { }

  ngOnInit(): void {
  }

  enviado(){
    this.router.navigateByUrl('recuperacaoSenhaEnviado')
  }

  
}
