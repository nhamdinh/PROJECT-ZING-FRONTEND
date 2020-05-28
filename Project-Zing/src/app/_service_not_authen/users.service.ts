import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Users} from './users';


@Injectable({
    providedIn: 'root'
})
export class UsersService {
    url = 'http://localhost:8080/';
    message = '';

    constructor(private httpClient: HttpClient) {
    }

     saveUser(user: Users) {
        return this.httpClient.post(this.url + 'api/register', user);
    }
}
