import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';



@Injectable()
export class KebabService {
  static BASE_URL: string = 'http://localhost:3000/'
  constructor(private http: HttpClient) {}

    getKebabs() {
      return this.http.get('http://localhost:3000/kebabList').pipe(map(data => {
        return data;
      } ));
    }
    addKebab(kebabName:string, kebabPrice:string) {
      const data = {
        name: kebabName,
        price: kebabPrice
      };
      return this.http.post('http://localhost:3000/kebabList', data).pipe(map(data => {
        return data;
      }));
    }
    changeKebab(id:number, name:string, price:number, img: string) {
    const data = {
      id: id,
      name: name,
      price: price,
      img: img
    };
    return this.http.put('http://localhost:3000/kebabList/'+ id, data).pipe(map(data => {
      return data;
    }));
    }
    deleteKebab(id) {
    return this.http.delete('http://localhost:3000/kebabList/'+ id).pipe(map(data => {
      return data;
    }));
    }
}
