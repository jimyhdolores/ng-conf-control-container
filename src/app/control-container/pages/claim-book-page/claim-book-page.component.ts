import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TuiButton } from '@taiga-ui/core';
import { tuiValidationErrorsProvider } from '@taiga-ui/kit';
import { of } from 'rxjs';
import { ContactInformationComponent } from '../../components/contact-information/contact-information.component';
import { DetailClaimComponent } from '../../components/detail-claim/detail-claim.component';
import { InputFileComponent } from '../../components/input-file/input-file.component';
import { PersonalInformationComponent } from '../../components/personal-information/personal-information.component';

@Component({
	selector: 'app-claim-book-page',
	standalone: true,
	imports: [
		PersonalInformationComponent,
		DetailClaimComponent,
		ContactInformationComponent,
		TuiButton,
		ReactiveFormsModule,
		JsonPipe,
		InputFileComponent,
	],
	providers: [
		tuiValidationErrorsProvider({
			required: 'Este campo es requerido',
			email: 'Ingrese un email valido',
			minlength: ({ requiredLength }: { requiredLength: string }) => of(`Logitud minima — ${requiredLength}`),
		}),
	],
	templateUrl: './claim-book-page.component.html',
	styleUrl: './claim-book-page.component.scss',
})
export class ClaimBookPageComponent {
	private readonly _fb = inject(NonNullableFormBuilder);

	form = this._fb.group({
		files: {},
		personalInformation: this._fb.group({
			names: ['', Validators.required],
			paternalSurname: ['', Validators.required],
			maternalSurname: ['', Validators.required],
			dni: ['', [Validators.required, Validators.minLength(8)]],
		}),
		contactInformation: this._fb.group({
			email: ['', [Validators.required, Validators.email]],
			phone: ['', Validators.required],
			address: ['', Validators.required],
		}),
		detailClaim: this._fb.group({
			product: ['', Validators.required],
			claim: ['', Validators.required],
		}),
	});

	save() {}
}
