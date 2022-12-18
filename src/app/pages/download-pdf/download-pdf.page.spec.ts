import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { DownloadPDFPage } from './download-pdf.page';
import { AppRoutingModule } from 'src/app/app-routing.module';

describe('DownloadPDFPage', () => {
  let component: DownloadPDFPage;
  let fixture: ComponentFixture<DownloadPDFPage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadPDFPage ],
      imports: [
        IonicModule.forRoot(),
        AppRoutingModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(DownloadPDFPage);
    router = TestBed.get(Router);

    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    spyOn(router, 'navigate');

    component.downloadPDF();

    expect(router.navigate).toHaveBeenCalledWith(['downloader']);

  });
});
