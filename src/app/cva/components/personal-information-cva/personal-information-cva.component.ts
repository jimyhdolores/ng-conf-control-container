import { Component, model } from '@angular/core';
import { form, FormField, FormValueControl, minLength, required } from '@angular/forms/signals';
import { TuiError, TuiInput } from '@taiga-ui/core';
import { IPersonalInformationCva } from '../../models/cva-model.interface';

const REQUIRED_MESSAGE = 'Este campo es requerido';

@Component({
	selector: 'app-personal-information-cva',
	imports: [TuiInput, FormField, TuiError],
	templateUrl: './personal-information-cva.component.html',
	styleUrl: './personal-information-cva.component.scss',
})
export class PersonalInformationCvaComponent implements FormValueControl<IPersonalInformationCva> {
	readonly value = model<IPersonalInformationCva>({
		names: '',
		paternalSurname: '',
		maternalSurname: '',
		dni: '',
	});

	protected readonly form = form(this.value, (path) => {
		required(path.names, { message: REQUIRED_MESSAGE });
		required(path.paternalSurname, { message: REQUIRED_MESSAGE });
		required(path.maternalSurname, { message: REQUIRED_MESSAGE });
		required(path.dni, { message: REQUIRED_MESSAGE });
		minLength(path.dni, 8, { message: 'Logitud minima — 8' });
	});
}
