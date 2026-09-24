import { Component, inject } from '@angular/core';
import { FormField } from '@angular/forms/signals';
import { TuiError, TuiInput } from '@taiga-ui/core';
import { ClaimBookForm } from '../../claim-book.form';

@Component({
	selector: 'app-personal-information',
	imports: [TuiInput, FormField, TuiError],
	templateUrl: './personal-information.component.html',
	styleUrl: './personal-information.component.scss',
})
export class PersonalInformationComponent {
	protected readonly form = inject(ClaimBookForm).form;
}
