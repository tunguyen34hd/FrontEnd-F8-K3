import Counter from "./components/Counter";
import Player from "./components/Player/Player";

const App = () => {
   return (
      <div>
         <Counter />
         {/* <Player /> */}
      </div>
   );
};

export default App;

/*
Refs
- Class component: React.creatRef
- Function component: useRef

- 1 object
- Lưu trữ gái trị cuối cùng sau mỗi lần re-render (Giống state)
- Có thể tahy đổi trực tiếp
- Giá trị tahy đổi luôn sau khi update
- Không re-render
- Tham chiếu tới 1 element --> Trả về Node Element --> Dễ dàng làm việc với DOM
*/
