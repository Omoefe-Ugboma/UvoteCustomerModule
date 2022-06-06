export function minlengthValidationMessage(err: any, field: { templateOptions: { minLength: any; }; }) {
  return `Should have atleast ${field.templateOptions.minLength} characters`;
}

export function maxlengthValidationMessage(err: any, field: { templateOptions: { maxLength: any; }; }) {
  return `This value should be less than ${field.templateOptions.maxLength} characters`;
}

export function minValidationMessage(err: any, field: { templateOptions: { min: any; }; }) {
  return `This value should be more than ${field.templateOptions.min}`;
}

export function maxValidationMessage(err: any, field: { templateOptions: { max: any; }; }) {
  return `This value should be less than ${field.templateOptions.max}`;
}

export const validationMessages: { name: string, message: any }[] = [
  { name: 'required', message: 'This field is required' },
  { name: 'minlength', message: minlengthValidationMessage },
  { name: 'maxlength', message: maxlengthValidationMessage },
  { name: 'min', message: minValidationMessage },
  { name: 'max', message: maxValidationMessage },
];
