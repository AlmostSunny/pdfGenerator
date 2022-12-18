import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-download-pdf',
  templateUrl: './download-pdf.page.html',
  styleUrls: ['./download-pdf.page.scss'],
})
export class DownloadPDFPage implements OnInit {

  constructor(private router: Router) { 

  }

  ngOnInit() {
  }
  generatePDF(){
    
    //get data from sql lite
    //generate pdf file

  }
  downloadPDF(){
      this.router.navigate(['downloader'])
    
      //call generatePDF function
      //start downloading generated PDF

    

  }
}
