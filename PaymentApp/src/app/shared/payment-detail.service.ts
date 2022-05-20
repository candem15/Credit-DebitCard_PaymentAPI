import { Injectable } from '@angular/core'; // ng g s shared/payment-detail --skipTests (For Create Service)
import { PaymentDetail } from './payment-detail.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  constructor() { }

  formData: PaymentDetail = new PaymentDetail(); // Instance of data model
}
