import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { medicoService } from 'src/app/services/domain/medico.service';

@Component({
  selector: 'app-solicitacao-email-rejeitado',
  templateUrl: './solicitacao-email-rejeitado.component.html',
  styleUrls: ['./solicitacao-email-rejeitado.component.css']
})
export class SolicitacaoEmailRejeitadoComponent implements OnInit {
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
