import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { LandForge } from '../models/land-forges';


@Injectable({
  providedIn: 'root'
})
export class LandForgeService {
  private url = "LandForge";
  constructor(private http: HttpClient) { }
  public getLandForges() : Observable<LandForge[]>{
    
    return this.http.get<LandForge[]>(`${environment.apiUrl}/${this.url}`);
  }

  public updateforge(forge: LandForge) : Observable<LandForge[]>{
    
    return this.http.put<LandForge[]>(`${environment.apiUrl}/${this.url}`,forge);
  }

  
  public saveforge(forge: LandForge) : Observable<LandForge[]>{
    
    return this.http.post<LandForge[]>(`${environment.apiUrl}/${this.url}`,forge);
  }
  
  public deleteforge(forge: LandForge) : Observable<LandForge[]>{
    
    return this.http.delete<LandForge[]>(`${environment.apiUrl}/${this.url}/${forge.id}`);
  }
}
