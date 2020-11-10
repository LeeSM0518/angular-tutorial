# Angular 컴포넌트 생성하기

### src/app/app.module.ts

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [ // 컴포넌트들
    AppComponent
  ],
  imports: [      // 모듈들
    BrowserModule,
    AppRoutingModule
  ],
  providers: []  // 서비스 로직들
  bootstrap: [AppComponent]  // 처음 실행을 결정
})
export class AppModule { }

```

* `@NgModule` 
  * 데코레이터, AppModule 모듈로 만들어준다.

<br>

### src/app/app.component.ts

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',                    // component의 태그 네임
  templateUrl: './app.component.html',     // html 파일
  styleUrls: ['./app.component.scss']      // css 파일
})
export class AppComponent {
  title = 'front-end';
}

```

<br>

### \<app-root> 구성

* app.component.ts
* app.component.html
* app.component.scss(css)

<br>

### 브라우저 측 실행 과정

1. `index.html` 다운로드
2. `main.ts` 실행
3. `app-module` 실행
4. `app-component` 실행

<br>

### 실행

* `@angular-devkit/build-angular` 에러 발생 시
  * `npm i @angular-devkit/build-angular` 
* `ng serve` : 서버 실행

<br>

## Hello 컴포넌트 생성

1. `hello.component.ts` 

   ```typescript
   import { Component } from '@angular/core';
   
   @Component({
       selector: 'hello',
       templateUrl: './hello.component.html',
       styleUrls: ['./hello.component.css']
   })
   
   export class HelloComponent{
   
   }
   ```

2. `hello.component.html` , `hello.component.css` 생성

3. `app.modules.ts` 의 `declarations` 에 `HelloComponent` 추가

   ```ts
   ...
   
   @NgModule({
     declarations: [
       AppComponent,
       HelloComponent
     ],
   ...
   ```