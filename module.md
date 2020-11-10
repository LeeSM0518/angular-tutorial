# 모듈

* **COMMON JS** : 의존성 관리, 모듈화, 캡슐화를 위한 프로젝트 (서버 사이드 측 고려)
* **AMD** : 의존성 관리, 모듈화, 캡슐화를 위한 프로젝트 (클라이언트 사이드 측 고려)

=> ES6 부터 모듈화(export, import), NPM (모듈화)

* **Webpack** : 모듈 빌더, 번들러 (모듈이 너무 복잡해져서 생김)

<br>

## TypeScript's import & export

```typescript
// a.ts
export let a = 10;
let b = 0;
export class App {}
class Angular {
  name = "angular"
}
export default Angular;


// b.ts
import { a , App } from './a';
import {b} from './a';         // 에러!!
import Angular from './a';     // 중괄호를 쓰지 않아도 된다.
```

<br>

## Angular 모듈 이해하기

1. 모듈은 만든다. `ng g m layout` => layout 이라는 모듈을 만듬
2. `layout` 모듈 아래, `test` 컴포넌트를 만든다. `ng g c layou/test`
3. `layout.module.ts` 에서 `TestComponen` 를 import 하고 `@NgModule` 에서 `declarations` , `exports` 에 `TestComponent` 를 등록한다.
4. `app.module.ts` 에 `LayoutModule` 을 import하고 `@NgModule` 의 `imports` 에 `LayoutModule` 을 넣어준다.
5. `app.component.html` 에서 `<app-test></app-test>` 태그를 사용하여 `TestComponent` 을 화면에 등록

<br>

## 모듈화 예시

