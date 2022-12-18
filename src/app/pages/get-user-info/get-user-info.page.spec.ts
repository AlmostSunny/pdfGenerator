import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { GetUserInfoPage } from './get-user-info.page';

describe('GetUserInfoPage', () => {
  let component: GetUserInfoPage;
  let fixture: ComponentFixture<GetUserInfoPage>;
  let router: Router; 

  beforeEach(waitForAsync(() => {

    TestBed.configureTestingModule({
      declarations: [ GetUserInfoPage ],
      imports: [
        IonicModule.forRoot(),
        AppRoutingModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(GetUserInfoPage);
    router = TestBed.get(Router);

    component = fixture.componentInstance;

    fixture.detectChanges();
  }));

  it('should create', () => {

    spyOn(router, 'navigate');

    component.getUserInfo();

    expect(router.navigate).toHaveBeenCalledWith(['download-pdf']);

  });
});
