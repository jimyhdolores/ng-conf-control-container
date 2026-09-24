import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-cva',
    template: '<router-outlet/>',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [RouterOutlet]
})
export class CvaComponent implements OnInit {
	constructor() {}

	ngOnInit() {}
}
