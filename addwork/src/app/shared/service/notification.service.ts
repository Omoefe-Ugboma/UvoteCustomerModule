import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toastr: ToastrService) { }

  showSuccess(message: string, title: string = 'Success') {
    title && this.toastr.success(message, title);
  }

  showError(message: string, title: string = 'Error') {
    title && this.toastr.error(message, title);
  }

  showInfo(message: string, title: string = 'Info') {
    title && this.toastr.info(message, title);
  }

  showWarning(message: string, title: string = 'Warning') {
    title && this.toastr.warning(message, title);
  }
}
