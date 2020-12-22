import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McqComponent } from './mcq.component';

import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { McqService } from 'src/app/services/mcq.service';
import { AddtoFavService } from 'src/app/services/addto-fav.service';
//import { LoginServicesService } from 'src/app/login-services.service';


describe('McqComponent', () => {
  let component: McqComponent;
  let fixture: ComponentFixture<McqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [RouterTestingModule,HttpClientTestingModule],
      declarations: [ McqComponent ]
      // providers : [{provide : McqService},{provide : AddtoFavService}],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(McqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component.tick).toBeDefined();
  // });

  // it('enable should be false at starting', () => {
  //   expect(component.enable).toBeFalsy();
    
  // });

  // it('checkAnswer should be false at starting', () => {
  //   expect(component.checkAns).toBeFalsy();
    
  // });

  // it('correctans should be false at starting', () => {
  //   expect(component.correctans).toBeFalsy();
    
  // });

});


