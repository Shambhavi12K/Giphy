import { HttpClient, HttpClientModule, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
  
  export class GifhyService{
    // sub=new Subject();
    api_key=' Dst7UyI10lCaZeA9seXlAWA2qaXf0uGY';
    limit='10';
    q='${gifName}';

    headers=new HttpHeaders()
    .set('Content-Type','application/json')
    
    paramss=new HttpParams()
    .set('api_key','Dst7UyI10lCaZeA9seXlAWA2qaXf0uGY')
    .set('limit','10')

    paramst=new HttpParams()
    .set('api_key','Dst7UyI10lCaZeA9seXlAWA2qaXf0uGY')
    .set('limit','30')
    .set('q','${gifName}')
    
    gifs= new BehaviorSubject<any>([]);

    term= new BehaviorSubject<any>([]);
      constructor(private http:HttpClient) { }

      getData(){
       return this.http.get('https://api.giphy.com/v1/gifs/trending',{params:this.paramss})
       .subscribe((res:any)=>{
        console.log("Data",res);
        this.gifs.next(res.data);
       })
      }

      getGifs(){
        return this.gifs.asObservable();
      }

      searchGifs(gifName:string){
        // this.paramst.set('q',gifName);
        return this.http.get('https://api.giphy.com/v1/gifs/search',{params:this.paramst})
        .subscribe((res:any)=>{
        console.log("Searched",res);
          this.term.next(res.data);
         })
      }

}
