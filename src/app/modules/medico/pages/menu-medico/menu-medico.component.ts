import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { medicoService } from 'src/app/services/domain/medico.service';

@Component({
  selector: 'app-menu-medico',
  templateUrl: './menu-medico.component.html',
  styleUrls: ['./menu-medico.component.css']
})
export class MenuMedicoComponent implements OnInit {
public medico:any;
  constructor(
    public router:Router,
    public medicoService:medicoService
  ) { }

  ngOnInit(): void {
    this.medicoService.getInfo()
    .subscribe(r=>{
      this.medico=r;
    })
  }

  home(){
    this.router.navigateByUrl('home')
  }

}
