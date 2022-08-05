const textContents = document.querySelector("#NM_FAVORITE").textContent.split(" ");
const a = [];

for ( let i = 1; i <textContents.length; i++ ) {
    if (textContents[i] !="" ){
        if (textContents[i] != "\n"){
        a.push(textContents[i]);
    }
    }        
}

console.log(a);