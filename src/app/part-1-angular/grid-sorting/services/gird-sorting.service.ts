import { Injectable } from '@angular/core';
import { ISortData } from '../models/grid-sorting.interface';

@Injectable({
  providedIn: 'root',
})
export class GirdSortingService {
  sortData: ISortData[] = [
    {
      OrderID: 10524,
      SaleAmount: 3192.65,
      CategoryName: 'Beverages',
      CompanyName: 'Berglunds snabbköp',
      ShipCountry: 'France',
      ShippedDate: new Date('1997-05-07T00:00:00Z'),
    },
    {
      OrderID: 10672,
      SaleAmount: 3815.25,
      CategoryName: 'Beverages',
      CompanyName: 'Berglunds snabbköp',
      ShipCountry: 'Germany',
      ShippedDate: new Date('1997-09-26T00:00:00Z'),
    },
    {
      OrderID: 10801,
      SaleAmount: 3026.85,
      CategoryName: 'Beverages',
      CompanyName: 'Bólido Comidas preparadas',
      ShipCountry: 'Brazil',
      ShippedDate: new Date('1997-12-31T00:00:00Z'),
    },
    {
      OrderID: 10511,
      SaleAmount: 2550.0,
      CategoryName: 'Beverages',
      CompanyName: "Bon app'",
      ShipCountry: 'France',
      ShippedDate: new Date('1997-04-21T00:00:00Z'),
    },
    {
      OrderID: 10742,
      SaleAmount: 3118.0,
      CategoryName: 'Beverages',
      CompanyName: 'Bottom-Dollar Markets',
      ShipCountry: 'Belgium',
      ShippedDate: new Date('1997-11-18T00:00:00Z'),
    },
    {
      OrderID: 10400,
      SaleAmount: 3063.0,
      CategoryName: 'Beverages',
      CompanyName: 'Eastern Connection',
      ShipCountry: 'Brazil',
      ShippedDate: new Date('1997-01-16T00:00:00Z'),
    },
    {
      OrderID: 10402,
      SaleAmount: 2713.5,
      CategoryName: 'Beverages',
      CompanyName: 'Ernst Handel',
      ShipCountry: 'Switzerland',
      ShippedDate: new Date('1997-01-10T00:00:00Z'),
    },
    {
      OrderID: 10430,
      SaleAmount: 4899.2,
      CategoryName: 'Beverages',
      CompanyName: 'Ernst Handel',
      ShipCountry: 'Switzerland',
      ShippedDate: new Date('1997-02-03T00:00:00Z'),
    },
    {
      OrderID: 10514,
      SaleAmount: 8623.45,
      CategoryName: 'Beverages',
      CompanyName: 'Ernst Handel',
      ShipCountry: 'Brazil',
      ShippedDate: new Date('1997-05-16T00:00:00Z'),
    },
    {
      OrderID: 10595,
      SaleAmount: 4725.0,
      CategoryName: 'Beverages',
      CompanyName: 'Ernst Handel',
      ShipCountry: 'Venezuela',
      ShippedDate: new Date('1997-07-14T00:00:00Z'),
    },
    {
      OrderID: 10633,
      SaleAmount: 5510.59,
      CategoryName: 'Beverages',
      CompanyName: 'Ernst Handel',
      ShipCountry: 'Austria',
      ShippedDate: new Date('1997-08-18T00:00:00Z'),
    },
    {
      OrderID: 10698,
      SaleAmount: 3436.45,
      CategoryName: 'Beverages',
      CompanyName: 'Ernst Handel',
      ShipCountry: 'Mexico',
      ShippedDate: new Date('1997-10-17T00:00:00Z'),
    },
    {
      OrderID: 10776,
      SaleAmount: 6635.27,
      CategoryName: 'Condiments',
      CompanyName: 'Ernst Handel',
      ShipCountry: 'Germany',
      ShippedDate: new Date('1997-12-18T00:00:00Z'),
    },
    {
      OrderID: 10634,
      SaleAmount: 4985.5,
      CategoryName: 'Condiments',
      CompanyName: 'Folies gourmandes',
      ShipCountry: 'Brazil',
      ShippedDate: new Date('1997-08-21T00:00:00Z'),
    },
    {
      OrderID: 10789,
      SaleAmount: 3687.0,
      CategoryName: 'Condiments',
      CompanyName: 'Folies gourmandes',
      ShipCountry: 'USA',
      ShippedDate: new Date('1997-12-31T00:00:00Z'),
    },
    {
      OrderID: 10561,
      SaleAmount: 2844.5,
      CategoryName: 'Condiments',
      CompanyName: 'Folk och fä HB',
      ShipCountry: 'Austria',
      ShippedDate: new Date('1997-06-09T00:00:00Z'),
    },
    {
      OrderID: 10703,
      SaleAmount: 2545.0,
      CategoryName: 'Condiments',
      CompanyName: 'Folk och fä HB',
      ShipCountry: 'Sweden',
      ShippedDate: new Date('1997-10-20T00:00:00Z'),
    },
    {
      OrderID: 10762,
      SaleAmount: 4337.0,
      CategoryName: 'Condiments',
      CompanyName: 'Folk och fä HB',
      ShipCountry: 'France',
      ShippedDate: new Date('1997-12-09T00:00:00Z'),
    },
    {
      OrderID: 10629,
      SaleAmount: 2775.05,
      CategoryName: 'Condiments',
      CompanyName: 'Godos Cocina Típica',
      ShipCountry: 'Finland',
      ShippedDate: new Date('1997-08-20T00:00:00Z'),
    },
    {
      OrderID: 10709,
      SaleAmount: 3424.0,
      CategoryName: 'Condiments',
      CompanyName: 'Gourmet Lanchonetes',
      ShipCountry: 'Germany',
      ShippedDate: new Date('1997-11-20T00:00:00Z'),
    },
    {
      OrderID: 10616,
      SaleAmount: 4807.01,
      CategoryName: 'Condiments',
      CompanyName: 'Great Lakes Food Market',
      ShipCountry: 'Venezuela',
      ShippedDate: new Date('1997-08-05T00:00:00Z'),
    },
    {
      OrderID: 10490,
      SaleAmount: 3163.2,
      CategoryName: 'Condiments',
      CompanyName: 'HILARION-Abastos',
      ShipCountry: 'USA',
      ShippedDate: new Date('1997-04-03T00:00:00Z'),
    },
    {
      OrderID: 10567,
      SaleAmount: 2519.0,
      CategoryName: 'Condiments',
      CompanyName: 'Hungry Owl All-Night Grocers',
      ShipCountry: 'Finland',
      ShippedDate: new Date('1997-06-17T00:00:00Z'),
    },
    {
      OrderID: 10687,
      SaleAmount: 4960.9,
      CategoryName: 'Condiments',
      CompanyName: 'Hungry Owl All-Night Grocers',
      ShipCountry: 'USA',
      ShippedDate: new Date('1997-10-30T00:00:00Z'),
    },
    {
      OrderID: 10701,
      SaleAmount: 2864.5,
      CategoryName: 'Confections',
      CompanyName: 'Hungry Owl All-Night Grocers',
      ShipCountry: 'USA',
      ShippedDate: new Date('1997-10-15T00:00:00Z'),
    },
    {
      OrderID: 10718,
      SaleAmount: 3463.0,
      CategoryName: 'Confections',
      CompanyName: 'Königlich Essen',
      ShipCountry: 'Germany',
      ShippedDate: new Date('1997-10-29T00:00:00Z'),
    },
    {
      OrderID: 10787,
      SaleAmount: 2622.76,
      CategoryName: 'Confections',
      CompanyName: "La maison d'Asie",
      ShipCountry: 'France',
      ShippedDate: new Date('1997-12-26T00:00:00Z'),
    },
    {
      OrderID: 10772,
      SaleAmount: 3603.22,
      CategoryName: 'Confections',
      CompanyName: 'Lehmanns Marktstand',
      ShipCountry: 'Italy',
      ShippedDate: new Date('1997-12-19T00:00:00Z'),
    },
    {
      OrderID: 10638,
      SaleAmount: 2720.05,
      CategoryName: 'Confections',
      CompanyName: 'LINO-Delicateses',
      ShipCountry: 'Mexico',
      ShippedDate: new Date('1997-09-01T00:00:00Z'),
    },
    {
      OrderID: 10760,
      SaleAmount: 2917.0,
      CategoryName: 'Confections',
      CompanyName: 'Maison Dewey',
      ShipCountry: 'Germany',
      ShippedDate: new Date('1997-12-10T00:00:00Z'),
    },
    {
      OrderID: 10424,
      SaleAmount: 9194.56,
      CategoryName: 'Confections',
      CompanyName: 'Mère Paillarde',
      ShipCountry: 'Sweden',
      ShippedDate: new Date('1997-01-27T00:00:00Z'),
    },
    {
      OrderID: 10605,
      SaleAmount: 4109.7,
      CategoryName: 'Confections',
      CompanyName: 'Mère Paillarde',
      ShipCountry: 'Germany',
      ShippedDate: new Date('1997-07-29T00:00:00Z'),
    },
    {
      OrderID: 10618,
      SaleAmount: 2697.5,
      CategoryName: 'Confections',
      CompanyName: 'Mère Paillarde',
      ShipCountry: 'Sweden',
      ShippedDate: new Date('1997-08-08T00:00:00Z'),
    },
    {
      OrderID: 10530,
      SaleAmount: 4180.0,
      CategoryName: 'Confections',
      CompanyName: 'Piccolo und mehr',
      ShipCountry: 'Spain',
      ShippedDate: new Date('1997-05-12T00:00:00Z'),
    },
    {
      OrderID: 10637,
      SaleAmount: 2761.94,
      CategoryName: 'Confections',
      CompanyName: 'Queen Cozinha',
      ShipCountry: 'Spain',
      ShippedDate: new Date('1997-08-26T00:00:00Z'),
    },
    {
      OrderID: 10451,
      SaleAmount: 3849.66,
      CategoryName: 'Confections',
      CompanyName: 'QUICK-Stop',
      ShipCountry: 'Venezuela',
      ShippedDate: new Date('1997-03-12T00:00:00Z'),
    },
    {
      OrderID: 10515,
      SaleAmount: 9921.3,
      CategoryName: 'Confections',
      CompanyName: 'QUICK-Stop',
      ShipCountry: 'Germany',
      ShippedDate: new Date('1997-05-23T00:00:00Z'),
    },
    {
      OrderID: 10540,
      SaleAmount: 10191.7,
      CategoryName: 'Dairy Product',
      CompanyName: 'QUICK-Stop',
      ShipCountry: 'Germany',
      ShippedDate: new Date('1997-06-13T00:00:00Z'),
    },
    {
      OrderID: 10549,
      SaleAmount: 3554.28,
      CategoryName: 'Dairy Product',
      CompanyName: 'QUICK-Stop',
      ShipCountry: 'Germany',
      ShippedDate: new Date('1997-05-30T00:00:00Z'),
    },
    {
      OrderID: 10588,
      SaleAmount: 3120.0,
      CategoryName: 'Dairy Product',
      CompanyName: 'QUICK-Stop',
      ShipCountry: 'Brazil',
      ShippedDate: new Date('1997-07-10T00:00:00Z'),
    },
    {
      OrderID: 10658,
      SaleAmount: 4464.6,
      CategoryName: 'Dairy Product',
      CompanyName: 'QUICK-Stop',
      ShipCountry: 'Italy',
      ShippedDate: new Date('1997-09-08T00:00:00Z'),
    },
    {
      OrderID: 10691,
      SaleAmount: 10164.8,
      CategoryName: 'Dairy Product',
      CompanyName: 'QUICK-Stop',
      ShipCountry: 'UK',
      ShippedDate: new Date('1997-10-22T00:00:00Z'),
    },
    {
      OrderID: 10694,
      SaleAmount: 4825.0,
      CategoryName: 'Dairy Product',
      CompanyName: 'QUICK-Stop',
      ShipCountry: 'Brazil',
      ShippedDate: new Date('1997-10-09T00:00:00Z'),
    },
    {
      OrderID: 10745,
      SaleAmount: 4529.8,
      CategoryName: 'Dairy Product',
      CompanyName: 'QUICK-Stop',
      ShipCountry: 'Brazil',
      ShippedDate: new Date('1997-11-27T00:00:00Z'),
    },
    {
      OrderID: 10401,
      SaleAmount: 3868.6,
      CategoryName: 'Dairy Product',
      CompanyName: 'Rattlesnake Canyon Grocery',
      ShipCountry: 'Brazil',
      ShippedDate: new Date('1997-01-10T00:00:00Z'),
    },
    {
      OrderID: 10479,
      SaleAmount: 10495.6,
      CategoryName: 'Dairy Product',
      CompanyName: 'Rattlesnake Canyon Grocery',
      ShipCountry: 'Mexico',
      ShippedDate: new Date('1997-03-21T00:00:00Z'),
    },
    {
      OrderID: 10666,
      SaleAmount: 4666.94,
      CategoryName: 'Dairy Product',
      CompanyName: 'Richter Supermarkt',
      ShipCountry: 'USA',
      ShippedDate: new Date('1997-09-22T00:00:00Z'),
    },
    {
      OrderID: 10393,
      SaleAmount: 2556.95,
      CategoryName: 'Grains/Cereal',
      CompanyName: 'Save-a-lot Markets',
      ShipCountry: 'France',
      ShippedDate: new Date('1997-01-03T00:00:00Z'),
    },
    {
      OrderID: 10398,
      SaleAmount: 2505.6,
      CategoryName: 'Grains/Cereal',
      CompanyName: 'Save-a-lot Markets',
      ShipCountry: 'Venezuela',
      ShippedDate: new Date('1997-01-09T00:00:00Z'),
    },
    {
      OrderID: 10440,
      SaleAmount: 4924.14,
      CategoryName: 'Grains/Cereal',
      CompanyName: 'Save-a-lot Markets',
      ShipCountry: 'France',
      ShippedDate: new Date('1997-02-28T00:00:00Z'),
    },
    {
      OrderID: 10510,
      SaleAmount: 4707.54,
      CategoryName: 'Grains/Cereal',
      CompanyName: 'Save-a-lot Markets',
      ShipCountry: 'Ireland',
      ShippedDate: new Date('1997-04-28T00:00:00Z'),
    },
    {
      OrderID: 10555,
      SaleAmount: 2944.4,
      CategoryName: 'Grains/Cereal',
      CompanyName: 'Save-a-lot Markets',
      ShipCountry: 'Brazil',
      ShippedDate: new Date('1997-06-04T00:00:00Z'),
    },
    {
      OrderID: 10607,
      SaleAmount: 6475.4,
      CategoryName: 'Grains/Cereal',
      CompanyName: 'Save-a-lot Markets',
      ShipCountry: 'Italy',
      ShippedDate: new Date('1997-07-25T00:00:00Z'),
    },
    {
      OrderID: 10612,
      SaleAmount: 6375.0,
      CategoryName: 'Grains/Cereal',
      CompanyName: 'Save-a-lot Markets',
      ShipCountry: 'Germany',
      ShippedDate: new Date('1997-08-01T00:00:00Z'),
    },
    {
      OrderID: 10657,
      SaleAmount: 4371.6,
      CategoryName: 'Meat/Poultr',
      CompanyName: 'Save-a-lot Markets',
      ShipCountry: 'Belgium',
      ShippedDate: new Date('1997-09-15T00:00:00Z'),
    },
    {
      OrderID: 10678,
      SaleAmount: 5256.5,
      CategoryName: 'Meat/Poultr',
      CompanyName: 'Save-a-lot Markets',
      ShipCountry: 'Spain',
      ShippedDate: new Date('1997-10-16T00:00:00Z'),
    },
    {
      OrderID: 10711,
      SaleAmount: 4451.7,
      CategoryName: 'Meat/Poultr',
      CompanyName: 'Save-a-lot Markets',
      ShipCountry: 'Mexico',
      ShippedDate: new Date('1997-10-29T00:00:00Z'),
    },
    {
      OrderID: 10713,
      SaleAmount: 2827.9,
      CategoryName: 'Meat/Poultr',
      CompanyName: 'Save-a-lot Markets',
      ShipCountry: 'USA',
      ShippedDate: new Date('1997-10-24T00:00:00Z'),
    },
    {
      OrderID: 10757,
      SaleAmount: 3082.0,
      CategoryName: 'Meat/Poultr',
      CompanyName: 'Save-a-lot Markets',
      ShipCountry: 'Spain',
      ShippedDate: new Date('1997-12-15T00:00:00Z'),
    },
    {
      OrderID: 10417,
      SaleAmount: 11188.4,
      CategoryName: 'Meat/Poultr',
      CompanyName: 'Simons bistro',
      ShipCountry: 'USA',
      ShippedDate: new Date('1997-01-28T00:00:00Z'),
    },
    {
      OrderID: 10458,
      SaleAmount: 3891.0,
      CategoryName: 'Produce',
      CompanyName: 'Suprêmes délices',
      ShipCountry: 'Mexico',
      ShippedDate: new Date('1997-03-04T00:00:00Z'),
    },
    {
      OrderID: 10518,
      SaleAmount: 4150.05,
      CategoryName: 'Produce',
      CompanyName: 'Tortuga Restaurante',
      ShipCountry: 'Ireland',
      ShippedDate: new Date('1997-05-05T00:00:00Z'),
    },
    {
      OrderID: 10465,
      SaleAmount: 2518.0,
      CategoryName: 'Produce',
      CompanyName: 'Vaffeljernet',
      ShipCountry: 'USA',
      ShippedDate: new Date('1997-03-14T00:00:00Z'),
    },
    {
      OrderID: 10688,
      SaleAmount: 3160.6,
      CategoryName: 'Produce',
      CompanyName: 'Vaffeljernet',
      ShipCountry: 'France',
      ShippedDate: new Date('1997-10-07T00:00:00Z'),
    },
    {
      OrderID: 10546,
      SaleAmount: 2812.0,
      CategoryName: 'Produce',
      CompanyName: 'Victuailles en stock',
      ShipCountry: 'Germany',
      ShippedDate: new Date('1997-05-27T00:00:00Z'),
    },
    {
      OrderID: 10455,
      SaleAmount: 2684.0,
      CategoryName: 'Seafood',
      CompanyName: 'Wartian Herkku',
      ShipCountry: 'Germany',
      ShippedDate: new Date('1997-03-03T00:00:00Z'),
    },
  ];

  constructor() {}
}
