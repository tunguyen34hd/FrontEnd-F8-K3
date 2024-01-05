"use client";
import Image from "next/image";
import image from "@/assets/images/pagenotfound.jpg";
import { useRouter } from "next/navigation";
const NotFound = () => {
   const router = useRouter();
   return (
      <div>
         <h1>PAGE NOT FOUND</h1>
         <div style={{ textAlign: "center" }}>
            <Image src={image} alt={"ảnh 404"} style={{ maxWidth: "80%", height: "auto" }} />
         </div>
         {/* <img src={image.src} style={{ maxWidth: "80%", height: "auto" }} /> */}

         <div style={{ textAlign: "center" }}>
            <button onClick={() => router.push("/")}>Về trang chủ</button>
         </div>
      </div>
   );
};

export default NotFound;
