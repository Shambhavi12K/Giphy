import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GifhyService } from 'src/app/services/gifhy.service';

@Component({
  selector: 'app-gif-box',
  templateUrl: './gif-box.component.html',
  styleUrls: ['./gif-box.component.scss'],
})
export class GifBoxComponent implements OnInit ,OnDestroy{
  gifsData: any[] = [];
  subscription!: Subscription;

  constructor(private Srv: GifhyService) {}
 

  ngOnInit(): void {
    this.Srv.getData();
    this.subscription=this.Srv.getGifs().subscribe((res: any) => {
      this.gifsData = res;
    });
  }

  ngOnDestroy(): void {
  this.subscription.unsubscribe();
  }
}
