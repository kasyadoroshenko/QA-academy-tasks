let rectangle = { 
    type: "rectangle", 
         width: 10, 
        height: 8 
     
  } 
     
  function getArea(rectangle) { 
     
    return rectangle.width * rectangle.height 
   
  } 
       
  function getPerimeter(rectangle) { 
     
    return 2 * rectangle.width + 2 * rectangle.height 
     
  } 
     
  console.log(getArea(rectangle)); 
     
  console.log(getPerimeter(rectangle)); 