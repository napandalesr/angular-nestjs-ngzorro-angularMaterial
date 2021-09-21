import { environment } from '../../../environments/environment';
import axios from 'axios';

export class apiClass {
  public url = environment.uri;

  init() {
    axios.defaults.baseURL=this.url;
    axios.defaults.headers.common['Content-Type'] = `application/json`;
    return {axios,url:this.url};
  }
}