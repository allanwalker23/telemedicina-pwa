import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HomeComponent } from './home/home.component';
import { RegistroMedicoComponent } from './modules/medico/pages/registro-medico/registro-medico.component';
import { LoginComponent } from './modules/medico/pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { sessionService } from './services/domain/sessions.service';
import { StorageService } from './services/storage';
import { HttpClientModule } from '@angular/common/http';
import { GerenciadorMedicosComponent } from './modules/admin/pages/gerenciador-medicos/gerenciador-medicos.component';
import { MenuAdministrativoComponent } from './modules/admin/pages/menu-administrativo/menu-administrativo.component';
import { LoginAdminComponent } from './modules/admin/pages/login-admin/login-admin.component';
import { MenuMedicoComponent } from './modules/medico/pages/menu-medico/menu-medico.component';
import { ResgateSenhaComponent } from './modules/medico/resgate-senha/resgate-senha.component';
import { ResgateSenhaEnviadoComponent } from './modules/medico/resgate-senha-enviado/resgate-senha-enviado.component';
import { especialidadeService } from './services/domain/especialidade.service';
import { medicoService } from './services/domain/medico.service';
import { adminService } from './services/domain/admin.service';
import { SolicitacaoEmailAguardeComponent } from './modules/medico/solicitacao-email-aguarde/solicitacao-email-aguarde.component';
import { SolicitacaoEmailRejeitadoComponent } from './modules/medico/solicitacao-email-rejeitado/solicitacao-email-rejeitado.component';
import { SolicitacaoEmailInativadoComponent } from './modules/medico/solicitacao-email-inativado/solicitacao-email-inativado.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistroMedicoComponent,
    LoginComponent,
    GerenciadorMedicosComponent,
    MenuAdministrativoComponent,
    LoginAdminComponent,
    MenuMedicoComponent,
    ResgateSenhaComponent,
    ResgateSenhaEnviadoComponent,
    SolicitacaoEmailAguardeComponent,
    SolicitacaoEmailRejeitadoComponent,
    SolicitacaoEmailInativadoComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
   
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [
    sessionService,
    StorageService,
    medicoService,
    especialidadeService,
    adminService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
