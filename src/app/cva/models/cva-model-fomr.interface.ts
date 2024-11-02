import { FormControl } from '@angular/forms';
import { IContactInformationCva, IDetailClaimCva, IPersonalInformationCva } from './cva-model.interface';

export interface IClaimCvaForm {
	personalInformation: FormControl<IPersonalInformationCva | null>;
	contactInformation: FormControl<IContactInformationCva | null>;
	detailClaim: FormControl<IDetailClaimCva | null>;
}
