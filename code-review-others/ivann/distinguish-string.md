```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>대문자, 소문자 구별</title>
</head>
<body>
    <script>
    var userSentence = prompt("문장을 입력해");
    var lowerSentence = userSentence.toLowerCase();
    var upperSentence = userSentence.toUpperCase();
    if(userSentence === lowerSentence){
        document.write('소문자 문장')
    }else if(userSentence === upperSentence){
        document.write('대문자 문장')
    }else{
        document.write('보통문장')
    }
    </script>
</body>
</html>
```

toLowerCase : 소문자로 변환된 새 문자열을 반환합니다.

`toLowerCase()` 메서드는 소문자로 변환된 문자열을 반환합니다.  `toLowerCase()` 는 원래의 값에 영향을 주지 않습니다.



1. toLowerCase(toUpperCase)를 사용해서 기존 값을 건드리지 않고 **새로운 값**을 새로운 변수에 할당해서 잘했어요

2. `===` 타입 까지 체크해주는 비교연산자를 사용하는 것은 매우 좋은 습관이에요



