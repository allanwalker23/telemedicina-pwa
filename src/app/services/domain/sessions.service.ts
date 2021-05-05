import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { JwtHelperService } from '@auth0/angular-jwt';
import { API_CONFIG } from "src/app/config/api.config";
import Credentials from '../../models/credencials'
import { LocalUser } from '../../models/localUser';
import { StorageService } from "../storage";
import { medicoService } from "./medico.service";
import {map}from 'rxjs/operators'
import Medico from "src/app/models/Medico";
@Injectable()
export class sessionService{
    jwtHelper:JwtHelperService= new JwtHelperService();
     medico:Medico[] | undefined;
    constructor(
        public http:HttpClient,
        public storage:StorageService,
        public router:Router,
        public medicoService:medicoService
    ){}

    authenticateMedico(creds:Credentials){
        return this.http.post(API_CONFIG.baseUrl+"/sessions/authMedico",
        creds,
        {
            observe: 'response',
            responseType: 'json'
        })
    }

    authenticateAdmin(creds:Credentials){
        return this.http.post(API_CONFIG.baseUrl+"/sessions/authAdmin",
        creds,
        {
            observe: 'response',
            responseType: 'json'
        })
    }

    successfulLoginMedico(authValue:string){
        if(!this.jwtHelper.isTokenExpired(authValue)){
            let user :LocalUser ={
                token:authValue,
                id:this.jwtHelper.decodeToken(authValue).sub
    
            }
            this.storage.setLocalUser(user)
            this.medicoService.getInfo()
            .subscribe(r=>{
                this.medico=r;
               console.log(this.medico[0])
                    if(this.medico[0].ativo==0){
                        this.router.navigateByUrl('solicitacaoEmailAguarde')   
                    }else if(this.medico[0].ativo==1){
                        this.router.navigateByUrl('solicitacaoEmailInativo')   
                    }else{
                        this.router.navigateByUrl('solicitacaoEmailRejeitado')   
                    }
               
            })
            
        }else{
            alert("Sessão expirada")         
            this.router.navigateByUrl('home')   
        }
        
    }

    successfulLoginAdmin(authValue:string){
        if(!this.jwtHelper.isTokenExpired(authValue)){
            let admin :LocalUser ={
                token:authValue,
                id:this.jwtHelper.decodeToken(authValue).sub
    
            }
            this.storage.setLocalAdmin(admin)
            this.router.navigateByUrl('menuAdministrativo')
        }else{
            alert("Sessão expirada")         
            this.router.navigateByUrl('home')   
        }
        
    }

}