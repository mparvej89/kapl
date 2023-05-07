import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'tab4',
        loadChildren: () => import('../tab4/tab4.module').then( m => m.Tab4PageModule)
      },
      {
        path: 'about-us',
        loadChildren: () => import('../about-us/about-us.module').then( m => m.AboutUsPageModule)
      },
      {
        path: 'library-branches',
        loadChildren: () => import('../library-branches/library-branches.module').then( m => m.LibraryBranchesPageModule)
      },
      {
        path: 'library-services',
        loadChildren: () => import('../library-services/library-services.module').then( m => m.LibraryServicesPageModule)
      },
      {
        path: 'cultural-project',
        loadChildren: () => import('../cultural-project/cultural-project.module').then( m => m.CulturalProjectPageModule)
      },
      {
        path: 'open-data',
        loadChildren: () => import('../open-data/open-data.module').then( m => m.OpenDataPageModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('../settings/settings.module').then( m => m.SettingsPageModule)
      },
      {
        path: 'contact-us',
        loadChildren: () => import('../contact-us/contact-us.module').then( m => m.ContactUsPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      },
      {
        path: 'e-service',
        loadChildren: () => import('../e-service/e-service.module').then( m => m.EServicePageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule { }
