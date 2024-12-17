import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../Models/User';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor(private http: HttpClient) { }
    // ExpressJS:
    // mainUrl = "http://localhost:3000/users"

    // InMem:
    mainUrl = "api/person";

    get<T>(): Observable<T[]> {
        const fullUrl: string = `${this.mainUrl}`;
        return this.http.get<T[]>(fullUrl);
    }

    create<T>(body: any): Observable<T[]> {
        const fullUrl: string = `${this.mainUrl}`;
        return this.http.post<T[]>(fullUrl, body);
    }

    getById<T>(id: string): Observable<T> {
        const fullUrl: string = `${this.mainUrl}/${id}`;
        return this.http.get<T>(fullUrl);
    }

    update<T>(id: string, body: any): Observable<T[]> {
        const fullUrl: string = `${this.mainUrl}/${id}`;
        return this.http.put<T[]>(fullUrl, body);
    }

    delete<T>(id: string): Observable<T> {
        const fullUrl: string = `${this.mainUrl}/${id}`;
        return this.http.delete<T>(fullUrl);
    }
}
