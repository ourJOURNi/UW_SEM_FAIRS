import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})

export class PhotoService {

  BACKEND_URL = environment.url;
  constructor(
    private http: HttpClient
  ) {

  }
   boothPartnerLogo(logo) {
    console.log('both partner uploading');
    console.log(logo);
    return this.http.post(`${this.BACKEND_URL}/api/photo/upload-booth-partner-logo`,
    logo);

   }

}
