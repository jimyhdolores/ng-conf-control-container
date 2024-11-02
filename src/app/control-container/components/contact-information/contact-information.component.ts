import { Component, inject } from '@angular/core';
import { ControlContainer, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TuiInputModule, TuiTextareaModule } from '@taiga-ui/legacy';
@Component({
	selector: 'app-contact-information',
	standalone: true,
	imports: [TuiInputModule, TuiTextareaModule, ReactiveFormsModule],
	templateUrl: './contact-information.component.html',
	styleUrl: './contact-information.component.scss',
})
export class ContactInformationComponent {
	private readonly controlContainer = inject(ControlContainer);
	form?: FormGroup;

	ngOnInit(): void {
		this.form = this.controlContainer.control?.get('contactInformation') as FormGroup;
	}
}
