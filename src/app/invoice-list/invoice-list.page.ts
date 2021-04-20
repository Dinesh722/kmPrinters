import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverComponentPage } from '../popover-component/popover-component.page';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.page.html',
  styleUrls: ['./invoice-list.page.scss'],
})
export class InvoiceListPage implements OnInit {

  constructor(
    public popoverController: PopoverController
  ) { }

  ngOnInit() {
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

}
