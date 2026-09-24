import { Routes } from '@angular/router';
import { ClaimBookPageComponent } from './control-container/pages/claim-book-page/claim-book-page.component';
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
		loadComponent: () => import('./control-container/control-container.component'),
		children: [
			{
				path: 'claim-book',
				component: ClaimBookPageComponent,
			},
			{
				path: 'claim-book-step',
				loadComponent: () => import('./control-container/pages/claim-book-step-page/claim-book-step-page.component'),
				children: [
					{
						path: 'personal-information',
						loadComponent: () =>
							import('./control-container/components/personal-information/personal-information.component'),
					},

					{
						path: 'contact-information',
						loadComponent: () =>
							import('./control-container/components/contact-information/contact-information.component'),
					},
					{
						path: 'detail-claim',
						loadComponent: () => import('./control-container/components/detail-claim/detail-claim.component'),
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
