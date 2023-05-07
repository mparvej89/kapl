import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { UtilService } from '../services/util.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  language: string;
  constructor(
    private translate: TranslateService,
    private router: Router,
    private util:UtilService
  ) {
    this.language=localStorage.getItem('language');
    this.loginForm = new FormGroup({
      userName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() {
  }

  get errorControl() {
    return this.loginForm.controls;

  }
  getTranslation(phrase: string) {
    return this.translate.instant(phrase);
  }

  public changeLanguage(): void {
    localStorage.setItem('language', this.language);
    this.translate.use(this.language);
    
  }

  login() {
    //this.util.showLoading();
    this.router.navigate(['./tabs']);
    //this.util.hideLoading();
  }

  signup(){
    this.router.navigate(['./signup']);
  }

}
