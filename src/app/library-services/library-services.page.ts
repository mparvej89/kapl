import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';
import { TranslateService } from '@ngx-translate/core';
import { UtilService } from '../services/util.service';

@Component({
  selector: 'app-library-services',
  templateUrl: './library-services.page.html',
  styleUrls: ['./library-services.page.scss'],
})
export class LibraryServicesPage implements OnInit {
  libraryServices:any[]=[];
  constructor(public apiService: ApiServiceService,
    private translate: TranslateService,
    private util: UtilService) { }

  ngOnInit() {
    this.getlibraryservices();
  }

  getlibraryservices() {
    this.util.showLoading();
    this.apiService.getLibraryservice().subscribe((res: any) => {
      if (res.response == "success") {
        this.libraryServices = res.data;
        this.util.hideLoading();  
      }
    }, err => {
      this.util.hideLoading();
      this.util.presentToast('Something went wrong!');
    })
  }

}
