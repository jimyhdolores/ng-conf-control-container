import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormField } from '@angular/forms/signals';
import { TuiError } from '@taiga-ui/core';
import { TuiFiles } from '@taiga-ui/kit';
import { ClaimBookForm } from '../../claim-book.form';

@Component({
	selector: 'app-input-file',
	imports: [AsyncPipe, FormField, TuiError, TuiFiles],
	templateUrl: './input-file.component.html',
	styleUrl: './input-file.component.scss',
})
export class InputFileComponent {
	private readonly claimBookForm = inject(ClaimBookForm);

	protected readonly filesField = this.claimBookForm.form.files;

	protected get rejected(): readonly File[] {
		return this.claimBookForm.rejectedFiles();
	}

	protected onReject(files: readonly File[]): void {
		this.claimBookForm.rejectedFiles.update((current) => Array.from(new Set(current.concat(files))));
	}

	protected onRemove(file: File): void {
		this.claimBookForm.rejectedFiles.update((current) => current.filter((rejected) => rejected !== file));
		this.filesField().value.update((current) => current.filter((item) => item !== file));
	}
}
