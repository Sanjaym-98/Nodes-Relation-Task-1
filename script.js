const doc = document.getElementsByTagName("*");
console.log(doc)
for(let i=0; i<doc.length; i++){
    let node = doc[i];
    console.log(node.parentNode);
    console.log(node.childNodes)

}