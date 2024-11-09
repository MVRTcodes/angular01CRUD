import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    // fill with your firebase data
    provideFirebaseApp(() => initializeApp({"projectId":"","appId":"","storageBucket":"","apiKey":"","authDomain":"","messagingSenderId":"","measurementId":""})), 
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())]
};
