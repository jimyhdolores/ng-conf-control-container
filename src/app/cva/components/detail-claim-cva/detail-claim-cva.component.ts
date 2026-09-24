import { Component, forwardRef, inject, OnInit, ChangeDetectionStrategy } from '@angular/core';
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
import { TuiError, TuiInput } from '@taiga-ui/core';
import { TuiTextarea } from '@taiga-ui/kit';
import { IDetailClaimCva } from '../../models/cva-model.interface';
@Component({
    selector: 'app-detail-claim-cva',
    imports: [TuiInput, TuiTextarea, ReactiveFormsModule, TuiError],
    templateUrl: './detail-claim-cva.component.html',
    styleUrl: './detail-claim-cva.component.scss',
    changeDetection: ChangeDetectionStrategy.Eager,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => DetailClaimCvaComponent),
            multi: true,
        },
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => DetailClaimCvaComponent),
            multi: true,
        },
    ]
})
export class DetailClaimCvaComponent implements ControlValueAccessor, Validator, OnInit {
	private readonly _fb = inject(NonNullableFormBuilder);
	private _onChanged: Function = (_value: IDetailClaimCva) => {};
	private _onTouch: Function = (_value: IDetailClaimCva) => {};

	form = this._fb.group({
		product: ['', Validators.required],
		claim: ['', Validators.required],
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

	writeValue(obj: IDetailClaimCva): void {
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
