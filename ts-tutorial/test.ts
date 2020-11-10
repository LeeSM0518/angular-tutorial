function Component(constructorFn?: Function) {

    /**
     * 클래스를 꾸며주는 로직들
     *  Component, HTML, CSS 를 합쳐주는 로직
     */

    return constructorFn;
}

@Component(
class AppComponent {

    @Input() height: number;

    constructor() {
        
    }

}