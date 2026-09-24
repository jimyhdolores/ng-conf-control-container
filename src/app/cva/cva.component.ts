import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-cva',
    template: '<router-outlet/>',
    imports: [RouterOutlet]
})
export class CvaComponent implements OnInit {
	constructor() {}

	ngOnInit() {}
}
