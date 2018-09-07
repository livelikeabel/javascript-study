```
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
</head>

<body>
    <script>

        var a = prompt("성별", "남자/여자로 입력");
        var b = prompt("키(m단위,cm적으시면 자동변환됩니다)");
        var c = prompt("체중을 입력하세요");

        b = b / 100;

        var BMI = c / (b * b);

        if (a == "남자") {
            document.write("BMI 지수는" + BMI + "남자기준입니다<br>")
            if (BMI < 20.0)
                document.write("저체중 혹시 존경하는 인물이 간디 아니시죠? JON na 많이드십쇼");
            else if (BMI < 25.0)
            document.write("정상입니다.좋으건 골라 드시나봐요?관리를 JON na 잘하셨군요");
            else
            document.write("과체중 곧 김정은이 될거같습니다.<br>")
        }
        if (a == "여자"){
         document.write("BMI 지수는" + BMI + "여자 기준입니다<br>")
            if (BMI < 18.5)
                document.write("저체중 많이드십쇼");
            else if (BMI < 22.0)
            document.write("정상입니다.좋은건 골라 드시나봐요? 관리를 JON na 잘하셨군요");
            else
            document.write("과체중 곧 김정은이 될거같습니다.<br>")
        }
    </script>
</body>

</html>
```

1. 변수 이름을 a, b, c 이렇게 선언 하는것은 매우 좋지 않은 방식입니다. 코드가 짧을 때는 알아보기 어렵지 않지만, 만약 1억줄이라면(이고잉) 협업하는 사람이나, 유지보수, 리팩토링, 디버깅하는데 어렵겠죠. 변수는 명사로, 함수는 동사(명사, 형용사 + 동사도 가능)의 포맷으로 네이밍을 해주세요

2. `var b = prompt("키(m단위,cm적으시면 자동변환됩니다)");` 이 코드의 내용이 불명확 합니다. 제 키는 cm단위 일때는 185cm 이고, m 단위일 때는 1.85m 인데 자동 변환의 의미는 185를 입력해도, 1.85를 입력해도 같은 결과가 나와야 한다는 것인데, 입력받은 값을 100으로 나누어주는것 외에는 따로 분기 처리를 해주는 코드가 없네요

   => 만약 cm나 m 나 상관없이 입력에 대한 결과를 보여주고 싶다면, 분기 처리를 잘 하면 되겠죠? 사용자에게 cm와 m라는 문자열 까지 받아서(185cm 또는 1.85m) 문자열을 얻어내고, if문을 사용하여 그 문자열이 cm일 때와 m일때의 로직을 다르게 해주면 될거에요.

3. `  if (a == "남자") {` 이 부분에서 `==` 코드는 `===`이렇게 쓰는것을 추천해요.  `1=='1'`의 결과는 true이고, `1==='1'` 는 false에요. `===` 이렇게 쓰면 타입까지 체크해주기 때문에 더 안전하게 코드를 짤 수 있습니다.

4. 분기 처리를 잘 하셨어요. if문으로 지금 코드의 depth가 2인데 (if안에 if가 또있다.) 코드의 depth를 1로 줄여야 해요 지금은 함수에 대한 이해도가 낮아서 힘들겠지만, 함수를 학습하고나서 코드의 depth를 줄이는 연습을 해야해요

   ```js
   		if (a == "남자") {
               document.write("BMI 지수는" + BMI + "남자기준입니다<br>")
               if (BMI < 20.0)
                   document.write("저체중 혹시 존경하는 인물이 간디 아니시죠? JON na 많이드십쇼");
               else if (BMI < 25.0)
               document.write("정상입니다.좋으건 골라 드시나봐요?관리를 JON na 잘하셨군요");
               else
               document.write("과체중 곧 김정은이 될거같습니다.<br>")
           }
           if (a == "여자"){
            document.write("BMI 지수는" + BMI + "여자 기준입니다<br>")
               if (BMI < 18.5)
                   document.write("저체중 많이드십쇼");
               else if (BMI < 22.0)
               document.write("정상입니다.좋은건 골라 드시나봐요? 관리를 JON na 잘하셨군요");
               else
               document.write("과체중 곧 김정은이 될거같습니다.<br>")
           }
   ```
