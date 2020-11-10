# 컴포넌트

* 예시 UI 배치

<img src="https://user-images.githubusercontent.com/43431081/89852375-ab798a00-dbc9-11ea-835a-7ce257c5a99e.png" alt="image" style="zoom:33%;" />

<br>

## 컴포넌트 배치

1. `ng generate component header` , `ng generate component footer` `ng g c section` 로 컴포넌트 자동 생성한다( `ng g c "component-name"` 도 가능하다).
2. 각 `*.component.html` 과 `*.component.scss` 를 작성한다.
3. 자식 컴포넌트를 생성한다. `ng g c section/time-display` , `ng g c section/buttons`

<br>

## 데이터 바인딩

* **time-display.component.ts**

  ```typescript
  import {Component, OnInit} from '@angular/core';
  
  @Component({
      selector: 'app-time-display',
      templateUrl: './time-display.component.html',
      styleUrls: ['./time-display.component.scss']
  })
  export class TimeDisplayComponent implements OnInit {
  
      test = 1
  
      constructor() {
          setInterval(() => {
              this.test++;
          }, 1000)
      }
  
      ngOnInit(): void {
      }
  
  }
  ```

* **time-display.component.html**

  ```html
  <p>
      {{ test }} 이 들어가게 됩니다.
  </p>
  ```

* **buttons.ts**

  ```typescript
  import { Component, OnInit } from '@angular/core';
  
  @Component({
    selector: 'app-buttons',
    templateUrl: './buttons.component.html',
    styleUrls: ['./buttons.component.scss']
  })
  export class ButtonsComponent implements OnInit {
  
    count = 0;
  
    constructor() { }
  
    start() {
      this.count++;
    }
  
    ngOnInit(): void {
    }
  
  }
  ```

* **buttons.html**

  ```html
  <p>
  
      {{count}}
      <button class="start-btn" (click)="start()">시작</button>
      <button class="stop-btn">멈춤</button>
      <button class="reset-btn">리셋</button>
  
  </p>
  ```

<br>

## 부모-자식 데이터 전달 구현

* **button.html**

  ```html
  <p>
  
      {{count}}
      <button class="start-btn" (click)="start()">시작</button>
      <button class="stop-btn">멈춤</button>
      <button class="reset-btn">리셋</button>
  
  </p>
  ```

* **button.ts**

  ```typescript
  import {Component, OnInit, Output, EventEmitter} from '@angular/core';
  
  @Component({
    selector: 'app-buttons',
    templateUrl: './buttons.component.html',
    styleUrls: ['./buttons.component.scss']
  })
  export class ButtonsComponent implements OnInit {
  
    count = 0;
  
    @Output() clickEvent = new EventEmitter();
  
    constructor() { }
  
    start() {
      this.clickEvent.emit('change!');
    }
  
    ngOnInit(): void {
    }
  
  }
  ```

* **section.html**

  ```html
  <div class="title">
  
      <div class="display">
          <app-time-display [inputData]="present"></app-time-display>
          <app-buttons (clickEvent)="startTime($event)"></app-buttons>
      </div>
  
  </div>
  ```

* **section.ts**

  ```typescript
  import {Component, OnInit} from '@angular/core';
  
  @Component({
      selector: 'app-section',
      templateUrl: './section.component.html',
      styleUrls: ['./section.component.scss']
  })
  export class SectionComponent implements OnInit {
  
      present = 'welcome';
  
      constructor() {
      }
  
      ngOnInit(): void {
      }
  
      startTime(time) {
          this.present = time;
      }
  }
  ```

* **time-display.ts**

  ```typescript
  import {Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges} from '@angular/core';
  
  @Component({
      selector: 'app-time-display',
      templateUrl: './time-display.component.html',
      styleUrls: ['./time-display.component.scss']
  })
  export class TimeDisplayComponent implements OnInit, OnChanges {
  
      test = 1
  
      constructor() {
          console.log(this.inputData)
      }
  
      ngOnInit(): void {
      }
  
      @Input() inputData: string;
  
      ngOnChanges(changes: SimpleChanges): void {
          console.log(changes)
      }
      
  }
  ```

<br>

## 부모-자식 데이터 전달 순서

