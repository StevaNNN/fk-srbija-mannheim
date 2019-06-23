import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  constructor(private httpClient: HttpClient) {
  }

  public getEvents() {
    const url = environment.server_url + 'sportspress/v2/events';
    return this.httpClient.get(url);
  }
}
