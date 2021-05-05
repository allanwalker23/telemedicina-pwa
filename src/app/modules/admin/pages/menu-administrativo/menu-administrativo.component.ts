import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { adminService } from 'src/app/services/domain/admin.service';

@Component({
  selector: 'app-menu-administrativo',
  templateUrl: './menu-administrativo.component.html',
  styleUrls: ['./menu-administrativo.component.css']
})
export class MenuAdministrativoComponent implements OnInit {
public contador:any;
public admin:any;

  constructor(
    public router:Router,
    public adminService:adminService
  ) { }

  ngOnInit() {
    this.adminService.getCount()
    .subscribe(count=>{
      this.contador=count;
    })

    this.adminService.getInfo()
    .subscribe(r=>{
      this.admin=r;
      console.log(r)
    },
    error=>{
      console.log(error)
    })
  }

  goGerMedicos(){
    this.router.navigateByUrl('gerenciadorMedico')
  }
}
export interface r{
  nome:string
}