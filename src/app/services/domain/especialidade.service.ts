import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { JwtHelperService } from '@auth0/angular-jwt';
import { API_CONFIG } from "src/app/config/api.config";
import Especialidade from "src/app/models/Especialidade";
import Credentials from '../../models/credencials'
import { LocalUser } from '../../models/localUser';
import { StorageService } from "../storage";

@Injectable()
export class especialidadeService{

    constructor(
        public http:HttpClient,
        public storage:StorageService,
        public router:Router
    ){}

   
    getAll(){
            
        return this.http.get(
            API_CONFIG.baseUrl+"/especialidades",
            
            {responseType:'json'})
            
        }

}