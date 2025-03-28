import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { ClientsService } from '../../services/api-client/clients/clients.service';
import { SnackbarManagerService } from '../../services/snackbar-manager.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ClientModelForm } from '../client.models';
import { ClientFormComponent } from '../components/client-form/client-form.component';
import { SERVICES } from '../../services/service.token';
import { ImplClientService } from '../../services/api-client/clients/iclients.service';
import { ImplSnackBarManagerService } from '../../services/isnackbar-manager.service';

@Component({
  selector: 'app-edit-client',
  imports: [ClientFormComponent],
  templateUrl: './edit-client.component.html',
  styleUrl: './edit-client.component.scss',
  providers: [
    { provide: SERVICES.HTTP.CLIENT, useClass: ClientsService },
    { provide: SERVICES.SNACKBAR, useClass: SnackbarManagerService }
  ]
})
export class EditClientComponent implements OnInit, OnDestroy {


  private httpsubscriptions: Subscription[] = []

  client: ClientModelForm = { id: 0, name: '', email: '', phone: '' }

  constructor(
    @Inject(SERVICES.HTTP.CLIENT) private readonly httpService: ImplClientService,
    @Inject(SERVICES.SNACKBAR) private readonly snackBarManager: ImplSnackBarManagerService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router
  ) { }


  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id')
    if (!id) {
      this.snackBarManager.show('Erro ao recuperar informações do cliente')
      this.router.navigate(['clients/list'])
      return
    }
    this.httpsubscriptions?.push(this.httpService.findById(Number(id)).subscribe(data => this.client = data))
  }

  ngOnDestroy(): void {
    this.httpsubscriptions.forEach(s => s.unsubscribe())
  }


  onSubmitClient(value: ClientModelForm) {
    const { id, ...request } = value
    console.log(id)
    if (id) {
      this.httpsubscriptions?.push(this.httpService.update(id, request).subscribe(_ => {
        this.snackBarManager.show('Usuário autalizado com sucesso')
        this.router.navigate(['clients/list'])

      }))
      return
    }
    this.snackBarManager.show('Um erro inesperado aconteceu')
    this.router.navigate(['clients/list'])
  }

}