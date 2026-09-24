import { Component, model } from '@angular/core';
import { email, form, FormField, FormValueControl, required } from '@angular/forms/signals';
import { TuiError, TuiInput } from '@taiga-ui/core';
import { IContactInformationCva } from '../../models/cva-model.interface';

const REQUIRED_MESSAGE = 'Este campo es requerido';

@Component({
	selector: 'app-contact-information-cva',
	imports: [TuiInput, FormField, TuiError],
	templateUrl: './contact-information-cva.component.html',
	styleUrl: './contact-information-cva.component.scss',
})
export class ContactInformationCvaComponent implements FormValueControl<IContactInformationCva> {
	readonly value = model<IContactInformationCva>({
		email: '',
		phone: '',
		address: '',
	});

	protected readonly form = form(this.value, (path) => {
		required(path.email, { message: REQUIRED_MESSAGE });
		email(path.email, { message: 'Ingrese un email valido' });
		required(path.phone, { message: REQUIRED_MESSAGE });
		required(path.address, { message: REQUIRED_MESSAGE });
	});
}
