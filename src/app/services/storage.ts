import { Injectable } from '@angular/core';
import { STORAGE_KEYS } from '../config/storage.config';
import { LocalUser } from '../models/localUser';

@Injectable()
export class StorageService{

    getLocalUser():any{
        let user = localStorage.getItem(STORAGE_KEYS.localUser)
        if(user==null){
            return null;
        }else{
            return JSON.parse(user)
        }

        
    }

    setLocalUser(obj:LocalUser){
        if(obj==null){
            localStorage.removeItem(STORAGE_KEYS.localUser)
        }else{
            localStorage.setItem(STORAGE_KEYS.localUser,JSON.stringify(obj))
    }
    }

    getLocalAdmin():any{
        let user = localStorage.getItem(STORAGE_KEYS.localAdmin)
        if(user==null){
            return null;
        }else{
            return JSON.parse(user)
        }

        
    }

    setLocalAdmin(obj:LocalUser){
        if(obj==null){
            localStorage.removeItem(STORAGE_KEYS.localAdmin)
        }else{
            localStorage.setItem(STORAGE_KEYS.localAdmin,JSON.stringify(obj))
    }
    }
}
