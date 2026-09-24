import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideTaiga } from '@taiga-ui/core';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
	providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideTaiga()],
};
