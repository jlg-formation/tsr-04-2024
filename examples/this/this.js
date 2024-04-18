"use strict";

console.log("this: ", this);

function toto() {
  console.log("this: ", this);
}

toto();

var obj = {
  titi: 123,
  tata: toto,
};

obj.tata();

new toto();
