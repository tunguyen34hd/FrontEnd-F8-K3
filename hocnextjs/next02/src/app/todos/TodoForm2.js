"use client";
import { useRef } from "react";
import { handleSubmit } from "./action";
const Todoform2 = () => {
   // const handleSubmit = async (FormData) => {
   //    "use server";
   //    // console.log(FormData);
   //    const title = FormData.get("title");
   //    console.log(title);
   // };
   const inpuRef = useRef();
   return (
      <div>
         <form
            action={async (FormData) => {
               const status = await handleSubmit(FormData);
               // Thành công
               inpuRef.current.value = "";
               inpuRef.current.msg = "Thêm thành công";
            }}
         >
            <input type="text" placeholder="Title" name="title" ref={inpuRef} />
            <button>Add</button>
            <p>{inpuRef.current?.msg}</p>
         </form>
      </div>
   );
};

export default Todoform2;
/*
Làm việc với Server Action
- Xử lý các hành động ở phía server
- Thường sẽ xử lý form

Có 2 cách để làm việc với Server Action
- Cách 1: Gọi server action từ client component
- Cách 2: Gọi server action từ server component
*/
