/*const nam = "mukul";
const greeting = "Good morning";
console.log(nam + " " + greeting);


1) concat()  ---->>will add the string at last
let html;
html = `<h1> this is a heading </h1>`;
html = html.concat(`<p>This is a para1</p>`)
console.log(html);



2) length
let str = "This is a string";
console.log(str.length);



3)toLowerCase(),toUpperCase()  --->>These two will return a new string , the orignal string will not change.
let str = "THIS IS A STRING";
console.log(str.toLowerCase());



4)indexOf(),lastIndexOf(),charAt(indexno)
let str = "My name is mukul";
console.log(str.indexOf("is"))



5)endsWith() --->>returns true/false
6)includes() --->>returns true/false
7)substring(starting index , last index);
                   |                 |
                   |                 |
                   ^                 ^
                 included          excluded
8)slice(starting index , last index);


9)split(); --->> split the string from the values given in paranthesis.
let str = "This is a string"
console.log(str.split("is"));


10) Replace()
let str = "This is a string of JS";
console.log(str.replace("JS", "Java"));


Backtics
let fruit1 = 'orange';
let fruit2 = 'Apple';
let greet = `Hello i love ${fruit1} and ${fruit2}`;
console.log(greet);

*/