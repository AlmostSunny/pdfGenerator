import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.page.html',
  styleUrls: ['./loader.page.scss'],
})
export class LoaderPage implements OnInit {

  // component Loader bude pouzivat Router
  constructor(private router: Router) { }

  ngOnInit() {

    setTimeout(() =>
    {
      this.router.navigate(['get-user-info']);
    },500)
    
  }

}
