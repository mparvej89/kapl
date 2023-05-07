import { Injectable } from '@angular/core';
import { PopoverController, ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { from, fromEvent, Observable } from 'rxjs';
import { switchMap, take, tap } from 'rxjs/operators';
import { AppLanguage } from '../models/app-common-models';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  
  private appLanguages: Map<string, AppLanguage> = new Map([
    ['en', { text: 'English', code: 'en' }],
    ['ar', { text: 'Arabic', code: 'ar' }],
  ]);

  isManageAsideVisible = true;
  isManageAsideCollapsed = false; // collapsed by default
  showScheduleAside = false;
  
  isManageCreateTaskVisible:boolean;

  constructor(
    private toasterCtrl: ToastController,
    private popoverCtrl: PopoverController,
    private translate: TranslateService
    ) {}

  get languages(): Map<string, AppLanguage> {
    return this.appLanguages;
  }

 

  /**
   * to show toasters
   * msgTranslateKey: e.g. common-words.product-added-msg
   */
  createSimpleToaster(
    msgTranslateKey: string,
    classes: string[],
    theme: 'success' | 'failed'
  ): Observable<HTMLIonToastElement> {
    return from(
      this.toasterCtrl.create({
        message: msgTranslateKey,
        position: 'top',
        cssClass: ['', ...classes],
        duration: 2000,
        color: theme === 'success'? 'primary' : 'danger',
      })
    );
  }

  // get translations
  getTranslation(phrase: string){
   return this.translate.instant(phrase);
  }

  // get filename from blob url
  extractFilenameFromBlobUrl(blobUrl: string): string{
    return decodeURI(blobUrl.substring(blobUrl.indexOf('_')+1));
  }

  // heck to auto close select dropdown if we choose same item again
  autoCloseSelectDropdown() {
    let count = 0;
    fromEvent(document, 'click')
      .pipe(
        tap(e => count++),
        // takeWhile(e => count < 3),
        // filter(e => (e.target as Element).tagName === 'ION-RADIO')
        take(2),
        switchMap(e => from(this.popoverCtrl.getTop())),
      )
      .subscribe(e => {
        if (e) {
          e.dismiss();
        }
        count = 100;
      });
  }

  /**
   * auto scrolling the ion-segment
   *
   * @param event - ionChange event object
   */
  autoScrollIonSegment(event: any, segmentId?: string)  {
    document
      .querySelector(`ion-segment${segmentId?'#'+segmentId:''} > ion-segment-button[ng-reflect-value=${event.detail.value}]`)
      ?.scrollIntoView({ inline: 'start', behavior: 'smooth'});
  }
}
