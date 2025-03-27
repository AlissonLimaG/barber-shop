import { Injectable } from '@angular/core';
import { ImplSnackBarManagerService } from './isnackbar-manager.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarManagerService implements ImplSnackBarManagerService{

  constructor(private readonly snackBar:MatSnackBar) { }

  show(message: string, action: string = 'fechar', duration: number = 3000): void {
    this.snackBar.open(message, action, {duration, verticalPosition:'top', horizontalPosition:'right'})
  }

}
