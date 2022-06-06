import { HttpErrorResponse } from '@angular/common/http';
import { DatePipe, DecimalPipe } from '@angular/common';
import * as moment from 'moment';

const datePipe: DatePipe = new DatePipe('en-US');
const decimalPipe: DecimalPipe = new DecimalPipe('en-US');


export function formatDate(val: string, format?: string | null | undefined) {
  if (val === '') {
    return val;
  }
  if (format == null) {
    format = 'yyyy/MM/dd';
  }
  return datePipe.transform(new Date(moment(val).toISOString()), format);
  // return datePipe.transform(new Date(moment(val).toISOString()), format);
}

export function dateToLocaleString(val: { toLocaleDateString: (arg0: string, arg1: { day: string; month: string; year: string; }) => any; }) {
  const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
  return val.toLocaleDateString('en', options);
}

export function formatNumberTwoDecimals(val: string) {
  if (val === '') {
    return val;
  }
  return decimalPipe.transform(val, '1.2-2');
}

export function cssGrowthIndicator(val: number) {
  if (val > 0) {
    return 'green-text';
  }
  if (val < 0) {
    return 'red-text';
  }
  return 'blue-text';
}

export function errorObject(error: { error: { message: any; errors: any; }; status: number; success: boolean; }) {
  let errorObj: any = { success: false, status: null };
  if (error instanceof HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      errorObj = { ...errorObj, message: error.error.message };
    } else {
      if (error && error.status === 0) {
        errorObj = { success: false, message: 'Please check your internet connection and try again', status: error.status };
      } else {
        if (error.error.errors) {
          const err_arr = error.error.errors;
          errorObj = {...errorObj, status: error.status, message: err_arr[Object.keys(err_arr)[0]][0] };
        } else {
          errorObj = {...errorObj, status: error.status, message: error.error.message };
        }
      }
    }
  } else {
    if (error && error.success === false) {
      errorObj = { ...error };
    } else {
      errorObj = {...errorObj, message: 'An error has occured, please refresh page and try again' };
    }
  }
  return errorObj;
}
