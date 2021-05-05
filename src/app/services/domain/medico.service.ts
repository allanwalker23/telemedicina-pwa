import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from "rxjs";
import { API_CONFIG } from "src/app/config/api.config";
import Especialidade from "src/app/models/Especialidade";
import Medico from "src/app/models/Medico";
import Credentials from '../../models/credencials'
import { LocalUser } from '../../models/localUser';
import { StorageService } from "../storage";

@Injectable()
export class medicoService{

    constructor(
        public http:HttpClient,
        public storage:StorageService,
        public router:Router
    ){}

   
    insertMedical(obj:any){

        return this.http.post(
            API_CONFIG.baseUrl+"/medicos",
            obj,
            {responseType:'json',
            observe:'response'
           })
    }

    getInfo() : Observable<Medico[]> {
        let token = this.storage.getLocalUser().token;
        let authHeader = new HttpHeaders({'Authorization':'Bearer '+token})
        
        return this.http.get<Medico[]>(
            API_CONFIG.baseUrl+"/medicos/",
            
            {headers:authHeader,
                responseType:'json'})
            
    }

}