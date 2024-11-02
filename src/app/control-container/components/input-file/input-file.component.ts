import { AsyncPipe, NgForOf } from '@angular/common';
import { Component, inject } from '@angular/core';
import type { AbstractControl, ValidatorFn } from '@angular/forms';
import { ControlContainer, FormControl, ReactiveFormsModule } from '@angular/forms';
import { TuiValidationError } from '@taiga-ui/cdk';
import { TuiError } from '@taiga-ui/core';
import { TuiFieldErrorPipe, TuiFiles, tuiFilesAccepted } from '@taiga-ui/kit';
import { map, Observable } from 'rxjs';

const maxFilesLength = (maxLength: number): ValidatorFn => {
	return ({ value }: AbstractControl) =>
		value.length > maxLength
			? {
					maxLength: new TuiValidationError('Error: maximum limit - 5 files for upload'),
			  }
			: null;
};

@Component({
	selector: 'app-input-file',
	standalone: true,
	imports: [AsyncPipe, NgForOf, ReactiveFormsModule, TuiError, TuiFieldErrorPipe, TuiFiles],
	templateUrl: './input-file.component.html',
	styleUrl: './input-file.component.scss',
})
export class InputFileComponent {
	private readonly controlContainer = inject(ControlContainer);

	protected readonly control = new FormControl<File[]>([], [maxFilesLength(5)]);
	protected readonly accepted$: Observable<File[]> = this.control.valueChanges.pipe(
		map(() => {
			const files = tuiFilesAccepted(this.control);
			this.filesField.setValue(files.map((item) => ({ name: item.name, size: item.size })));
			return files;
		})
	);

	protected rejected: readonly File[] = [];

	private get filesField() {
		return this.controlContainer.control?.get('files') as FormControl;
	}

	protected onReject(files: readonly File[]): void {
		this.rejected = Array.from(new Set(this.rejected.concat(files)));
	}

	protected onRemove(file: File): void {
		this.rejected = this.rejected.filter((rejected) => rejected !== file);
		this.control.setValue(this.control.value?.filter((current) => current !== file) ?? []);
	}
}
