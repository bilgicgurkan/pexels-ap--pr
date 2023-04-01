const btn = document.querySelector("#search-button");
const text = document.querySelector("#input");
const pexel = new Pexels(text);
let count = 1;  



document.addEventListener("DOMContentLoaded", function () {
    btn.addEventListener("click", function () {
        pexel.getPexelsPhoto()
            .then(result => {
                UI.getImage(result);
                Image.textHover();
                UI.showPaginationButton();
                UI.showGoArea();
                UI.pageNumber();
                eventListeners();
                console.log(result)
                Storage.findIDandAddStorage();
                UI.likePage();
            })
            .catch(err => console.log(err))
    })
    UI.likePage();

})

function eventListeners() {
    const nextBtn = document.querySelector("#next")
    const prevBtn = document.querySelector("#prev")
    const goBtn = document.querySelector("#go");


    nextBtn.addEventListener("click", showNextPage)
    prevBtn.addEventListener("click", showPrevPage)
    goBtn.addEventListener("click", showCurrentPage)
}


function showNextPage() {
    const pageNumber = document.querySelector("#page-number");

    if (pageNumber.value == "") {
        count++

        pageNumber.value = count;
        let search = text.value;
        pexel.getNextPage(count, search)
            .then(result => {
                if (result.photos.length == 0) {
                    alert("Sergilenecek Görsel Bulunamadı!")
                }
                else {
                    UI.getImage(result);
                    Image.textHover();
                    Storage.findIDandAddStorage();
                }
            })
            .catch(err => console.log(err))
    }
    else {
        let count = pageNumber.value;
        count++
        pageNumber.value = count;

        let search = text.value;
        pexel.getNextPage(count, search)
            .then(result => {
                if (result.photos.length == 0) {
                    alert("Sergilenecek Görsel Bulunamadı!")
                }
                else {
                    UI.getImage(result);
                    Image.textHover();
                    Storage.findIDandAddStorage();
                }
            })
            .catch(err => console.log(err))
    }
}

function showPrevPage() {
    const pageNumber = document.querySelector("#page-number");
    if (pageNumber.value == "" || count <= 1 || pageNumber.value <= 1) {
        alert("En baştasınız")
    }
    else {
        let count = pageNumber.value;
        count--;
        pageNumber.value = count;
        let search = text.value;
        pexel.getNextPage(count, search)
            .then(result => {
                if (result.photos.length == 0) {
                    alert("Sergilenecek Görsel Bulunamadı!")
                }
                else {
                    UI.getImage(result);
                    Image.textHover();
                    Storage.findIDandAddStorage();
                }
            })
            .catch(err => console.log(err))
    }
}

function showCurrentPage() {
    let search = text.value;
    const pageNumber = document.querySelector("#page-number");
    pexel.getNextPage(pageNumber.value, search)
        .then(result => {
            if (result.photos.length == 0) {
                alert("Sergilenecek Görsel Bulunamadı!")
            }
            else {
                UI.getImage(result);
                Image.textHover();
                Storage.findIDandAddStorage();
            }
        })
        .catch(err => console.log(err))
}