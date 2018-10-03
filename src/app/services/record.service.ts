import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';

import { View } from '../shared/view.model';

@Injectable({
  providedIn: 'root'
})
export class RecordService {

  views: View[];
  constructor(private http:HttpClient) { }

  registerView(view){

      return this.http.post('views/record', view).pipe(map(res => res));
  }
  getViewList() {
    console.log("In get View List");
    return this.http.get('views/show');
  }
  deleteUser(_id: string) {
    return this.http.delete('views/del' + `/${_id}`);
  }

}
