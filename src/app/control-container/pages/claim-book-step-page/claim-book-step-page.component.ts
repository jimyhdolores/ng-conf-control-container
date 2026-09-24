import { JsonPipe } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { TuiButton } from '@taiga-ui/core';
import { filter, map, startWith } from 'rxjs';
import { ClaimBookForm } from '../../claim-book.form';

const STEPS = ['personal-information', 'contact-information', 'detail-claim'];

@Component({
	selector: 'app-claim-book-step-page',
	imports: [RouterOutlet, RouterLink, TuiButton, JsonPipe],
	templateUrl: './claim-book-step-page.component.html',
	styleUrl: './claim-book-step-page.component.scss',
	providers: [ClaimBookForm],
})
export default class ClaimBookStepPageComponent {
	private readonly _router = inject(Router);
	protected readonly value = inject(ClaimBookForm).value;

	private readonly currentStep = toSignal(
		this._router.events.pipe(
			filter((event) => event instanceof NavigationEnd),
			map((event) => event.urlAfterRedirects),
			startWith(this._router.url),
			map((url) => STEPS.findIndex((step) => url.includes(step))),
		),
		{ initialValue: STEPS.indexOf('personal-information') },
	);

	protected readonly routerPath = computed(() => STEPS[this.currentStep() + 1] ?? []);
	protected readonly routerBackPath = computed(() => STEPS[this.currentStep() - 1] ?? []);

	save(): void {}
}
