import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() fields!: FormlyFieldConfig[];
  @Input() loading!: Observable<boolean>;
  @Input() model: any;
  @Output() submit = new EventEmitter();

  form = new FormGroup({});

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.form.valid) {
      this.submit.emit(this.form);
    }
  }
}
