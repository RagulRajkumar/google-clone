const input=document.getElementById("input")
const search=document.getElementById("search")
function update(r){
search.href=`https://www.google.com/search?q=${r.target.value}`
}
input.addEventListener("change",update)  