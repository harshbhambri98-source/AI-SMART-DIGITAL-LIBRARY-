let books=[];

function addBook(){
const title=document.getElementById('title').value;
const author=document.getElementById('author').value;

books.push({title,author});

renderBooks();
}

function renderBooks(){
const list=document.getElementById('bookList');

list.innerHTML='';

books.forEach(book=>{
list.innerHTML+=`
<div>
<h3>${book.title}</h3>
<p>${book.author}</p>
</div>
`;
});
}

new Chart(document.getElementById('chart'),{
type:'bar',
data:{
labels:['Fantasy','Sci-Fi','Romance'],
datasets:[{
label:'Books',
data:[10,7,5]
}]
}
});
