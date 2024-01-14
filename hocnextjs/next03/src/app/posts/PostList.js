"use client";
import { useEffect } from "react";
import { toast } from "react-toastify";
import useSWR from "swr";
const fetcher = (url) => fetch(url).then((res) => res.json());
const postApi = `https://jsonplaceholder.typicode.com/posts`;
const PostList = () => {
   const { data, isLoading, error } = useSWR(postApi, fetcher, {
      fallbackData: [],
      revalidateOnReconnect: true,
   });
   useEffect(() => {
      window.addEventListener("online", () => {
         // console.log("a");
         toast.success("Đã khôi phục Internet");
      });
      window.addEventListener("offline", () => {
         // console.log("a");
         toast.warn("Đã ngắt kết nối Internet");
      });
   }, []);
   if (error) {
      return <h3>Đã có lỗi xảy ra</h3>;
   }
   return (
      <div>
         {isLoading ? <h3>Loading ...</h3> : data.map(({ id, title }) => <h3 key={id}>{title}</h3>)}
      </div>
   );
};

export default PostList;
