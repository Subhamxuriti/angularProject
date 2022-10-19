import { Component, } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-invoice-list';
  data:Array<any>;

   searchText= '';
   constructor(){
    this.data =[
      {
          invoice_number: "12345",
          uploadedby: "NEW SHANTHI UPAHAR",
          totalamount: "50000",
          gst: "1200",
          status: "PENDING",
          invoicedue: "22/08/2022",
          saving: "9899",
          outstandingamount: "5677728"
      },
      {
          invoice_number: "455526",
          uploadedby: "NEW SHANTHI UPAHAR",
          totalamount: "50000",
          gst: "1200",
          status: "PENDING",
          invoicedue: "22/08/2022",
          saving: "9899",
          outstandingamount: "5677728"
      },
      {
          invoice_number: "12345",
          uploadedby: "NEW SHANTHI UPAHAR",
          totalamount: "50000",
          gst: "1200",
          status: "PENDING",
          invoicedue: "22/08/2022",
          saving: "9899",
          outstandingamount: "5677728"
      },
      {
          invoice_number: "12345",
          uploadedby: "NEW SHANTHI UPAHAR",
          totalamount: "50000",
          gst: "1200",
          status: "PENDING",
          invoicedue: "22/08/2022",
          saving: "9899",
          outstandingamount: "5677728"
      },
      {
          invoice_number: "12345",
          uploadedby: "NEW SHANTHI UPAHAR",
          totalamount: "50000",
          gst: "1200",
          status: "PENDING",
          invoicedue: "22/08/2022",
          saving: "9899",
          outstandingamount: "5677728"
      },
      {
          invoice_number: "12345",
          uploadedby: "NEW SHANTHI UPAHAR",
          totalamount: "50000",
          gst: "1200",
          status: "PENDING",
          invoicedue: "22/08/2022",
          saving: "9899",
          outstandingamount: "5677728"
      },
     
    
    ]
   }
}
