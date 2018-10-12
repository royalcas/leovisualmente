import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IFunFactItem } from '../models/ifun-fact-item.model';

@Injectable({
  providedIn: 'root'
})
export class FunnyFactsService {
  data: IFunFactItem[] = [
    {
      text: 'Tofu',
      tags: ['food']
    },
    {
      text: 'Hateful Eight',
      tags: ['movies']
    },
    {
      text: 'El pintordebajo del lavaplatps',
      tags: ['books']
    },
    {
      text: 'Pesto',
      tags: ['food']
    },
    {
      text: 'Pizza',
      tags: ['food']
    },
    {
      text: 'Manderlay',
      tags: ['movies']
    },
    {
      text: 'Delirio',
      tags: ['book']
    },
    {
      text: 'Peppers',
      tags: ['food']
    },
    {
      text: '1984',
      tags: ['books']
    },
    {
      text: '100 hundredyears of sollitude',
      tags: ['books']
    },
    {
      text: 'Whiplash',
      tags: ['movies']
    },
    {
      text: '1984',
      tags: ['movies']
    }
  ];

  getAll(): Observable<IFunFactItem[]> {
    return of(this.data);
  }
}
