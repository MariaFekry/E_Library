var cart = [];

document.addEventListener('click', function (event) {
    var target = event.target || event.srcElement;
    console.log(target.parentElement);
    var div = target.parentElement;
    var bookName = div.getElementsByTagName("h4")[0].innerText;
    var by = div.getElementsByTagName("span")[0]?.innerText;
    var description = div.getElementsByTagName("p")[0].innerText;
    var price = div.getElementsByTagName("h5")[0].innerText;
    var image = div.parentElement.getElementsByTagName("img")[0].src;
    var book = { bookName, by, description, price, image };
    console.log(book);
    cart.push(book);
});

function save() {
    sessionStorage.setItem("data", JSON.stringify(cart));
    console.log('I am clicked');
}

function Added(){
    alert("Added")
}

