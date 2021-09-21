import { Injectable } from "@angular/core";
import { apiClass } from "../apiClass";

@Injectable({
  providedIn: 'root'
})
export class UserApi extends apiClass {
  http=new apiClass().init();
  
  async getAll() {
    return await this.http.axios.get(this.http.url + 'users');
  }

  async get(id:string) {
    return await this.http.axios.get(this.http.url + `users/${id}`);
  }

  async put(id:string,data:any) {
    return await this.http.axios.patch(this.http.url + `users/${id}`,data);
  }

  async remove(id:string) {
    return await this.http.axios.delete(this.http.url + `users/${id}`);
  }

  async post(data:any) {
    return await this.http.axios.post(this.http.url + `users`,data);
  }
}