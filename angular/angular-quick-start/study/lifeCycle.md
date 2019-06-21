Angular 생명주기

컴포넌트가 생성되고 파괴될 때 까지의 일련의 과정을 이야기 한다.

ngOnChanges
- 속성 바인딩
- 부모로 부터 어떤 값을 받아왔는지 알아야 하고, 그 값을 가진 상태에서 컴포넌트를 생성해야 하기 때문에.
ngOnInit
- 컴포넌트 초기화 할 때 값을 준비 해놓을 때.
- 다시 불일 일 없는 메서드나 로직을 넣는다.
ngDoCheck
- 여러번 불릴 수 있다.
- 컴포넌트에 변화가 일어날 때.



ngAfterContentInit

ngAfterContentChecked

ngAfterViewInit

ngAfterViewChecked




ngDestory


————————————

1. 생성과 소멸에 관한 생명주기
2. 데이터가 변경 되었을 때의 생명주기

정리 (순서대로)

Constructor - 누가 뭐래도 1빠
ngOnChanges - 최초 초기화때  / Input 프로퍼티가 변경될때 (input이 없으면 실행되지 않는다.)
ngOnInit - 프로퍼티 초기화된 직후
ngAfterContentInit. - ngContent 사용 시 자식이 초기화 된 직후
ngAfterContentChecked - ngContent를 통해 HTML을 받을 때 (최초/변경시)
ngAfterViewInit - 템플릿이 모두 초기화 되었을때
ngAfterViewChecked - 템플릿에 바인딩된 값이 변경되었을때
ngOnDestroy - 컴포넌트가 없어질 때

