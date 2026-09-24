import { Component, inject } from '@angular/core';
import { FormField } from '@angular/forms/signals';
import { TuiInput } from '@taiga-ui/core';
import { ClaimBookForm } from '../../claim-book.form';

@Component({
	selector: 'app-contact-information',
	imports: [TuiInput, FormField],
	templateUrl: './contact-information.component.html',
	styleUrl: './contact-information.component.scss',
})
export default class ContactInformationComponent {
	protected readonly form = inject(ClaimBookForm).form;
}
