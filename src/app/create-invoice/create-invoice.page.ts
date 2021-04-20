import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverComponentPage } from '../popover-component/popover-component.page';

@Component({
  selector: 'app-create-invoice',
  templateUrl: './create-invoice.page.html',
  styleUrls: ['./create-invoice.page.scss'],
})
export class CreateInvoicePage implements OnInit {

  calculatedVal = {
    subTotal:0,
    taxAmount:0,
    total:0,
    amountDue:0
  }
  invoiceVal = {
    itemNo:null,
    itemName:null,
    hsn_sac:null,
    quality:null,
    price:null,
    tax:null,
    total:null
  }

  constructor(
    public popoverController: PopoverController
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
   this.reset();
  }

  reset() {
    this.calculatedVal = {
      subTotal:0,
      taxAmount:0,
      total:0,
      amountDue:0
    }
    this.invoiceVal = {
      itemNo:null,
      itemName:null,
      hsn_sac:null,
      quality:null,
      price:null,
      tax:null,
      total:null
    }
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponentPage,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

  test() {
    alert();
  }

  calculateValue(){
    console.log(this.invoiceVal);
  }

}
