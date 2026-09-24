import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TuiButton } from '@taiga-ui/core';

@Component({
    selector: 'app-control-container',
    template: `
		<h1>Control Container</h1>
		<button size="s" tuiButton type="submit" appearance="accent" routerLink="/control-container">example 1</button>
		<button size="s" tuiButton type="submit" appearance="accent" routerLink="/control-container/claim-book-step">
			example step
		</button>

		<router-outlet />
	`,
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [RouterOutlet, TuiButton, RouterLink]
})
export class ControlContainerComponent implements OnInit {
	constructor() {}

	ngOnInit() {}
}
