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
      quantity: this.generateRandom(100, 170),
      rate: 1350,
    },
    {
      name: '-DO-',
      quantity: this.generateRandom(110, 180),
      rate: 2050,
    },
    {
      name: 'Churidar Pic',
      quantity: this.generateRandom(100, 160),
      rate: 1479,
    },
    {
      name: 'Fancy Saree',
      quantity: this.generateRandom(90, 140),
      rate: 1780,
    },
    {
      name: 'Churidar',
      quantity: this.generateRandom(85, 140),
      rate: 1859,
    },
    {
      name: 'Jeans',
      quantity: this.generateRandom(60, 90),
      rate: 1740,
    },
    {
      name: 'Kurti',
      quantity: this.generateRandom(80, 140),
      rate: 890,
    },
    {
      name: 'Bed Sheets',
      quantity: this.generateRandom(10, 14),
      rate: 1000,
    },
    {
      name: 'Sweaters',
      quantity: this.generateRandom(40, 62),
      rate: 820,
    },
    {
      name: 'Silk Saree',
      quantity: this.generateRandom(52, 64),
      rate: 2400,
    },
    {
      name: 'Blankets',
      quantity: this.generateRandom(8, 18),
      rate: 2470,
    },
    {
      name: 'Winter Garments',
      quantity: this.generateRandom(13, 28),
      rate: 790,
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
