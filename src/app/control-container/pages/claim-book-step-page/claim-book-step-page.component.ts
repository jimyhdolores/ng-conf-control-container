import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { TuiButton } from '@taiga-ui/core';
import { tuiValidationErrorsProvider } from '@taiga-ui/kit';
import { filter, of } from 'rxjs';
import { InputFileComponent } from '../../components/input-file/input-file.component';

@Component({
	selector: 'app-claim-book-step-page',
	standalone: true,
	imports: [RouterOutlet, RouterLink, TuiButton, ReactiveFormsModule, JsonPipe, InputFileComponent],
	templateUrl: './claim-book-step-page.component.html',
	styleUrl: './claim-book-step-page.component.scss',
	providers: [
		tuiValidationErrorsProvider({
			required: 'Este campo es requerido',
			email: 'Ingrese un email valido',
			minlength: ({ requiredLength }: { requiredLength: string }) => of(`Logitud minima — ${requiredLength}`),
		}),
	],
})
export default class ClaimBookStepPageComponent {
	private readonly _fb = inject(NonNullableFormBuilder);
	private readonly _router = inject(Router);
	routerPath = '/control-container/claim-book-step/contact-information';
	routerBackPath = '';

	constructor() {
		this._router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {
			const currentPath = event.urlAfterRedirects;

			if (currentPath.includes('contact-information')) {
				this.routerPath = 'detail-claim';
				this.routerBackPath = 'personal-information';
			} else if (currentPath.includes('detail-claim')) {
				this.routerBackPath = 'contact-information';
			} else if (currentPath.includes('personal-information')) {
				this.routerBackPath = '';
				this.routerPath = 'contact-information';
			}
		});
	}

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
