import { AsyncPipe } from '@angular/common';
import { Component, inject, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ControlContainer, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TuiError, TuiLabel } from '@taiga-ui/core';
import { TuiFieldErrorPipe } from '@taiga-ui/kit';
import { TuiInputModule } from '@taiga-ui/legacy';
@Component({
    selector: 'app-personal-information',
    imports: [TuiInputModule, ReactiveFormsModule, TuiFieldErrorPipe, TuiError, TuiLabel, AsyncPipe],
    templateUrl: './personal-information.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './personal-information.component.scss'
})
export class PersonalInformationComponent implements OnInit {
	private readonly controlContainer = inject(ControlContainer);
	form?: FormGroup;

	ngOnInit(): void {
		this.form = this.controlContainer.control?.get('personalInformation') as FormGroup;
	}
}
