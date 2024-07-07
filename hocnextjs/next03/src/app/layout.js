import "@/assets/style.scss";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
export const metadata = {
   title: "Học lập trình để đi làm",
   description: "Học lập trình miễn phí nhận lương ngàn $",
   keywords: "html-css, JavaScript, reactJS, NextJS",
   metadataBase: "http://localhost:3000",
   icons: {
      icon: "https://cdn1.iconfinder.com/data/icons/ionicons-sharp-vol-2/512/nuclear-sharp-512.png",
      shortcut:
         "https://cdn1.iconfinder.com/data/icons/ionicons-sharp-vol-2/512/nuclear-sharp-512.png",
      apple: "https://cdn1.iconfinder.com/data/icons/ionicons-sharp-vol-2/512/nuclear-sharp-512.png",
   },
   openGraph: {
      title: "Hoc code",
      description: "Hoc code nghe nhan luong ngan $",
      images: [
         "https://ia.media-imdb.com/images/rock.jpg",
         "https://ia.media-imdb.com/images/rock2.jpg",
      ],
   },
};

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body>
            {children}
            <ToastContainer />
         </body>
      </html>
   );
}
