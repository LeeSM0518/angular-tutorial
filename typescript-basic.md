# Angular를 이해하기 위한 타입스크립트 지식

### angular.json

```json
{
  "architect": {
    "build": {
      "builder": "@angular-devkit/build-angular:browser",
      "options": {
        "outputPath": "dist/front-end", // build 되는 위치
        "index": "src/index.html",      // 처음 실행되는 html
        "main": "src/main.ts",          // 처음 실행되는 ts
      }
    }
  }
}
```

<br>

### TypeScript 기본

1. `tsc -init` : typescript 프로젝트 초기화

<br>

* **test.ts**

  ```typescript
  let num: number = 10;
  
  // num.push(); 에러
  
  function testing(): string {
      // return 10; 에러
      return 'abc'
  }
  
  export class AppComponent {
  }
  ```

* **test.js**

  ```js
  "use strict";
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.AppComponent = void 0;
  var num = 10;
  // num.push(); 에러
  function testing() {
      // return 10; 에러
      return 'abc';
  }
  var AppComponent = /** @class */ (function () {
      function AppComponent() {
      }
      return AppComponent;
  }());
  exports.AppComponent = AppComponent;
  ```

<br>

## Angular에 필요한 TypeScript

* **타입 지정**

  ```java
  let a: number = 10;
  ```

* **클래스**

  ```typescript
  class App extends Parent {  
    constructor(public wheel: number) {
    }
  }
  ```

* **데코레이터**

  ```typescript
  function Component(constructorFn?: Function) {
  
      /**
       * 클래스를 꾸며주는 로직들
       *  Component, HTML, CSS 를 합쳐주는 로직
       */
  
      return constructorFn;
  }
  
  @Component() // 하나의 함수이다.
  class AppComponent {
  
      @Input() height: number;
  
      constructor() {
      }
  
  }
  ```

  