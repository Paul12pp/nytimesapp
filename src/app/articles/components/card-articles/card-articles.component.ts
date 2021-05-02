import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-articles',
  templateUrl: '././card-articles.component.html',
  styleUrls: ['././card-articles.component.scss']
})
export class CardArticlesComponent implements OnInit {
  @Input() data:any=[];
  @Input() type:string='common';
  urlImage:string='https://static01.nyt.com/';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goDetail(id:string){
    this.router.navigate([`/articles`,{id:id}])
  }

}
