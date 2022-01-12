import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantService {

  // baseAPIURL = "http://localhost:5000/api/"
  baseAPIURL = "https://nodeinv-heroku.herokuapp.com/api/"
  constructor() { }

}