import { Routes } from '@angular/router';
import { ContactInformationComponent } from './control-container/components/contact-information/contact-information.component';
import { DetailClaimComponent } from './control-container/components/detail-claim/detail-claim.component';
import { PersonalInformationComponent } from './control-container/components/personal-information/personal-information.component';
import { ControlContainerComponent } from './control-container/control-container.component';
import { ClaimBookPageComponent } from './control-container/pages/claim-book-page/claim-book-page.component';
import ClaimBookStepPageComponent from './control-container/pages/claim-book-step-page/claim-book-step-page.component';
import { CvaComponent } from './cva/cva.component';
import { ClaimBookCvaPageComponent } from './cva/pages/claim-book-cva-page/claim-book-cva-page.component';

export const routes: Routes = [
	{
		path: 'cva',
		component: CvaComponent,
		children: [
			{
				path: 'claim-book-cva',
				component: ClaimBookCvaPageComponent,
			},

			{
				path: '',
				pathMatch: 'full',
				redirectTo: 'claim-book-cva',
			},
		],
	},
	{
		path: 'control-container',
		component: ControlContainerComponent,
		children: [
			{
				path: 'claim-book',
				component: ClaimBookPageComponent,
			},
			{
				path: 'claim-book-step',
				component: ClaimBookStepPageComponent,
				children: [
					{
						path: 'personal-information',
						component: PersonalInformationComponent,
					},

					{
						path: 'contact-information',
						component: ContactInformationComponent,
					},
					{
						path: 'detail-claim',
						component: DetailClaimComponent,
					},
					{
						path: '',
						pathMatch: 'full',
						redirectTo: 'personal-information',
					},
				],
			},
			{
				path: '',
				pathMatch: 'full',
				redirectTo: 'claim-book',
			},
		],
	},
	{
		path: '',
		redirectTo: 'cva',
		pathMatch: 'full',
	},
];
