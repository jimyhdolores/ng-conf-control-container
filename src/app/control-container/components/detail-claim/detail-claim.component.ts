import { Component, inject } from '@angular/core';
import { FormField } from '@angular/forms/signals';
import { TuiInput } from '@taiga-ui/core';
import { TuiTextarea } from '@taiga-ui/kit';
import { ClaimBookForm } from '../../claim-book.form';
import { InputFileComponent } from '../input-file/input-file.component';

@Component({
	selector: 'app-detail-claim',
	imports: [TuiInput, TuiTextarea, FormField, InputFileComponent],
	templateUrl: './detail-claim.component.html',
	styleUrl: './detail-claim.component.scss',
})
export default class DetailClaimComponent {
	protected readonly form = inject(ClaimBookForm).form;
}
