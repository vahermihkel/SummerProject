import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog"

@Component({
  selector: 'app-success-modal',
  templateUrl: './success-modal.component.html',
  styleUrls: ['./success-modal.component.css']
})
export class SuccessModalComponent implements OnInit {
  @Input() message: { title: string, description?: string };

  constructor(
    private dialogRef: MatDialogRef<SuccessModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
      this.message = this.data;
   }

  ngOnInit(): void {
    setTimeout(()=>{
      this.dialogRef.close();
    }, 10000);
  }

  onClose() {
    this.dialogRef.close();
  }

}
