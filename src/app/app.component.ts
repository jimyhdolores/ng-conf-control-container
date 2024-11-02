import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TuiButton, TuiRoot } from '@taiga-ui/core';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, TuiButton, TuiRoot, RouterLink],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent {}
