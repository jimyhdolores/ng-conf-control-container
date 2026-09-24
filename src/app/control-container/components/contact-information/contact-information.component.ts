import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { ControlContainer, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TuiInput } from '@taiga-ui/core';
@Component({
    selector: 'app-contact-information',
    imports: [TuiInput, ReactiveFormsModule],
    templateUrl: './contact-information.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './contact-information.component.scss'
})
export class ContactInformationComponent {
	private readonly controlContainer = inject(ControlContainer);
	form?: FormGroup;

	ngOnInit(): void {
		this.form = this.controlContainer.control?.get('contactInformation') as FormGroup;
	}
}
