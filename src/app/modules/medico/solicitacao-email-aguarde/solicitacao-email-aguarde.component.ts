import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { medicoService } from 'src/app/services/domain/medico.service';

@Component({
  selector: 'app-solicitacao-email-aguarde',
  templateUrl: './solicitacao-email-aguarde.component.html',
  styleUrls: ['./solicitacao-email-aguarde.component.css']
})
export class SolicitacaoEmailAguardeComponent implements OnInit {
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
