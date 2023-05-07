import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CommonService } from './shared/common-service.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: 'tabs/tab1', icon: '../assets/icon/home.svg'},
    { title: 'My E-Service', url: 'tabs/e-service', icon: '../assets/icon/E-Service.svg'},
    { title: 'About Us', url: 'tabs/about-us', icon: '../assets/icon/aboutus.svg'},
    { title: 'Library Branches', url: 'tabs/library-branches', icon: '../assets/icon/library-branches.svg'},
    { title: 'Library Services', url: 'tabs/library-services', icon: '../assets/icon/library-publications.svg'},
    { title: 'Cultural Projects', url: 'tabs/cultural-project', icon: '../assets/icon/cultural-projects.svg'},
    { title: 'Open Data', url: 'tabs/open-data', icon: '../assets/icon/open-data.svg'},
    { title: 'Settings', url: 'tabs/settings', icon: '../assets/icon/settings.svg'},
    { title: 'Contact Us', url: 'tabs/contact-us', icon: '../assets/icon/contactus.svg'},
    { title: 'Login / Signup', url: 'login', icon: '../assets/icon/login-signup.svg'},

  ];

  constructor(
    private translate: TranslateService,
    private commonService:CommonService,
    public router: Router

    ) {
    translate.addLangs(Array.from(this.commonService.languages.keys()));
    if (this.commonService.languages.has(localStorage.getItem('language'))) {
      translate.use(localStorage.getItem('language'));
    } else {
      this.translate.use(this.translate.defaultLang);
      localStorage.setItem('language', this.translate.currentLang);
    }

    console.log(this.translate.currentLang);
    

  }
}
