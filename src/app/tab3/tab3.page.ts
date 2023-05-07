import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';
import { TranslateService } from '@ngx-translate/core';
import { UtilService } from '../services/util.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{
  latestNews:any[]=[];
  constructor(public apiService:ApiServiceService,
    private translate: TranslateService,
    private util:UtilService) {}

  ngOnInit() {
    this.getLatestNews();
  }
  getLatestNews() {
    this.util.showLoading();
    this.apiService.getLatestNews().subscribe((res: any) => {
      if (res.response == "success") {
        this.latestNews = res.data;
        this.util.hideLoading();
      }
    },err=>{
      this.util.hideLoading();
      this.util.presentToast('Something went wrong!');
    })
  }

}
