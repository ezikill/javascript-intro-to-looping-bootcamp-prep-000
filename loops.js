// loops forLoop(array) adds `"I am ${i} strange loop${i === 0 ? '' : 's'}."` to an array 25 times
function forLoop(array){
  for(let i = 0; i < 25; i++){
    if(i === 1){
      array.push(`I am ${i} strange loop`);
    }else{
      array.push(`I am ${i} strange loops`)
    }
  }return array;
}
//   2) loops whileLoop(n) counts down from n to 0:
//3) loops doWhile(array) removes elements from `array` until `array` is empty or until `maybeTrue()` returns `false`:
function whileLoop(n){
  while(n > 0){
    console.log(n);
    n--;
  }return 'done';
}

function doWhileLoop(array){
  function maybeTrue() {
    return Math.random() >= 0.5
  };
  do{
  array =  array.slice(1);

  }while (array.length > 0 && maybeTrue()) {
return array;
  }
}
