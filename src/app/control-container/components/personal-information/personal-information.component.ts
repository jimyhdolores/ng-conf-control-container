import { Component, inject, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ControlContainer, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TuiError, TuiInput } from '@taiga-ui/core';
@Component({
    selector: 'app-personal-information',
    imports: [TuiInput, ReactiveFormsModule, TuiError],
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
