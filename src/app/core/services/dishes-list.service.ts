import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DishesListService {

    items = [];
    json;
    title = 'todo-app';
  
    url = 'https://cateringbackend.azurewebsites.net/dishes';
    constructor(private http: HttpClient) {
      this.http.get(this.url).toPromise().then(data => {
        console.log(data);
        for (let name in data) {
          if (data.hasOwnProperty(name)) {
            this.items.push(data[name]);
          }
        }
      });
    }

   /* getRequestMenu(http) {
      this.http.get(this.url).toPromise().then(data => {
        console.log(data);
        for (let name in data) {
          if (data.hasOwnProperty(name)) {
            this.items.push(data[name]);
          }
        }
      });*/

}
