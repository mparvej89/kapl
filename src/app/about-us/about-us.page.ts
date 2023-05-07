import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';
import { TranslateService } from '@ngx-translate/core';
import { UtilService } from '../services/util.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.page.html',
  styleUrls: ['./about-us.page.scss'],
})
export class AboutUsPage implements OnInit {
  ourTeam: any[] = [];
  constructor(public apiService: ApiServiceService,
    private translate: TranslateService,
    private util: UtilService) { }

  ngOnInit() {
    this.getAboutDetails();
  }

  getAboutDetails() {
    this.util.showLoading();
    this.apiService.getOurTeam().subscribe((res: any) => {
      if (res.response == "success") {
        this.ourTeam = res.data;
        this.util.hideLoading();
      }
    }, err => {
      this.util.hideLoading();
      this.util.presentToast('Something went wrong!');
    })
  }

}
