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
import { TuiError, TuiLabel } from '@taiga-ui/core';
import { TuiFieldErrorPipe } from '@taiga-ui/kit';
import { TuiInputModule } from '@taiga-ui/legacy';
import { IPersonalInformationCva } from '../../models/cva-model.interface';
@Component({
	selector: 'app-personal-information-cva',
	standalone: true,
	imports: [TuiInputModule, ReactiveFormsModule, TuiFieldErrorPipe, TuiError, TuiLabel, AsyncPipe],
	templateUrl: './personal-information-cva.component.html',
	styleUrl: './personal-information-cva.component.scss',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => PersonalInformationCvaComponent),
			multi: true,
		},
		{
			provide: NG_VALIDATORS,
			useExisting: forwardRef(() => PersonalInformationCvaComponent),
			multi: true,
		},
	],
})
export class PersonalInformationCvaComponent implements ControlValueAccessor, Validator, OnInit {
	private readonly _fb = inject(NonNullableFormBuilder);
	private _onChanged: Function = (_value: IPersonalInformationCva) => {};
	private _onTouch: Function = (_value: IPersonalInformationCva) => {};

	form = this._fb.group({
		names: ['', Validators.required],
		paternalSurname: ['', Validators.required],
		maternalSurname: ['', Validators.required],
		dni: ['', [Validators.required, Validators.minLength(8)]],
	});

	ngOnInit(): void {
		this.form.valueChanges.subscribe(() => {
			const value = this.form.value;
			this._onChanged(value);
			this._onTouch(value);
		});
	}

	validate(_control: AbstractControl): ValidationErrors | null {
		return this.form.valid ? null : { detailClaim: true };
	}

	writeValue(obj: IPersonalInformationCva): void {
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
