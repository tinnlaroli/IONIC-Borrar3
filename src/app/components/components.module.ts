import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { IonicModule } from '@ionic/angular';
import { PostComponent } from './post/post.component';



@NgModule({
  declarations: [
    LayoutComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    LayoutComponent,
    PostComponent
  ]
})
export class ComponentsModule { }
