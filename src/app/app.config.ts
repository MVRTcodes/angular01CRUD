import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"angular-test-01-9e843","appId":"1:368523944492:web:91fb9c9e3d90c7cb30a789","storageBucket":"angular-test-01-9e843.appspot.com","apiKey":"AIzaSyAe6jTdO0jxabHkfD5Ph1GGQyu1XeHpLd4","authDomain":"angular-test-01-9e843.firebaseapp.com","messagingSenderId":"368523944492","measurementId":"G-9R8QX0TFPZ"})), provideAuth(() => getAuth())]
};
