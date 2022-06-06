import { FormlyFieldConfig } from "@ngx-formly/core";

export function getFormlyField(key: string, fields: FormlyFieldConfig[]): any {
  let formlyfield: FormlyFieldConfig = {};
  for (let i = 0, len = fields.length; i < len; i++) {
    const f = fields[i];
    if (f.key === key) {
      return f;
    }

    if (f.fieldGroup && !f.key) {
      const cf = getFormlyField(key, f.fieldGroup);
      if (cf && cf.key) {
        return cf;
      }
    }
  }
  return formlyfield;
}
