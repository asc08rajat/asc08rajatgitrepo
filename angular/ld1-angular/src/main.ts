import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { PracticeAppComponent } from './app/practice-app/practice-app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
