import { Component, model } from '@angular/core';
import { form, FormField, FormValueControl, required } from '@angular/forms/signals';
import { TuiError, TuiInput } from '@taiga-ui/core';
import { TuiTextarea } from '@taiga-ui/kit';
import { IDetailClaimCva } from '../../models/cva-model.interface';

const REQUIRED_MESSAGE = 'Este campo es requerido';

@Component({
	selector: 'app-detail-claim-cva',
	imports: [TuiInput, TuiTextarea, FormField, TuiError],
	templateUrl: './detail-claim-cva.component.html',
	styleUrl: './detail-claim-cva.component.scss',
})
export class DetailClaimCvaComponent implements FormValueControl<IDetailClaimCva> {
	readonly value = model<IDetailClaimCva>({
		product: '',
		claim: '',
	});

	protected readonly form = form(this.value, (path) => {
		required(path.product, { message: REQUIRED_MESSAGE });
		required(path.claim, { message: REQUIRED_MESSAGE });
	});
}
