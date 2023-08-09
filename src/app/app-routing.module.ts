import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPostComponent } from './components/admin-post/admin-post.component';
import { ForStartComponent } from './components/for-start/for-start.component';
import { HomeStructureComponent } from './components/home-structure/home-structure.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { ContentComponent } from './components/content/content.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeStructureComponent },
  { path: 'admin-post', component: AdminPostComponent},
  { path: 'login', component:LoginPageComponent},
  { path: 'content', component:ContentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
