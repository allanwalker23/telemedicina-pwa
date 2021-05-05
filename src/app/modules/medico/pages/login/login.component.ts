import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { sessionService } from 'src/app/services/domain/sessions.service';
import Credentials from '../../../../models/credencials'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  creds : Credentials ={
    email:"",
    senha:""
  }
  constructor(
    public session:sessionService,
    public router:Router
  ) { }

  ngOnInit(): void {
  }

  login(){
  
    this.session.authenticateMedico(this.creds)
    .subscribe(response =>{
      if(response.body!=null){
        this.session.successfulLoginMedico(response.body.toString())
      }
      
      
    },
    error =>{
      if(error.error.error==undefined){

      }else{
        alert((error.error.error))
      }
      
    })
  }


  recuperarSenha(){
    this.router.navigateByUrl('recuperacaoSenha')
  }


}
