import { JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import { TuiButton } from '@taiga-ui/core';
import { ContactInformationCvaComponent } from '../../components/contact-information-cva/contact-information-cva.component';
import { DetailClaimCvaComponent } from '../../components/detail-claim-cva/detail-claim-cva.component';
import { PersonalInformationCvaComponent } from '../../components/personal-information-cva/personal-information-cva.component';
import { IClaimCvaForm } from '../../models/cva-model-fomr.interface';

@Component({
	selector: 'app-claim-book-cva-page',
	imports: [
		PersonalInformationCvaComponent,
		DetailClaimCvaComponent,
		ContactInformationCvaComponent,
		TuiButton,
		FormField,
		JsonPipe,
	],
	templateUrl: './claim-book-cva-page.component.html',
	styleUrl: './claim-book-cva-page.component.scss',
})
export class ClaimBookCvaPageComponent {
	private readonly model = signal<IClaimCvaForm>({
		personalInformation: {
			names: '',
			paternalSurname: '',
			maternalSurname: '',
			dni: '',
		},
		contactInformation: {
			email: '',
			phone: '',
			address: '',
		},
		detailClaim: {
			product: '',
			claim: '',
		},
	});

	protected readonly form = form(this.model);

	save(): void {}
}
