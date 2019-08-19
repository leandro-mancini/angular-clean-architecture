import { Component, OnInit, forwardRef, Input, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements ControlValueAccessor {

  @Input('t-label') _label: string = '';
  @Input('t-type') _type: string = '';
  @Input('t-value') _value: any = '';
  @Input('t-readonly') _readonly: boolean = false;
  @Input('t-disabled') _disabled: boolean = false;

  @Output('t-change') change: EventEmitter<any> = new EventEmitter<any>();

  onChange: any = () => { };
  onTouched: any = () => { };

  get label() {
    return this._label;
  }

  get type() {
    return this._type;
  }

  get value() {
    return this._value;
  }

  set value(val) {
    this._value = val;
    this.onChange(val);
    this.onTouched();
  }

  get disabled() {
    return this._disabled;
  }

  set disabled(val) {
    this._disabled = val;
  }

  get readonly() {
    return this._readonly;
  }

  set readonly(val) {
    this._readonly = val;
  }

  changeInput(val) {
    this.value = val;
  }

  writeValue(obj: any): void {
    if (obj) {
      this.value = obj;
    }
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

}
