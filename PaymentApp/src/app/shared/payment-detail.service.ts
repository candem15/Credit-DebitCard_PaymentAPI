import { Injectable } from '@angular/core'; // ng g s shared/payment-detail --skipTests (For Create Service)
import { PaymentDetail } from './payment-detail.model';
import { HttpClient } from "@angular/common/http";
import { Guid } from 'typescript-guid';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  constructor(private http: HttpClient) { }

  formData: PaymentDetail = new PaymentDetail(); // Instance of data model
  readonly baseUrl = 'http://localhost:5279/api/PaymentDetail';

  list: PaymentDetail[];

  postPaymentDetail() {
    return this.http.post(`${this.baseUrl}`,
      {
        cardOwnerName: this.formData.cardOwnerName,
        cardNumber: this.formData.cardNumber,
        securityCode: this.formData.securityCode,
        expirationDate: this.formData.expirationDate
      });
  }

  getPaymentDetails() { //For retrieve list of payment details from backend api
    this.http.get(this.baseUrl)
      .toPromise()
      .then(res => this.list = res as PaymentDetail[]);
  }

  putPaymentDetail() {
    return this.http.put(`${this.baseUrl}/${this.formData.paymentDetailId}`, this.formData);
  }

  refreshList() {
    this.http.get(this.baseUrl)
      .toPromise()
      .then(res => this.list = res as PaymentDetail[]);
  }

  deletePaymentDetail(id: Guid) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

}
