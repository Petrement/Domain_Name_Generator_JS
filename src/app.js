/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//window.onload = function() {
//write your code here
//console.log(Hello World!);
//};

let pronoun = ["the", "our", "we", "they", "a"];
let adj = ["great", "awsome", "big", "small", "red"];
let noun = ["baby", "dog", "woman", "man", "lady"];
let dom = [".com", ".es", ".io", ".net"];

let domains = document.querySelector("#webs");
let content = "";

for (let a = 0; a < pronoun.length; a++) {
  for (let b = 0; b < adj.length; b++) {
    for (let c = 0; c < noun.length; c++) {
      for (let d = 0; d < dom.length; d++) {
        //console.log(`${pronoun[a]}${adj[b]}${noun[c]}${dom[d]}`);
        content += `${pronoun[a]}${adj[b]}${noun[c]}${dom[d]}<br>`;
      }
    }
  }
}
domains.innerHTML = content;
