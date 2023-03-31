const btn = document.querySelector("#search-button");
const text = document.querySelector("#input");

const pexel = new Pexels(text);
let count = 1;

// document.addEventListener("DOMContentLoaded", function () {
//     Storage.showBtnStorage();
// })


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
                    console.log(result)
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
                    console.log(result)
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
                    console.log(result)
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
                console.log(result.photos)
            }
            else {
                UI.getImage(result);
                Image.textHover();
                console.log(result)
                Storage.findIDandAddStorage();
            }
        })
        .catch(err => console.log(err))
}




// document.addEventListener("DOMContentLoaded", function () {
//     pexel.getCurrentImage()
//         .then(result => {
//             document.querySelector(".image-area").innerHTML =
//                 `
//                     <img src="${result.src.portrait}" alt="">
            
//         `
//             console.log(result)
//         })
//         .catch(err => console.log(err))
// })




// let count = 1;
// nextBtn.addEventListener("click", function () {
//     let search = text.value;
//     if (pageNumber.value !== null) {
//         let count = pageNumber.value;
//         count++
//     }
//     else {
//         count++
//     }
//     console.log(count)
//     console.log(search)

//     pexel.getNextPage(count, search)
//         .then(result => {
//             UI.getImage(result);
//             Image.textHover();
//             console.log(result)
//         })
//         .catch(err => console.log(err))

//     // pexel.getNextPage(count, search)
//     //     .then(result => {
//     //         UI.getImage(result);
//     //         Image.textHover();
//     //         console.log(result)
//     //     })
//     //     .catch(err => console.log(err))
// })

// goBtn.addEventListener("click", function () {
//     let search = text.value;

//     pexel.getNextPage(pageNumber.value, search)
//         .then(result => {
//             UI.getImage(result);
//             Image.textHover();
//             console.log(result)
//         })
//         .catch(err => console.log(err))
// })





