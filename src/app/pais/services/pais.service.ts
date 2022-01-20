import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap} from 'rxjs';
import { Country } from '../interfaces/pais-interface';



@Injectable({
  providedIn: 'root'
})
export class PaisService {
private apiUrl:string='https://restcountries.com/v2';
private apiUrlCapital: string='https://restcountries.com/v2';

  constructor(private http:HttpClient) { }

  buscarPais(termino:string):Observable<Country[]>{
    const url=`${this.apiUrl}/name/${termino}`;
   return this.http.get<Country[]>(url);

}
buscarCapital(termino:string):Observable<Country[]>{

  const urlCapi=`${this.apiUrlCapital}/capital/${termino}`;
  return this.http.get<Country[]>(urlCapi);
}

getPaisPorAlpha(id:string):Observable<Country>{

  const url=`${this.apiUrl}/alpha/${id}`;
  return this.http.get<Country>(url);
}
buscarRegion(region:string):Observable<Country[]>{
  const url=`${this.apiUrl}/region/${region}??fields=name,capital,alpha2code,flag,population`;
  return this.http.get<Country[]>(url)
  .pipe(tap(console.log))
}

}
