pizza_menu_list= ["Chicken Pizza", "Pinnaple Pizza", "Pepperoni Pizza", "Cheese Pizza", "Meat Pizza", "Magherita Pizza", "Only Veg Pizza"]
function getmenu(){
    var htmldata;
    htmldata= "<ol class='Menu List'>"
    pizza_menu_list.sort();
    for(var i=0; i<menu_list_array; i++){
        htmldata=htmldata + '<li>' + pizza_menu_list[i] + "<li>"
    }
    htmldata= htmldata+"</ol>";
    document.getElementById("display_menu").innerHTML = htmldata;
}

function add_item(){
    var htmldata;
    var item= document.getElementById("add_item").value;
    pizza_menu_list.push(item);
    pizza_menu_list.sort();
    htmldata= "<section class= 'cards'>"

    for(var i=0; i<pizza_menu_list.lenght; i++) {
        htmldata= htmldata + "<div class= 'card'>" + "<img src= 'images/pizzaImg.png'/>" + pizza_menu_list[i]
    }
    htmldata= htmldata+"</section>"
    document.getElementById("display_addedmenu").innerHTML= htmldata;
}