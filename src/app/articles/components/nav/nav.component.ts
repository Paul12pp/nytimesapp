import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Path } from '@app/@core/structs/path.enum';
import { ArticlesService } from '@app/articles/services/articles.service';

@Component({
  selector: 'app-nav',
  templateUrl: '././nav.component.html',
  styleUrls: ['././nav.component.scss']
})
export class NavComponent implements OnInit {
  busqueda={
    termino:'',
    tipo:''
  }
  constructor(private services:ArticlesService,private router: Router) { }

  ngOnInit(): void {
  }
  goMost(){
    this.router.navigate(['/articles/', Path.ArticlesMostViewed])
  }
  goToday(){
    this.router.navigate(['/articles/', Path.ArticlesToday])
  }
  goLast(){
    this.router.navigate(['/articles/', Path.ArticlesLastSeven])
  }
  find(){
    console.log(this.busqueda)
    if(this.busqueda.tipo!=""){
      this.services.search(this.busqueda)
      .subscribe(data=>{
        console.log(data);
      })
    }
  }
}
