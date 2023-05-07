import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';
import { TranslateService } from '@ngx-translate/core';
import { UtilService } from '../services/util.service';

@Component({
  selector: 'app-e-service',
  templateUrl: './e-service.page.html',
  styleUrls: ['./e-service.page.scss'],
})
export class EServicePage implements OnInit {
  eservices:any[]=[];
  constructor(public apiService: ApiServiceService,
    private translate: TranslateService,
    private util: UtilService) { }

  ngOnInit() {
    this.getEservices();
  }

  getEservices() {
    this.util.showLoading();
    this.apiService.getEservice().subscribe((res: any) => {
      if (res.response == "success") {
        this.eservices = res.data;
        this.util.hideLoading(); 
      }
    }, err => {
      this.util.hideLoading();
      this.util.presentToast('Something went wrong!');
    })
  }

}
