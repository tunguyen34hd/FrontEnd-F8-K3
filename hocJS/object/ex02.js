var posts = [
   {
      title: "Tiêu đề bài viết 1",
      image: "https://images.unsplash.com/photo-1692854236272-cc49076a2629?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Maiores quasi, nam hic officiis, similique dolore
        molestias minima veritatis adipisci dolorem expedita,
        sit earum. Quasi reiciendis magni doloribus doloremque
        quis dignissimos!`,
   },
   {
      title: "Tiêu đề bài viết 2",
      image: "https://images.unsplash.com/photo-1692854236272-cc49076a2629?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Maiores quasi, nam hic officiis, similique dolore
        molestias minima veritatis adipisci dolorem expedita,
        sit earum. Quasi reiciendis magni doloribus doloremque
        quis dignissimos!`,
   },
   {
      title: "Tiêu đề bài viết 3",
      image: "https://images.unsplash.com/photo-1692854236272-cc49076a2629?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Maiores quasi, nam hic officiis, similique dolore
        molestias minima veritatis adipisci dolorem expedita,
        sit earum. Quasi reiciendis magni doloribus doloremque
        quis dignissimos!`,
   },
];

var newPosts = posts.map(function (post, index) {
   return `<div class="post-item ${index % 2 !== 0 ? "post-right" : ""}">
    <div class="img">
        <img
            src="${post.image}"
        />
    </div>
    <div>
        <h1>${post.title}</h1>
        <p>${post.description}</p>
    </div>
</div>`;
});
console.log(newPosts);

document.write(`<div class="posts">
${newPosts.join("")}
</div>
`);
