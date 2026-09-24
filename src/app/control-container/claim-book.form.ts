import { computed, Injectable, signal } from '@angular/core';
import { email, form, maxLength, minLength, required } from '@angular/forms/signals';

export interface PersonalInformation {
	names: string;
	paternalSurname: string;
	maternalSurname: string;
	dni: string;
}

export interface ContactInformation {
	email: string;
	phone: string;
	address: string;
}

export interface DetailClaim {
	product: string;
	claim: string;
}

export interface ClaimBookModel {
	files: File[];
	personalInformation: PersonalInformation;
	contactInformation: ContactInformation;
	detailClaim: DetailClaim;
}

const REQUIRED_MESSAGE = 'Este campo es requerido';

export function createClaimBookModel(): ClaimBookModel {
	return {
		files: [],
		personalInformation: {
			names: '',
			paternalSurname: '',
			maternalSurname: '',
			dni: '',
		},
		contactInformation: {
			email: '',
			phone: '',
			address: '',
		},
		detailClaim: {
			product: '',
			claim: '',
		},
	};
}

@Injectable()
export class ClaimBookForm {
	readonly model = signal(createClaimBookModel());
	readonly rejectedFiles = signal<readonly File[]>([]);

	readonly form = form(this.model, (path) => {
		maxLength(path.files, 5, { message: 'Error: maximum limit - 5 files for upload' });

		required(path.personalInformation.names, { message: REQUIRED_MESSAGE });
		required(path.personalInformation.paternalSurname, { message: REQUIRED_MESSAGE });
		required(path.personalInformation.maternalSurname, { message: REQUIRED_MESSAGE });
		required(path.personalInformation.dni, { message: REQUIRED_MESSAGE });
		minLength(path.personalInformation.dni, 8, { message: 'Logitud minima — 8' });

		required(path.contactInformation.email, { message: REQUIRED_MESSAGE });
		email(path.contactInformation.email, { message: 'Ingrese un email valido' });
		required(path.contactInformation.phone, { message: REQUIRED_MESSAGE });
		required(path.contactInformation.address, { message: REQUIRED_MESSAGE });

		required(path.detailClaim.product, { message: REQUIRED_MESSAGE });
		required(path.detailClaim.claim, { message: REQUIRED_MESSAGE });
	});

	readonly value = computed(() => {
		const value = this.form().value();

		return { ...value, files: value.files.map(({ name, size }) => ({ name, size })) };
	});
}
