import { Guid } from "typescript-guid";
export class PaymentDetail {          // ng g class shared/payment-detail --type=model --skipTests (For Create model in terminal)
  paymentDetailId: Guid = Guid.EMPTY;
  cardOwnerName: string = '';
  cardNumber: string = '';
  expirationDate: string = '';
  securityCode: string = '';
}
