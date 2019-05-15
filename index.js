var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
  kittens.push(name);
}
function destructivelyPrependKitten(name){
  kittens.unshift(name);
}
function destructivelyRemoveLastKitten(name){
  kittens.pop(name);
}
function destructivelyRemoveFirstKitten(name){
  kittens.shift(name);
}
function appendKitten(name){
  kittens = kittens.push(name);
  return kittens.slice(1);

}
function prependKitten(name){
  return kittens.unshift(name);
}
