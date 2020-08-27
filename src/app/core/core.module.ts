import { loadSvgRResources } from './../utils/svg.util';
import { NgModule, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdToolbarModule, MdIconModule, MdButtonModule } from '@angular/material';
import { MdIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    MdToolbarModule,
    MdIconModule,
    MdButtonModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
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
