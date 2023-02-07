import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GifhyService } from 'src/app/services/gifhy.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {

  
  term:string="";
  gifsData: any[] = [];

  constructor(private Srv: GifhyService, private router:Router) {}

  ngOnInit(): void {
    this.search();
  }

  search() {
    if (this.term) {
      this.Srv.searchGifs(this.term);
  }
}
}
