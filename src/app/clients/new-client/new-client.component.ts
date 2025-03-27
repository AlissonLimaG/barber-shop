import { Component, Inject, InjectionToken, OnDestroy } from '@angular/core';
import { SERVICES } from '../../services/service.token';
import { ClientsService } from '../../services/api-client/clients/clients.service';
import { ImplClientService } from '../../services/api-client/clients/iclients.service';
import { ClientFormComponent } from "../components/client-form/client-form.component";
import { ClientModelForm } from '../client.models';
import { Subscription } from 'rxjs';
import { Router, Routes } from '@angular/router';
import { ImplSnackBarManagerService } from '../../services/isnackbar-manager.service';
import { SnackbarManagerService } from '../../services/snackbar-manager.service';

@Component({
  selector: 'app-new-client',
  imports: [ClientFormComponent, ClientFormComponent],
  templateUrl: './new-client.component.html',
  styleUrl: './new-client.component.scss',
  providers: [
    {provide: SERVICES.HTTP.CLIENT, useClass: ClientsService},
    {provide: SERVICES.SNACKBAR, useClass: SnackbarManagerService}
  ]
})
export class NewClientComponent implements OnDestroy{

  private httpSubscription?:Subscription;

  constructor(
    @Inject(SERVICES.HTTP.CLIENT) private readonly httpService: ImplClientService,
    @Inject(SERVICES.SNACKBAR) private readonly snackBarManager: ImplSnackBarManagerService,
    private readonly routes:Router){}
 
  ngOnDestroy(): void {
    if(this.httpSubscription){
      this.httpSubscription.unsubscribe();
    }
  }

  onSubmitClient(value: ClientModelForm) {
    const {id, ...request} = value;
    this.httpService.save(request).subscribe(()=>{
      this.snackBarManager.show('Usuario registrado com sucesso')
      this.routes.navigate(["clients/list"])

    })
  }

}
