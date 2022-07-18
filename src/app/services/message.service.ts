import { Injectable } from '@angular/core';
import Swal, { SweetAlertResult } from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor() {}

  confirm(): Promise<SweetAlertResult<any>> {
    return Swal.fire({
      title: 'Are you sure?',
      text: 'You data will not be saved, consider to save your form before.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Save data',
      cancelButtonText: 'Continue',
    });
  }
}
