import "./posts.scss";
import PostList from "./PostList";
export const metadata = {
   title: "Danh sach bai viet",
};
const PostsPage = () => {
   return (
      <div>
         <h1>Danh sách bài viết</h1>
         <PostList />
      </div>
   );
};

export default PostsPage;
