import {Injectable} from '@angular/core';
import {Place} from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      'p1',
      'Manhattan Mansion',
      'In the heart of NYC',
      'https://www.berwickhistoricalsociety.org/cms-bhso/assets/_core/image/image%20(2).jpg',
      149.99
    ),
    new Place(
      'p2',
      'L\'Amour Tojours',
      'A romantic getaway',
      'https://www.victoriamag.com/wp-content/uploads/2018/05/1-2.jpg',
      189.99
    ),
    new Place('p3',
      'The Foggy Palace',
      'Not your average trip',
      'https://www.e-architect.co.uk/images/jpgs/australia/dome_house_mcr161208_johngollings_1.jpg',
      399.99
    )
  ];

  get places() {
    return [...this._places];
  }

  constructor() {
  }
}
