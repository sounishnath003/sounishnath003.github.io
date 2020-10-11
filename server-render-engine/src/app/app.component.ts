import {
  Product,
  ProductGeneratorService,
} from './services/product-generator.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public products: Product[];
  public totalValue: number = 0;
  public today: string = new Date().toLocaleDateString();
  public costOthers: number = 0;
  public costCosmetics: number = 0;

  constructor(private productGenerator: ProductGeneratorService) {}

  ngOnInit(): void {
    this.getAllProducts();
    this.costOthers = this.productGenerator.randomPriceOthes();
    this.costCosmetics = this.productGenerator.randomPriceCosmetics();

    setTimeout(() => {
      this.totalValue = this.calcNetTotal();
    }, 690);
  }

  private getAllProducts = () => {
    this.products = this.productGenerator.getAllProducts();
  };

  public feedData = () => {
    this.products = this.productGenerator.refreshProducts();
  };

  public calculateTotal(quantity: number, rate: number): number {
    return quantity * rate;
  }

  public calcNetTotal = () => {
    let totall: number = this.costCosmetics + this.costOthers;
    for (const product of this.products) {
      totall += product.quantity * product.rate;
    }
    return totall;
  };

  public convertPDF = (divid) => {
    this.productGenerator.convertHTMLToPDF(divid);
  };
}
