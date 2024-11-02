import { AsyncPipe } from '@angular/common';
import { Component, forwardRef, inject, OnInit } from '@angular/core';
import {
	AbstractControl,
	ControlValueAccessor,
	NG_VALIDATORS,
	NG_VALUE_ACCESSOR,
	NonNullableFormBuilder,
	ReactiveFormsModule,
	ValidationErrors,
	Validator,
	Validators,
} from '@angular/forms';
import { TuiError } from '@taiga-ui/core';
import { TuiFieldErrorPipe } from '@taiga-ui/kit';
import { TuiInputModule, TuiTextareaModule } from '@taiga-ui/legacy';
import { IContactInformationCva } from '../../models/cva-model.interface';

@Component({
	selector: 'app-contact-information-cva',
	standalone: true,
	imports: [TuiInputModule, TuiTextareaModule, ReactiveFormsModule, TuiError, TuiFieldErrorPipe, AsyncPipe],
	templateUrl: './contact-information-cva.component.html',
	styleUrl: './contact-information-cva.component.scss',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => ContactInformationCvaComponent),
			multi: true,
		},
		{
			provide: NG_VALIDATORS,
			useExisting: forwardRef(() => ContactInformationCvaComponent),
			multi: true,
		},
	],
})
export class ContactInformationCvaComponent implements ControlValueAccessor, Validator, OnInit {
	private readonly _fb = inject(NonNullableFormBuilder);
	private _onChanged: Function = (_value: IContactInformationCva) => {};
	private _onTouch: Function = (_value: IContactInformationCva) => {};

	form = this._fb.group({
		email: ['', [Validators.required, Validators.email]],
		phone: ['', Validators.required],
		address: ['', Validators.required],
	});

	ngOnInit(): void {
		this.form.valueChanges.subscribe(() => {
			const value = this.form.value;
			this._onChanged(value);
			this._onTouch(value);
		});
	}

	validate(_control: AbstractControl): ValidationErrors | null {
		return this.form.valid ? null : { contactInformation: true };
	}

	registerOnValidatorChange(fn: () => void): void {
		this._onChanged = fn;
	}

	writeValue(obj: IContactInformationCva): void {
		if (obj) {
			this.form.setValue(obj);
		}
	}

	registerOnChange(fn: Function): void {
		this._onChanged = fn;
	}

	registerOnTouched(fn: Function): void {
		this._onTouch = fn;
	}

	setDisabledState(isDisabled: boolean): void {
		isDisabled ? this.form.disable() : this.form.enable();
	}
}
