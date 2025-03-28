import { InjectionToken } from "@angular/core";
import { ImplClientService } from "./api-client/clients/iclients.service";
import { ImplSnackBarManagerService } from "./isnackbar-manager.service";
import { ImplDialogManagerService } from "./idialog-manager.service";
import { ImplScheduleService } from "./api-client/schedules/ischedule.service";

export const SERVICES = {
    HTTP:{
        CLIENT: new InjectionToken<ImplClientService>('SERVICES.HTTP.CLIENT'),
        SCHEDULE: new InjectionToken<ImplScheduleService>('SERVICES.HTTP.CLIENT')
    },
    SNACKBAR:new InjectionToken<ImplSnackBarManagerService>('SERVICES.SNACKBAR'),
    DIALOG: new InjectionToken<ImplDialogManagerService>('SERVICES.DIALOG')
}