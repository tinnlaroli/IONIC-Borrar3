import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { IonicModule } from '@ionic/angular';
import { PostComponent } from './post/post.component';
import { HeaderComponent } from './header/header.component';
import { LayoutDiscoverComponent } from './layout-discover/layout-discover.component';



@NgModule({
  declarations: [
    LayoutComponent,
    PostComponent,
    HeaderComponent,
    LayoutDiscoverComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    LayoutComponent,
    PostComponent,
    HeaderComponent,
    LayoutDiscoverComponent
  ]
})
export class ComponentsModule { }
