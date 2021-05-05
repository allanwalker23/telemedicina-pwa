import { Component, OnInit } from '@angular/core';
import { sessionService } from 'src/app/services/domain/sessions.service';
import Credentials from '../../../../models/credencials'

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  creds : Credentials ={
    email:"",
    senha:""
  }
  constructor(
    public session:sessionService
  ) { }

  ngOnInit(): void {
  }

  login(){
  
    this.session.authenticateAdmin(this.creds)
    .subscribe(response =>{
      if(response.body!=null){
        this.session.successfulLoginAdmin(response.body.toString())
      }
      
      
    },
    error =>{
      if(error.error.error==undefined){

      }else{
        alert((error.error.error))
      }
      
    })
  }

}
