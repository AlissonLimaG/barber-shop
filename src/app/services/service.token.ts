import { InjectionToken } from "@angular/core";
import { ImplClientService } from "./api-client/clients/iclients.service";
import { ImplSnackBarManagerService } from "./isnackbar-manager.service";

export const SERVICES = {
    HTTP:{
        CLIENT: new InjectionToken<ImplClientService>('SERVICES.HTTP.CLIENT'),
        // SCHEDULE: new InjectionToken<ImplScheduleService>('SERVICES_TOKEN.HTTP.CLIENT')
    },
    SNACKBAR:new InjectionToken<ImplSnackBarManagerService>('SERVICES.SNACKBAR')
}