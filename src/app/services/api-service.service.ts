import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) {

  }

  signUp(data) {
    /* const headers = new HttpHeaders();
    headers.set('Access-Control-Allow-Origin', '*');
    headers.set('Access-Control-Allow-Headers', 'Content-Type');
    headers.set('Access-Control-Allow-Methods', 'GET, POST');
    headers.set('Content-Type', 'application/json');
    const requestOptions = { headers: headers }; */
    return this.http.post(environment.baseUrl + '?type=signup', data);
  }

  getStatus() {
    //return this.http.get(environment.apiUrl + `v1/task/status-codes`);
    return this.http.get(environment.baseUrl + `?type=our-team`);
  }

  acceptTask(taskModel, id) {
    //return this.http.post(environment.apiUrl + `v1/tasks/approve/${id}`, taskModel);
  }

  getLatestNews() {
    return this.http.get(environment.baseUrl + `?type=news`);
  }
  getOurTeam() {
    return this.http.get(environment.baseUrl + `?type=our-team`);
  }
  getEservice(){
    return this.http.get(environment.baseUrl + `?type=e-services`);
  }
  getLibraryservice(){
    return this.http.get(environment.baseUrl + `?type=library-services`);
  }
  getLibraryBranches(){
    return this.http.get(environment.baseUrl + `?type=branches`);
  }
}
