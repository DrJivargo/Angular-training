import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {BlueComponent} from '../colorPages/blue/blue.component';
import {RedComponent} from '../colorPages/red/red.component';
import {GreenComponent} from '../colorPages/green/green.component';
import {YellowComponent} from '../colorPages/yellow/yellow.component';
import {CalculatorComponent} from './pages/calculator/calculator.component';
import {EmptyPageComponent} from './pages/empty-page/empty-page.component';
import {DecoratorsComponent} from './pages/decorators/decorators-page/decorators-page.component';
import {ChildDecoratorComponent} from './pages/decorators/child-decorator/child-decorator.component';
import {ViewFooComponent} from './pages/view-styles/view-foo/view-foo.component';
import {isLoggedGuardFn, isLoggedGuardService} from './guards/is-logged.guard';
import {PostListComponent} from './pages/post components/post-list/post-list.component';
import {AppChildComponent} from './pages/app-child/app-child.component';
import {PurpleComponent} from '../colorPages/purple/purple.component';
import {BlackComponent} from '../colorPages/black/black.component';

export const routes: Routes = [
  { path: '', component:  HomeComponent},
  { path: 'blue', component: BlueComponent, canDeactivate: [
      (component: BlueComponent) => !component.canLeave
    ] },
  { path: 'red', component: RedComponent },
  { path: 'green', component: GreenComponent , canActivate: [isLoggedGuardFn]},// canActivate это массив, так как гуардов может быть несколько - несколько слоев проверки
  { path: 'red/yellow', component:  YellowComponent},
  { path: 'purple', component:  PurpleComponent},
  { path: 'black', component:  BlackComponent},
  { path: 'calculator', component: CalculatorComponent},
  { path: 'decorators', component: DecoratorsComponent},
  { path: 'decorators/child', component: ChildDecoratorComponent},
  { path: 'view-styles', component: ViewFooComponent},
  { path : 'post-list', component: PostListComponent},
  { path: 'app-child', component: AppChildComponent},
  { path: '**', component: EmptyPageComponent},

];
