import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  postData = {
    test: 'my content',
  };
  
  title = 'todo-app';
  /*items = [];
    json;
  url = 'https://cateringbackend.azurewebsites.net/dishes';

  constructor(private http: HttpClient) {
    this.http.get(this.url).toPromise().then(data => {
      console.log(data);
      for (let x in data){
        if (data.hasOwnProperty(x)) {
          this.items.push(data[x]);
        }
      }
    });
  }*/
}
