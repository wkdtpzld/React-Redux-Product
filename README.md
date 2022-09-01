# React-Redux-RESTAPI Web APP
FakeStoreAPI를 사용한 웹 서비스입니다.

현재 gh-pages를 통해 배포되고있습니다.  

https://wkdtpzld.github.io/React-Redux-Product/

-----

사용 기술

![1B5EE4D5D773F8A-RR](https://user-images.githubusercontent.com/87063105/187966048-70cb7db2-4b89-41db-a4a6-3e354d33be9b.jpeg)
![sass](https://user-images.githubusercontent.com/87063105/187966135-5fde949b-1ad5-40da-b864-4151358f9000.png)
![htmlcssjs](https://user-images.githubusercontent.com/87063105/187966477-a43a88e8-e746-455b-9498-a49a30e0c3b0.jpg)

----
## 구현

![image](https://user-images.githubusercontent.com/87063105/187967433-7c7cb378-f4d6-4999-b7a4-b6e1ddb7ceb3.png)

Redux Store를 사용해 Flux패턴을 적용해 API를 활용하여 간단한 쇼핑 웹 서비스를 구현해보았습니다.

Action, Action-types, Reducer, Store를 분리시켜 각 행위에 집중할 수 있도록 해두었습니다.

useSelector, useDispatch 를 사용하여 store에 접근하였습니다.

또한 렌더링을 최적화 시키기 위해 useEffect 를 적용하였습니다.

![image](https://user-images.githubusercontent.com/87063105/187968374-11b2713a-b3e0-47ba-9b84-f4dfe96d1e23.png)
![image](https://user-images.githubusercontent.com/87063105/187969715-4814e748-21b5-4186-9337-b47abea7996c.png)


----
## 가장 어려웠던 점

Store에 cart 변수를 추가하였고 카트에 

물건을 추가, 물건 갯수 조정, 카트에서 물건 제거하는 기능이 가장 문제였습니다.

메인 페이지에서 물건을 추가함에 따라 TotalCount,Price는 바로 반영이 되었지만

카트안의 해당 물건의 갯수에 변경이 없는점이 문제였습니다.

ADD CART , QTY 변경에 따른 실시간 랜더링이 제대로 이루어 지지 않는점이 마음에 안들었습니다.

해당 문제를 해결하기 위해서 useSelector , find() 함수를 사용하였고 useEffect를 사용해 

useSelector가 반영되었을 때 다시 state를 변경하는 함수를 구현하였습니다.
![image](https://user-images.githubusercontent.com/87063105/187970655-c0cf3de1-0c13-4887-a87d-a6f0211cfb1d.png)

----

API 활용

FakeStoreAPI를 사용한 웹 서비스를 구현하였지만

해당 서비스는 Login, cart 작성, Item ADD 등 많은 API가 CORS 문제로 작동하지 않았습니다.

다음 서비스에는 로그인, 회원가입을 통한 토큰관리를 해결하려 합니다.

해당 API 서비스에서는 카테고리, 전체 아이템을 GET으로 불러오는 API만 사용하였습니다.

![image](https://user-images.githubusercontent.com/87063105/187969265-80403a66-914e-47a0-b579-4dabeeffb61a.png)


