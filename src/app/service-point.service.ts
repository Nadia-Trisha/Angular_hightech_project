import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ServicePointService {

  baseUrl = "http://localhost/anguler/hightech_project/Project/api"

  constructor(private http: HttpClient) {}

  getAll(){
    return this.http.get(`${this.baseUrl}/service.php`).pipe(
      map((res:any) => {
        return res['data'];
      })

      );
    
  }
}
