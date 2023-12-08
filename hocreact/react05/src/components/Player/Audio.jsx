import { forwardRef, useImperativeHandle, useRef } from "react";
const Audio = (props, ref) => {
   // Tạo ref nội bộ trong component Audio
   const audioRef = useRef();
   useImperativeHandle(ref, () => {
      return {
         chay: () => {
            audioRef.current.play();
         },
         dung: () => {
            audioRef.current.pause();
         },
      };
   });
   return (
      <audio
         controls
         src="https://vnno-pt-5-tf-a320-zmp3.zmdcdn.me/5c355bb0b85f52cc28bd4581fde03eda?authen=exp=1702110024~acl=/5c355bb0b85f52cc28bd4581fde03eda/*~hmac=4d6dbac45c6c4cf5d03a412712c74906"
         ref={audioRef}
      ></audio>
   );
};

export default forwardRef(Audio);

/*
Tính bao đóng --> Chỉ cho phép ở bên ngoài truy cập vào các phương thức, thuộc tính mà nó cho phép
*/
