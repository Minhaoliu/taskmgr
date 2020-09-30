import { ServicesModule } from './../services/services.module';
import { SharedModule } from './../shared/shared.module';
import { loadSvgRResources } from './../utils/svg.util';
import { NgModule, SkipSelf, Optional } from '@angular/core';
import { MdIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import 'hammerjs';
import 'rxjs/add/operator/take';

@NgModule({
  imports: [
    HttpModule,
    BrowserAnimationsModule,
    SharedModule,
    ServicesModule.forRoot(),
    AppRoutingModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AppRoutingModule
  ],
  providers: [
    { provide: 'BASE_CONFIG', useValue: 'http://localhost:3000' }
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parent: CoreModule,
    ir: MdIconRegistry,
    ds: DomSanitizer
  ) {
    if (parent) {
      throw new ErrorEvent('模块已经存在，不能再次加载！');
    }
    loadSvgRResources(ir, ds);
  }
}
