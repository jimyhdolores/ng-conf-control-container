import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
	standalone: true,
	selector: 'app-cva',
	template: '<router-outlet/>',
	imports: [RouterOutlet],
})
export class CvaComponent implements OnInit {
	constructor() {}

	ngOnInit() {}
}
