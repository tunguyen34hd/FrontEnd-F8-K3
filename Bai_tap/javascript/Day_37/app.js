const products = [
   {
      id: 1,
      name: "WD 2TB Elements Portable External Hard Drive - USB 3.0",
      image: "./assets/img/ssd1.jpg",
      rating: 3.3,
      type: "electronics",
      price: 64,
   },
   {
      id: 2,
      name: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
      image: "./assets/img/ssd2.jpg",
      rating: 2.9,
      type: "electronics",
      price: 109,
   },
   {
      id: 3,
      name: "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
      image: "./assets/img/ssd3.jpg",
      rating: 4.8,
      type: "electronics",
      price: 109,
   },
   {
      id: 4,
      name: "    WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard",
      image: "./assets/img/ssd4.jpg",
      rating: 4.8,
      type: "electronics",
      price: 114,
   },
   {
      id: 5,
      name: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
      image: "./assets/img/cpt1.jpg",
      rating: 2.9,
      type: "electronics",
      price: 599,
   },
   {
      id: 6,
      name: " Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED",
      image: "./assets/img/cpt2.jpg",
      rating: 2.2,
      type: "electronics",
      price: 999.99,
   },
];

const productElement = document.querySelector(".products");

function render() {
   const html = products
      .map(
         () =>
            `<li class="product">
         <div class="thumb ">
            <img src="" class="skeleton skeleton-image" alt="">
         </div>
         <h2 class="product-name">
         <div class="skeleton-text skeleton"></div>
         <div class="skeleton-text skeleton"></div>
         <div class="skeleton-text skeleton"></div>
         <div class="skeleton-text skeleton"></div>
         </h2>
         <div class="row">
            <div class="skeleton skeleton-text"></div>
            <div>
               <div class="skeleton skeleton-text"></div>
               <div class="skeleton skeleton-text">
                  
               </div>
            </div>
         </div>
         <div class="price skeleton"></div>
         <div class="actions skeleton">
            
         </div>
      </li>`
      )
      .join("");
   productElement.innerHTML = html;
}
render();

const getData = async () => {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         resolve(products);
      }, 2000);
   });
};

getData().then((response) => {
   const banner = document.querySelector(".banner");
   banner.children[0].src = "./assets/img/banner.jpg";
   banner.className = removeSkeleton(banner);

   const title = document.querySelector(".title");
   title.innerText = "Feature Products";
   title.className = removeSkeleton(title);
   const productEl = document.querySelectorAll(".product");

   response.forEach((product, index) => {
      productEl[index].querySelector(".thumb").children[0].src = product.image;
      productEl[index].querySelector(".product-name").innerText = product.name;
      productEl[index].querySelector(".row > div > div:first-child").innerText =
         product.rating;
      productEl[index].querySelector(".row > div > div + div").innerHTML =
         '<svg stroke="currentColor" fill="yellow" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>';
      productEl[index].querySelector(".row > div:first-child").innerText =
         product.type;
      productEl[index].querySelector(".actions").innerHTML =
         '<div class="add-to-cart">Add to cart</div><div class="buy">Buy now</div>';
      const skeletons = productEl[index].querySelectorAll("*[class*=skeleton]");
      skeletons.forEach((element) => {
         element.className = removeSkeleton(element);
      });
   });
});

function removeSkeleton(element) {
   return element.className
      .split(" ")
      .map((className) => (className.includes("skeleton") ? "" : className))
      .join("");
}
