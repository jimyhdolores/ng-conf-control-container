import { AsyncPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ControlContainer, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TuiError, TuiLabel } from '@taiga-ui/core';
import { TuiFieldErrorPipe } from '@taiga-ui/kit';
import { TuiInputModule } from '@taiga-ui/legacy';
@Component({
	selector: 'app-personal-information',
	standalone: true,
	imports: [TuiInputModule, ReactiveFormsModule, TuiFieldErrorPipe, TuiError, TuiLabel, AsyncPipe],
	templateUrl: './personal-information.component.html',
	styleUrl: './personal-information.component.scss',
})
export class PersonalInformationComponent implements OnInit {
	private readonly controlContainer = inject(ControlContainer);
	form?: FormGroup;

	ngOnInit(): void {
		this.form = this.controlContainer.control?.get('personalInformation') as FormGroup;
	}
}
