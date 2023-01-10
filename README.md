# Apple-React

## export 문법

```js
export default //한개의 값을 전달
export  //여러개의 값을 전달
```

## React Hook

```js
useNavigate();
//페이지 이동하면서 파라미터를 전달
let navigate = useNavigate();
<태그 onClick={()=>{navigate(1)}}>작명</태그>
//앞으로 한 페이지 이동
<태그 onClick={()=>{navigate(-1)}}>작명</태그>
//뒤로 한 페이지 이동

useEffect();
//html 렌더링 후 동작하기 때문에 서버에서 데이터를 가져오거나 연산시 사용

useParams();
```

## Route 문법

```js
<Route path="*" element={<div>404 notfound</div>} />
// not fount 페이지(* = 오타를 포함한 모든 잘못된 경로로 접근시 보여줄 페이지를 지정)
```

## memo, useMemo

- memo : props가 변할 때만 재렌더링해줌
- useMemo :
