import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { AuthServiceService } from 'src/app/auth-service.service';



describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports : [ReactiveFormsModule,RouterTestingModule,HttpClientTestingModule],
      providers : [{provide : AuthServiceService}],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('components intial title',()=>{
    expect(component.title).toEqual('Login Here');
  })
  it('components intial state',()=>{
    expect(component.login).toBeDefined();
    expect(component.msg).toBeDefined();
    expect(component.loginForm).toBeDefined();
  })

  // it('component',()=>{
  //   expect(component.ngOnInit()).toHaveBeenCalledBefore(component.createForm);
  // })
  // login: boolean = true;
  // loginForm: any;
  // title: string = "";
  // model: any;
  // userData: any;
});
