import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  constructor(private httpClient: HttpClient) {
  }

  public getPlayers() {
    const url = environment.server_url + 'sportspress/v2/players';
    return this.httpClient.get(url);
  }

  public getPlayer(id) {
    const url = `${environment.server_url}sportspress/v2/players/${id}`;
    return this.httpClient.get(url);
  }

  public getStaffs() {
    const url = environment.server_url + 'sportspress/v2/staff';
    return this.httpClient.get(url);
  }
}
