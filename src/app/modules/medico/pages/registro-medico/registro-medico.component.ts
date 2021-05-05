import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Medico from 'src/app/models/Medico';
import { especialidadeService } from 'src/app/services/domain/especialidade.service';
import { medicoService } from 'src/app/services/domain/medico.service';
import Especialidade from '../../../../models/Especialidade'

@Component({
  selector: 'app-registro-medico',
  templateUrl: './registro-medico.component.html',
  styleUrls: ['./registro-medico.component.css']
})
export class RegistroMedicoComponent implements OnInit {
public especialidade:any;

 creds : Medico ={
  nome:"",
  crm:"",
  email:"",
  senha:"",
  celular:"",
  telefone:"",
  ativo:0
  }
  constructor(
    public especialidadeService:especialidadeService,
    public medicoService:medicoService,
    public router:Router) { }

  ngOnInit() {
    this.especialidadeService.getAll()
    .subscribe(r=>{
      this.especialidade=r;
    })
  }

  insertMedico(){
    console.log(this.creds)
    this.medicoService.insertMedical(this.creds)
    .subscribe(r=>{
      alert("Cadastrado com sucesso, faça o login")
      this.router.navigateByUrl('login')
    },

    error =>{
      if(error.error.message==undefined){

      }else{
        alert(error.error.message)
      }
      
    })
  }

}
