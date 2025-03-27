import { Component, Inject } from '@angular/core';
import { ImplClientService } from '../../services/api-client/clients/iclients.service';
import { SERVICES } from '../../services/service.token';
import { ClientsService } from '../../services/api-client/clients/clients.service';

@Component({
  selector: 'app-edit-client',
  imports: [],
  templateUrl: './edit-client.component.html',
  styleUrl: './edit-client.component.scss',
  providers: [
    {provide: SERVICES.HTTP.CLIENT, useClass: ClientsService}
  ]
})
export class EditClientComponent {

  constructor(@Inject(SERVICES.HTTP.CLIENT) private readonly httpService: ImplClientService){}

}
