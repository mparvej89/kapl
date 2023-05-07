import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';
import { TranslateService } from '@ngx-translate/core';
import { UtilService } from '../services/util.service';

@Component({
  selector: 'app-library-branches',
  templateUrl: './library-branches.page.html',
  styleUrls: ['./library-branches.page.scss'],
})
export class LibraryBranchesPage implements OnInit {
  libraryBranches:any[]=[];
  constructor(public apiService: ApiServiceService,
    private translate: TranslateService,
    private util: UtilService) { }

  ngOnInit() {
    this.getlibraryBranches();
  }

  getlibraryBranches() {
    this.util.showLoading();
    this.apiService.getLibraryBranches().subscribe((res: any) => {
      if (res.response == "success") {
        this.libraryBranches = res.data;
        this.util.hideLoading();
      }
    }, err => {
      this.util.hideLoading();
      this.util.presentToast('Something went wrong!');
    })
  }

}
