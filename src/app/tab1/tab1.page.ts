import { AfterContentChecked, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, SwiperOptions, Zoom } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import { ApiServiceService } from '../services/api-service.service';
import { Route, Router } from '@angular/router';
import { UtilService } from '../services/util.service';
SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom]);

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class Tab1Page implements AfterContentChecked, OnInit {
  @ViewChild('swiper') swiper: SwiperComponent;
  config: SwiperOptions = {
    slidesPerView: 'auto',
    pagination: true,
    autoplay: true
  }

  configLatestNews: SwiperOptions = {
    slidesPerView: 2.5,
    pagination: false,
    autoplay: true
  }
  slideBanners: any[] = [
    { url: '../../assets/banner.jpeg' },
    { url: '../../assets/banner1.jpeg' },
    { url: '../../assets/banner.jpeg' },
    { url: '../../assets/banner1.jpeg' }
  ]
  latestNews: any[] = [];
  segmentModel = "ESERVICE";
  constructor(
    private translate: TranslateService,
    private apiService: ApiServiceService,
    private router: Router,
    private util:UtilService
  ) { }

  ionViewWillEnter() {

  }

  ngOnInit() {
    this.getLatestNews();
  }

  ngAfterContentChecked() {
    if (this.swiper) {
      this.swiper.updateSwiper({});
    }

  }

  segmentChanged(event) {
    console.log(this.segmentModel);
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

  seeAllNews() {
    this.router.navigate(['./tabs/tab3']);
  }
  eSerice(){
    this.router.navigate(['./tabs/e-service']);
  }
  libraryPublication(){
    this.router.navigate(['./tabs/library-services']);
  }

}
