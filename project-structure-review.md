# 프로젝트 구조 살펴보기

* **src/index.html**

  ```html
  <!doctype html>
  <html lang="en">
  <head>
    <meta charset="utf-8">
    <title>FrontEnd</title>
    <base href="/">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/x-icon" href="favicon.ico">
  </head>
  <body>
    <app-root></app-root>
  </body>
  </html>
  ```

  * 사용자가 받는 파일

* **src/main.ts**

  ```typescript
  import { enableProdMode } from '@angular/core';
  import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
  
  import { AppModule } from './app/app.module';
  import { environment } from './environments/environment';
  
  if (environment.production) {
    enableProdMode();
  }
  
  // AppModule이 실행된다.
  platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
  
  ```

  * 가장 먼저 실행되는 파일