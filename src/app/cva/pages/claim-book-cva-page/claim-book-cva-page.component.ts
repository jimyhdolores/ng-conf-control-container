import { JsonPipe } from '@angular/common';
import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { TuiButton, tuiValidationErrorsProvider } from '@taiga-ui/core';
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
        ReactiveFormsModule,
        JsonPipe,
    ],
    providers: [
        tuiValidationErrorsProvider({
            required: 'Este campo es requerido',
            email: 'Ingrese un email valido',
            minlength: ({ requiredLength }: {
                requiredLength: string;
            }) => `Logitud minima — ${requiredLength}`,
        }),
    ],
    templateUrl: './claim-book-cva-page.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './claim-book-cva-page.component.scss'
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
