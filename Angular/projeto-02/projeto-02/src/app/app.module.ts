import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { AppComponent } from './app.component';
import { ProductService } from './service/product.service';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ProductService]
})
export class AppModule { }