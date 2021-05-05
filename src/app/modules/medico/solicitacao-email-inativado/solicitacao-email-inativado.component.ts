import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { medicoService } from 'src/app/services/domain/medico.service';

@Component({
  selector: 'app-solicitacao-email-inativado',
  templateUrl: './solicitacao-email-inativado.component.html',
  styleUrls: ['./solicitacao-email-inativado.component.css']
})
export class SolicitacaoEmailInativadoComponent implements OnInit {
  public medico:any;
  constructor(
    public router:Router,
    public medicoService:medicoService
  ) { }

  ngOnInit(): void {
    this.medicoService.getInfo()
    .subscribe(r=>{
      this.medico=r[0];
        })
  }

  home(){
    this.router.navigateByUrl('home')
  }


}
