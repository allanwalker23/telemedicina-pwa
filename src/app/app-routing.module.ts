import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GerenciadorMedicosComponent } from './modules/admin/pages/gerenciador-medicos/gerenciador-medicos.component';
import { LoginAdminComponent } from './modules/admin/pages/login-admin/login-admin.component';
import { MenuAdministrativoComponent } from './modules/admin/pages/menu-administrativo/menu-administrativo.component';
import { LoginComponent } from './modules/medico/pages/login/login.component';
import { MenuMedicoComponent } from './modules/medico/pages/menu-medico/menu-medico.component';
import { RegistroMedicoComponent } from './modules/medico/pages/registro-medico/registro-medico.component';
import { ResgateSenhaEnviadoComponent } from './modules/medico/resgate-senha-enviado/resgate-senha-enviado.component';
import { ResgateSenhaComponent } from './modules/medico/resgate-senha/resgate-senha.component';
import { SolicitacaoEmailAguardeComponent } from './modules/medico/solicitacao-email-aguarde/solicitacao-email-aguarde.component';
import { SolicitacaoEmailInativadoComponent } from './modules/medico/solicitacao-email-inativado/solicitacao-email-inativado.component';
import { SolicitacaoEmailRejeitadoComponent } from './modules/medico/solicitacao-email-rejeitado/solicitacao-email-rejeitado.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'home'},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'loginAdmin',component:LoginAdminComponent},
  {path:'registroMedico',component:RegistroMedicoComponent},
  {path:'gerenciadorMedico',component:GerenciadorMedicosComponent},
  {path:'menuAdministrativo',component:MenuAdministrativoComponent},
  {path:'recuperacaoSenha',component:ResgateSenhaComponent},
  {path:'recuperacaoSenhaEnviado',component:ResgateSenhaEnviadoComponent},
  {path:'menuMedico',component:MenuMedicoComponent},
  {path:'solicitacaoEmailAguarde',component:SolicitacaoEmailAguardeComponent},
  {path:'solicitacaoEmailRejeitado',component:SolicitacaoEmailRejeitadoComponent},
  {path:'solicitacaoEmailInativo',component:SolicitacaoEmailInativadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
