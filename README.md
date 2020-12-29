# Vanilla Redux

## Nomadcoders - Vanilla-Redux and React-Redux

<br>

- `yarn add redux`(or `npm install redux`)

## Note

- `state` : application에서 바뀌는 data
- `store` : state를 넣는 곳
- `reducer` : 내 data를 modify하는 함수, return하는 것은 applicate의 data가 됨
  - `action`만이 state를 modify 할 수 있음
- `dispatch` : `{type:~ }`을 지정해서 호출하면 reducer가 호출됨
- `subscribe` : store 안의 변화들을 알 수 있게 해줌
- `mutation(원본의 변형)`은 절대로 하지 말 것
  - spread를 이용해 새로운 객체를 리턴
