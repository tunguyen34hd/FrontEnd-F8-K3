var posts = [
   {
      title: "Tieu de 1",
      image: "https://images.unsplash.com/photo-1698778874232-6a0a58d84055?auto=format&fit=crop&q=80&w=2003&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: `1Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Necessitatibus cum labore tempore accusantium quam similique
       tenetur nulla fuga, aliquam a quod possimus asperiores
       delectus sed dolorem illum assumenda repellendus doloremque!`,
   },
   {
      title: "Tieu de 2",
      image: "https://images.unsplash.com/photo-1682686581484-a220483e6291?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: `2Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Necessitatibus cum labore tempore accusantium quam similique
       tenetur nulla fuga, aliquam a quod possimus asperiores
       delectus sed dolorem illum assumenda repellendus doloremque!`,
   },
   {
      title: "Tieu de 3",
      image: "https://images.unsplash.com/photo-1698864273184-41cf2052196b?auto=format&fit=crop&q=80&w=2080&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: `3Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Necessitatibus cum labore tempore accusantium quam similique
       tenetur nulla fuga, aliquam a quod possimus asperiores
       delectus sed dolorem illum assumenda repellendus doloremque!`,
   },
   {
      title: "Tieu de 4",
      image: "https://images.unsplash.com/photo-1698864273184-41cf2052196b?auto=format&fit=crop&q=80&w=2080&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: `4Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Necessitatibus cum labore tempore accusantium quam similique
       tenetur nulla fuga, aliquam a quod possimus asperiores
       delectus sed dolorem illum assumenda repellendus doloremque!`,
   },
];

var newPost = posts.map(function (post, index) {
   return `<div class="post-item ${index % 2 !== 0 ? "post-right" : ""}">
    <img src="${post.image}" alt="" />
    <div>
       <h2>${post.title}</h2>
       <p>
          ${post.description}
       </p>
    </div>
 </div>`;
});

console.log(newPost);

document.write(`<div class="posts">
 ${newPost.join("")}
 </div>`);
