import { HttpErrorResponse } from '@angular/common/http';

export function getErrorObj(err: any) {
  let errorObj: any = { success: false, status: null };
  if (err instanceof HttpErrorResponse) {
    if (err.error instanceof ErrorEvent) {
      errorObj = {...errorObj, msg: err.error.message };
    }
    else {
      if (err.status === 0) {
        errorObj = {...errorObj, status: err.status, msg: 'Please check your internet connection and try again' };
      } else if (err.status === 500) {
        errorObj = {...errorObj, status: err.status, msg: err.statusText };
      } else {
        if (err.error.errors) {
          const err_arr = err.error.errors;
          errorObj = {...errorObj, status: err.status, msg: err_arr[Object.keys(err_arr)[0]][0] };
        } else {
          errorObj = {...errorObj, status: err.status, msg: err.error.message };
        }
      }
    }
  }
  else {
    errorObj = {...errorObj, msg: 'An error has occured, please refresh page and try again' };
  }
  return errorObj;
}
