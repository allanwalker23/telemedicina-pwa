import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { JwtHelperService } from '@auth0/angular-jwt';
import { API_CONFIG } from "src/app/config/api.config";
import Especialidade from "src/app/models/Especialidade";
import Medico from "src/app/models/Medico";
import Credentials from '../../models/credencials'
import { LocalUser } from '../../models/localUser';
import { StorageService } from "../storage";

@Injectable()
export class adminService{

    constructor(
        public http:HttpClient,
        public storage:StorageService,
        public router:Router
    ){}

   
    getInfo(){
        let token = this.storage.getLocalAdmin().token;
        let authHeader = new HttpHeaders({'Authorization':'Bearer '+token})
        
        return this.http.get(
            API_CONFIG.baseUrl+"/admin/",
            
            {headers:authHeader,
                responseType:'json'})
            
    }

    getCount(){
        let token = this.storage.getLocalUser().token;
        let authHeader = new HttpHeaders({'Authorization':'Bearer '+token})

        return this.http.get(
            API_CONFIG.baseUrl+"/medicos/count",
            
            {headers:authHeader,
                responseType:'json'})
            
    }

   

}