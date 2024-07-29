function addItem(){
    let itemList = document.getElementById("addItemList").value;
    if(itemList == ""){
        alert("Digite uma tarefa.");
    }else{
    document.getElementById("getItem").insertAdjacentHTML(
        "beforeend" , "<div class='item__list form animate__animated animate__fadeInDown'><input type='checkbox' class='mark__task' /><span class='item__text'>" 
        + itemList 
        + "</span> <button class='del__item' onclick='delDiv();'>&#10006;</button></div>");
    document.getElementById("addItemList").value = "";
    }
}
document.getElementById("submit").addEventListener("click", addItem);
document.getElementById("submit").addEventListener("click", delDiv);
document.addEventListener("keypress", function(e) {
    if(e.key === 'Enter') {
        var btn = document.querySelector("#submit");
      btn.click();
    }
  });

function delDiv() {
    var getDiv = document.querySelectorAll(".del__item");
    for(var i = 0; i < getDiv.length; i++) {
        getDiv[i].onclick = function(){
            if(confirm("Deseja realmente deletar a tarefa?") == true){
                this.parentElement.remove();
            }else{
                return false;
            }
        }
    }
}

function cleanList() {
    document.location.reload(true);
}