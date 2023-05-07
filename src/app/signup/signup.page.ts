import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ApiServiceService } from '../services/api-service.service';
import { UtilService } from '../services/util.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  signupForm: FormGroup;
  constructor(
    private translate: TranslateService,
    private router: Router,
    private apiService:ApiServiceService,
    private util:UtilService
  ) { 

    this.signupForm = new FormGroup({
      fullname:new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() {
  }

  get errorControl() {
    return this.signupForm.controls;

  }
  getTranslation(phrase: string) {
    return this.translate.instant(phrase);
  }

  login(){
    this.router.navigate(['./login']);
  }
  signUp(){
   this.util.showLoading();
    this.apiService.signUp(this.signupForm.value).subscribe(res=>{
      console.log(res);
      this.util.hideLoading();
    },err=>{
      this.util.hideLoading();
      this.util.presentToast('Something went wrong!');
    })
    
  }

}
