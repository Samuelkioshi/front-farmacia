import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Router } from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { ProdutoComponent } from './app/produto/produto.component';
import { AdminComponent } from './app/admin/admin.component';
import { AppComponent } from './app/app.component';

const routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'produto/:id', component: ProdutoComponent },
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
  ]
});