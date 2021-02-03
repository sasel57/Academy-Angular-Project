import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { FullLayoutComponent } from './full-layout/full-layout.component';
import { MenuComponent } from './menu/menu.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FooterComponent, FullLayoutComponent , MenuComponent, PageNotFoundComponent ]
})
export class LayoutModule { }
