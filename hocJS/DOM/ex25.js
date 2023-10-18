// CompositionEvent.create("counter-app", function () {
//    this.innerHTML = `
//    <h1>Count: 0</h1>
//    <button>+</button>
//    `;
//    // Tất cả các logic -> xử lý hết trong function
// });

var F8 = {
   component: function (name, option = {}) {
      var templateHtml = option.template;
      if (templateHtml) {
         Component.create(name, function () {
            var template = document.createElement("template");
            template.innerHTML = templateHtml;

            var templateNode = template.content.cloneNode(true);

            Array.from(templateNode.children).forEach(function (element) {
               if (element.getAttribute("v-length")) {
                  var length = element.getAttribute("v-length");
                  // console.log(length);
                  for (var index = 0; index < length; index++) {
                     var elementClone = element.cloneNode(true);
                     elementClone.innerHTML = elementClone.innerHTML.replaceAll(
                        "{index}",
                        index
                     );

                     templateNode.insertBefore(
                        elementClone,
                        elementClone.nextElementSibling
                     );
                  }
                  templateNode.children[0].remove();
               }
            });
            this.append(templateNode);
         });
      }
   },
};

F8.component("counter-app", {
   template: `<h1 v-length="10">Count: {index}</h1>
   <p v-length="5">ALO: {index}</p>
   `,
});
