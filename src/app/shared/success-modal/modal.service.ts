import { Subject } from 'rxjs/Subject';
import { SuccessModalComponent } from './success-modal.component';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  modalClosed = new Subject<any>();

  constructor(private dialog: MatDialog) { }

  showModal(message: { title: string; description: string}) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = message;
    dialogConfig.panelClass = "custom-no-padding-dialog";
    dialogConfig.backdropClass = "custom-darker-modal-backdrop";
    const dialogRef = this.dialog.open(SuccessModalComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(()=> {
      this.modalClosed.next();
    })
  }
}
