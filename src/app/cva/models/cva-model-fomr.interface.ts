import { IContactInformationCva, IDetailClaimCva, IPersonalInformationCva } from './cva-model.interface';

export interface IClaimCvaForm {
	personalInformation: IPersonalInformationCva;
	contactInformation: IContactInformationCva;
	detailClaim: IDetailClaimCva;
}
