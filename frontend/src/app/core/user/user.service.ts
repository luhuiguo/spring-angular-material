import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

import { User } from './user';

@Injectable()
export class UserService {

  private resourceUrl = environment.apiUrl + 'api/users';

  constructor(private http: HttpClient) { }






}
