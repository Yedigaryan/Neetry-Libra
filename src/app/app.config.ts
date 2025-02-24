import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { PreloadAllModules, provideRouter, withDebugTracing, withPreloading } from '@angular/router';

import { APP_ROUTES } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({eventCoalescing: true}),
    provideHttpClient(),
    // importProvidersFrom(HttpClientModule),
    provideRouter(APP_ROUTES,
      withPreloading(PreloadAllModules),
      withDebugTracing(),
    ),
  ]
};
