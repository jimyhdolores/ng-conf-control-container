import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { TuiButton } from '@taiga-ui/core';
import { tuiValidationErrorsProvider } from '@taiga-ui/kit';
import { of } from 'rxjs';
import { ContactInformationCvaComponent } from '../../components/contact-information-cva/contact-information-cva.component';
import { DetailClaimCvaComponent } from '../../components/detail-claim-cva/detail-claim-cva.component';
import { PersonalInformationCvaComponent } from '../../components/personal-information-cva/personal-information-cva.component';
import { IClaimCvaForm } from '../../models/cva-model-fomr.interface';

@Component({
	selector: 'app-claim-book-cva-page',
	standalone: true,
	imports: [
		PersonalInformationCvaComponent,
		DetailClaimCvaComponent,
		ContactInformationCvaComponent,
		TuiButton,
		ReactiveFormsModule,
		JsonPipe,
	],
	providers: [
		tuiValidationErrorsProvider({
			required: 'Este campo es requerido',
			email: 'Ingrese un email valido',
			minlength: ({ requiredLength }: { requiredLength: string }) => of(`Logitud minima — ${requiredLength}`),
		}),
	],
	templateUrl: './claim-book-cva-page.component.html',
	styleUrl: './claim-book-cva-page.component.scss',
})
export class ClaimBookCvaPageComponent {
	private readonly _fb = inject(NonNullableFormBuilder);

	form = this._fb.group<IClaimCvaForm>({
		personalInformation: this._fb.control(null),
		contactInformation: this._fb.control(null),
		detailClaim: this._fb.control({ product: '', claim: '' }),
	});

	save() {}
}
