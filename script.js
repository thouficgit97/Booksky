//selecting popup box ,popup overlay btn
var popupoverlay=document.querySelector(".pop_overlay")
var popupbox=document.querySelector('.popup_box')
var addpopupbtn=document.getElementById("add_btn_id")
var remove_typed=document.querySelectorAll(".default")
addpopupbtn.addEventListener("click",function(){
    for(i=0;i<remove_typed.length;i++)
    {
        remove_typed[i].value=""
    }
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

//select cancel btn
var cancel_btn=document.getElementById('cancel_popup')
cancel_btn.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

//select container,add_book,book_author,book_title,book_description
var container=document.querySelector(".container")
var add_book=document.getElementById("add_book")
var book_title=document.getElementById("book_title")
var book_author=document.getElementById("book_author")
var book_description=document.getElementById("book_description")

add_book.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","bookcontainer")
    if(book_author.value=="" || book_title.value=="" || book_description.value=="")
    {
        alert("Enter the Book Title,Author and Description")
    }
    else{
        div.innerHTML=`<h2>${book_title.value}</h2>
    <h5>${book_author.value}</h5>
    <p>${book_description.value}</p>
    <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"
    }
})
function deletebook(event)
{
    event.target.parentElement.remove()
}

