# 코딩알려주는누나 유튜버 무료 강좌

### 타입스크립트 기본 타입

1. **number**:

    ```tsx
    let a: number = 3;
    a = "sefs"; // 오류: Type 'string' is not assignable to type 'number'
    ```

2. **string**:

    ```tsx
    let b: string = "hello";
    b = 123; // 오류: Type 'number' is not assignable to type 'string'
    ```

3. **boolean**:

    ```tsx
    let c: boolean = true;
    c = "false"; // 오류: Type 'string' is not assignable to type 'boolean'
    ```

4. **null**:

    ```tsx
    let d: null = null;
    d = 123; // 오류: Type 'number' is not assignable to type 'null'
    ```

5. **undefined**:

    ```tsx
    let e: undefined = undefined;
    e = "defined"; // 오류: Type 'string' is not assignable to type 'undefined'
    ```

6. **any**:

    ```tsx
    let f: any = 3;
    f = "anything"; // no error, any type accepts any value
    f = true; // no error
    ```


### 유니온 타입 (Union Types)

- 타입스크립트는 변수에 여러 타입을 할당할 수 있도록 유니온 타입을 지원합니다.

    ```tsx
    let g: number | string = "efe";
    g = 123; // no error
    g = true; // 오류: Type 'boolean' is not assignable to type 'number | string'
    ```


### 배열 타입 (Array Types)

- 배열의 요소 타입을 정의할 수 있습니다.

    ```tsx
    let h: string[] = ['fef', 'fefe'];
    let i: number[] = [123, 456];
    let j: Array<string> = ['hello', 'world']; // 다른 방식의 배열 타입 선언
    ```


### 함수 (Functions)

- 함수의 매개변수와 반환 타입을 정의할 수 있습니다.

    ```tsx
    function addNumber(a: number, b: number): number {
      return a + b;
    }
    
    // 함수 표현식도 타입을 정의할 수 있습니다.
    const add: (a: number, b: number) => number = (a, b) => a + b;
    ```
타입스크립트를 사용하면 코드의 타입 안전성을 높이고, 디버깅을 쉽게 하며, 코드의 가독성을 향상시킬 수 있습니다. 다만, `any` 타입을 자주 사용하는 것은 타입스크립트를 사용하는 이점을 무색하게 할 수 있으므로, 필요한 경우에만 사용하는 것이 좋습니다.

### 타입스크립트와 자바스크립트의 관계

- 노드는 자바스크립트만 이해할 수 있으므로 타입스크립트 코드를 자바스크립트로 변환해야 합니다. 이를 위해 `tsc` (TypeScript Compiler)를 사용합니다.

    ```
    tsc index.ts
    ```

    - 위 명령을 실행하면 `index.js` 파일이 생성됩니다. 이 파일은 타입 선언이 모두 제거된 순수 자바스크립트 파일입니다.

### 이외 추가 내용

1. **인터페이스 (Interfaces)**:
    - 객체의 구조를 정의할 수 있습니다.
2. **타입 별칭 (Type Aliases)**:
    - 타입의 별칭을 정의할 수 있습니다.

    ```tsx
    type ID = number | string;
    let userId: ID = 123;
    userId = "ABC";
    ```

3. **타입 추론 (Type Inference)**:
    - 타입스크립트는 변수 선언 시 타입을 추론할 수 있습니다.

    ```tsx
    let inferredString = "hello"; // 타입이 string으로 추론됨
    inferredString = 12; // 오류: Type 'number' is not assignable to type 'string'
    ```

4. **열거형 (Enums)**:
    - 열거형을 사용하여 관련된 상수들을 그룹화할 수 있습니다.

    ```tsx
    enum Color {
      Red,
      Green,
      Blue
    }
    
    let myColor: Color = Color.Green;
    ```

5. **제네릭 (Generics)**:
    - 제네릭을 사용하여 재사용 가능한 컴포넌트나 함수들을 만들 수 있습니다.

    ```tsx
    function identity<T>(arg: T): T {
      return arg;
    }
    
    let output = identity<string>("myString"); // 타입 인수로 string을 전달
    let anotherOutput = identity<number>(123); // 타입 인수로 number를 전달
    ```