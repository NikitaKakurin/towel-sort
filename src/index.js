
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(!Array.isArray(matrix) || matrix.length === 0){return[]};
  matrix = matrix.map((element,index) => {
    if (index % 2 === 1){
      return element.reverse();
    }else{
      return element;
    };
  });
  return matrix.flat();
}  

