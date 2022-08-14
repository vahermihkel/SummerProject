import { Contact } from './contact.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastService } from 'angular-toastify';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor(private _toastService: ToastService) { }

  onSubmitForm(form: NgForm) {
    var formValue = form.value;
    new Contact(
      formValue.name, 
      formValue.email, 
      formValue.phone, 
      formValue.subject, 
      formValue.message)
      form.reset();
      this._toastService.success('Saime su kirja kätte! \n Vastame esimesel võimalusel');
  }
  
}
