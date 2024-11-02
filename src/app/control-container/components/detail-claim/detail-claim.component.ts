import { Component, inject } from '@angular/core';
import { ControlContainer, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TuiInputModule, TuiTextareaModule } from '@taiga-ui/legacy';
@Component({
	selector: 'app-detail-claim',
	standalone: true,
	imports: [TuiInputModule, TuiTextareaModule, ReactiveFormsModule],
	templateUrl: './detail-claim.component.html',
	styleUrl: './detail-claim.component.scss',
})
export class DetailClaimComponent {
	private readonly controlContainer = inject(ControlContainer);
	form?: FormGroup;

	ngOnInit(): void {
		this.form = this.controlContainer.control?.get('detailClaim') as FormGroup;
	}
}
