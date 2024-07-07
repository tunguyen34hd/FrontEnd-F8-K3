import clsx from "clsx";
import { Inter, Open_Sans } from "next/font/google";
import Img from "next/image";
import img01 from "@/assets/images/1.jpg";
const inter = Inter({
   subsets: ["latin"],
   display: "swap",
});
const openSans = Open_Sans({
   weight: ["300", "400", "500", "600"],
   subsets: ["latin"],
   display: "swap",
});
const Page = () => {
   return (
      <div>
         <h1 className="text-9xl text-center text-purple-600 border-dashed  border-purple-600">
            Home Page
         </h1>
         <h2 className={clsx("text-5xl font-bold text-fuchsia-800", inter.className)}>
            {" "}
            Học lập trình
         </h2>
         <h2 className={clsx("text-5xl", openSans.className)}> Học lập trình</h2>
         {/* <Img src={img01} alt="Hoc lap trinh" /> */}
         {/* <Img src="/images/next.svg" alt="Hoc lap trinh khong kho" width={300} height={200} /> */}
         <Img
            src="https://picsum.photos/id/237/200/300"
            alt="Học lập trình"
            width={400}
            height={300}
         />
      </div>
   );
};

export default Page;
