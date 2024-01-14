"use client";
import { useState } from "react";
import useSWR from "swr";
const fetcher = (url) => fetch(url).then((res) => res.json()); // Trả về promise
const TodoList = () => {
   const {
      data: todoList,
      error,
      isLoading,
   } = useSWR("http://localhost:3005/todos", fetcher, {
      fallbackData: [],
      revalidateOnFocus: false,
      refreshInterval: 2000,
   });

   // const [name, setName] = useState("");
   if (error) {
      return <h3>Đã có lỗi xảy ra</h3>;
   }

   console.log(todoList);
   return (
      <>
         <ul>
            {isLoading ? (
               <h3>Loading...</h3>
            ) : (
               todoList.map(({ id, name }) => <li key={id}>{name}</li>)
            )}
         </ul>
      </>
   );
};

export default TodoList;