1. `button.html` 에서 버튼 클릭
2. `(click)="start()"` 을 통해 `button.ts` 의 `start()` 메서드 호출
3. `button.ts` 의 `start()` 메서드는 `@Output() clickEvent = new EventEmitter();` 로 초기화되어 있는 변수를 `this.clickEvent.emit('changes!')` 로 사용해서 부모 컴포넌트에게 정보 전달
4. `section.html` 은 `(clickEvent)="startTime($event)"` 를 통해 `clickEvent` 로 넘어온 `$event` 값을 `startTime()` 메서드의 파라미터로 전달
5. `section.ts` 에서 `startTime(time)` 메서드는 `this.present = time` 으로 구성되어 있어서 `present` 가 변하게 된다.
6. `section.html` 에 `[inputData]="present"` 가 `app-time-display` 태그에 속성으로 존재해 `present` 가 `app-time-display` 의 `inputData` 로 넘어간다.
7. `time-display.ts` 에 `@Input() inputData: string;` 으로 구현되어 있어서 `inputData` 가 값을 받아 올수 있게 된다.
   1. `OnChanges` 를 implements 해서 `ngOnChanges` 를 구현하게 되면 `@Input` 된 데이터가 변할 때 실행된다.

<br>

## 스탑 워치 만들기

* **button.html**

  ```html
  <p>
  
      <button class="start-btn" (click)="executeButton('start')">시작</button>
      <button class="stop-btn" (click)="executeButton('stop')">멈춤</button>
      <button class="reset-btn" (click)="executeButton('reset')">리셋</button>
  
  </p>
  ```

* **button.ts**

  ```typescript
  import {Component, OnInit, Output, EventEmitter} from '@angular/core';
  
  @Component({
    selector: 'app-buttons',
    templateUrl: './buttons.component.html',
    styleUrls: ['./buttons.component.scss']
  })
  export class ButtonsComponent implements OnInit {
  
    count = 0;
  
    @Output() clickEvent = new EventEmitter();
  
    constructor() { }
  
    executeButton(commnad): void {
      this.clickEvent.emit(commnad);
    }
  
    ngOnInit(): void {
    }
  
  }
  ```

* **section.html**

  ```html
  <div class="title">
  
      <div class="display">
          <app-time-display [inputData]="present"></app-time-display>
          <app-buttons (clickEvent)="startTime($event)"></app-buttons>
      </div>
  
  </div>
  ```

* **section.ts**

  ```typescript
  import {Component, OnInit} from '@angular/core';
  
  @Component({
      selector: 'app-section',
      templateUrl: './section.component.html',
      styleUrls: ['./section.component.scss']
  })
  export class SectionComponent implements OnInit {
  
      present = 'welcome';
  
      constructor() {
      }
  
      ngOnInit(): void {
      }
  
      startTime(time) {
          this.present = time;
      }
  }
  ```

* **time-display.html**

  ```html
  <div>
  
      <div class="time-text">
          <span>{{min}} : {{sec}}</span><small> . {{ms}}</small>
      </div>
  
  </div>
  ```

* **time-display.ts**

  ```typescript
  import {Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges} from '@angular/core';
  
  @Component({
      selector: 'app-time-display',
      templateUrl: './time-display.component.html',
      styleUrls: ['./time-display.component.scss']
  })
  export class TimeDisplayComponent implements OnInit, OnChanges {
  
      constructor() {
      }
  
      min = 0;
      sec = 0;
      ms = 0;
  
      timeInterval;
  
      @Input() inputData: string;
  
      ngOnInit(): void {
      }
  
      timeStop(): void{
          clearInterval(this.timeInterval);
      }
  
      timeReset(): void {
          this.timeStop();
          this.ms = 0;
      }
  
      timeStart(): void {
          this.timeInterval = setInterval(() => {
              this.ms++;
          }, 10);
      }
  
      ngOnChanges(changes: SimpleChanges): void {
          for (const propName in changes) {
              if (propName === 'inputData') {
                  switch (changes[propName].currentValue) {
                      case 'start':
                          this.timeStart();
                          break;
                      case 'stop':
                          this.timeStop();
                          break;
                      case 'reset':
                          this.timeReset();
                          break;
                  }
              }
          }
      }
  
  }
  ```

  