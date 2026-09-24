import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TuiButton } from '@taiga-ui/core';
import { ClaimBookForm } from '../../claim-book.form';
import { ContactInformationComponent } from '../../components/contact-information/contact-information.component';
import { DetailClaimComponent } from '../../components/detail-claim/detail-claim.component';
import { PersonalInformationComponent } from '../../components/personal-information/personal-information.component';

@Component({
	selector: 'app-claim-book-page',
	imports: [PersonalInformationComponent, DetailClaimComponent, ContactInformationComponent, TuiButton, JsonPipe],
	providers: [ClaimBookForm],
	templateUrl: './claim-book-page.component.html',
	styleUrl: './claim-book-page.component.scss',
})
export class ClaimBookPageComponent {
	protected readonly value = inject(ClaimBookForm).value;

	save(): void {}
}
