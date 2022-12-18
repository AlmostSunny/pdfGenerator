import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-user-info',
  templateUrl: './get-user-info.page.html',
  styleUrls: ['./get-user-info.page.scss'],
})
export class GetUserInfoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {    
  }
  getUserInfo(){
    this.router.navigate(['download-pdf']);

    //export user data to sql lite
  }

}
