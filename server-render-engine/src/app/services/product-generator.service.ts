import { Injectable } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf/dist/jspdf.es.min.js';

export interface Product {
  name: string;
  quantity: number;
  rate: number;
}

@Injectable({
  providedIn: 'root',
})
export class ProductGeneratorService {
  constructor() {}

  private generateRandom = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  private products: Product[] = [
    {
      name: 'Saree',
      quantity: this.generateRandom(60, 120),
      rate: 800,
    },
    {
      name: '-DO-',
      quantity: this.generateRandom(60, 110),
      rate: 1700,
    },
    {
      name: 'Churidar Pic',
      quantity: this.generateRandom(46, 98),
      rate: 1545,
    },
    {
      name: 'Fancy Saree',
      quantity: this.generateRandom(65, 86),
      rate: 1822,
    },
    {
      name: 'Churidar',
      quantity: this.generateRandom(70, 100),
      rate: 1800,
    },
    {
      name: 'Jeans',
      quantity: this.generateRandom(38, 50),
      rate: 1660,
    },
    {
      name: 'Kurti',
      quantity: this.generateRandom(60, 120),
      rate: 700,
    },
    {
      name: 'Bed Sheets',
      quantity: this.generateRandom(5, 11),
      rate: 1200,
    },
    {
      name: 'Sweaters',
      quantity: this.generateRandom(8, 24),
      rate: 850,
    },
    {
      name: 'Silk Saree',
      quantity: this.generateRandom(40, 68),
      rate: 2200,
    },
    {
      name: 'Blankets',
      quantity: this.generateRandom(4, 9),
      rate: 2000,
    },
    {
      name: 'Winter Garments',
      quantity: this.generateRandom(3, 20),
      rate: 760,
    },
  ];

  public getAllProducts(): Product[] {
    return this.products;
  }

  public refreshProducts(): any {
    setTimeout(() => {
      window.location.reload();
    }, 80);
  }

  public randomPriceCosmetics = () => Math.floor(Math.random() * 4000 + 5787);
  public randomPriceOthes = () => Math.floor(Math.random() * 4000 + 5787);

  public convertHTMLToPDF = (dvid) => {
    let da: string[] = new Date().toDateString().split(' ');
    let date: string = (da[1] + '-' + da[3]).toUpperCase();
    let content: HTMLElement = document.getElementById(dvid);
    html2canvas(content).then((canvas: HTMLCanvasElement) => {
      let imgData = canvas.toDataURL('image/png', 1.0);
      let imgHeight = (canvas.height * 208) / canvas.width;
      let doc = new jsPDF('p', 'mm', 'a4');
      doc.addImage(imgData, 0, 10, 208, imgHeight);
      doc.save(`${date}.pdf`);
    });
  };
}
