var array = [
     {
          id: 1,
          name: "Chuyên mục 1",
          parent: 0,
     },
     {
          id: 2,
          name: "Chuyên mục 2",
          parent: 0,
     },
     {
          id: 3,
          name: "Chuyên mục 3",
          parent: 0,
     },
     {
          id: 4,
          name: "Chuyên mục 2.1",
          parent: 2,
     },
     {
          id: 5,
          name: "Chuyên mục 2.2",
          parent: 2,
     },
     {
          id: 6,
          name: "Chuyên mục 2.3",
          parent: 2,
     },
     {
          id: 7,
          name: "Chuyên mục 3.1",
          parent: 3,
     },
     {
          id: 8,
          name: "Chuyên mục 3.2",
          parent: 3,
     },
     {
          id: 9,
          name: "Chuyên mục 3.3",
          parent: 3,
     },
     {
          id: 10,
          name: "Chuyên mục 2.2.1",
          parent: 5,
     },
     {
          id: 11,
          name: "Chuyên mục 2.2.2",
          parent: 5,
     },
];

function nestChild(childObj) {
     array.forEach(function (object) {
          if (object.id === childObj.parent) {
               if (!object.children) {
                    delete childObj.parent;
                    object.children = [childObj];
               } else {
                    object.children.push(childObj);
               }
          }
     });
}

var result = [];

array.forEach(function (object) {
     if (object.parent !== 0) {
          nestChild(object);
     } else {
          result.push(object);
     }
     delete object.parent;
});
console.log(result);
