// burada querySelectorAll diyerek bütün (".image-area-for-hover") hepsini seçtik ve forEach ile döndük ve bütün resimlere erişebildik.

// const forHover = document.querySelectorAll(".image-area-for-hover");

// forHover.forEach(hoverEfect => {
//     hoverEfect.addEventListener("mouseover", function () {
//         let title = hoverEfect.children[1].firstElementChild;
//         title.setAttribute("style", "display:block")
//         let person = hoverEfect.children[1].lastElementChild;
//         person.setAttribute("style", "display:block")

//     })

//     hoverEfect.addEventListener("mouseleave", function () {
//         let title = hoverEfect.children[1].firstElementChild;
//         title.setAttribute("style", "display:none")
//         let person = hoverEfect.children[1].lastElementChild;
//         person.setAttribute("style", "display:none")

//     })
// })

class Image {
    static textHover() {
        const forHover = document.querySelectorAll(".image-area-for-hover");

        forHover.forEach(hoverEfect => {
            hoverEfect.addEventListener("mouseover", function () {

                let title = hoverEfect.children[1].firstElementChild;
                title.setAttribute("style", "display:block")

                let person = hoverEfect.children[1].firstElementChild.nextElementSibling.nextElementSibling;
                person.setAttribute("style", "display:block")

                let likeButton = hoverEfect.children[1].firstElementChild.nextElementSibling.children[0];
                likeButton.setAttribute("style","display:block")
            })

            hoverEfect.addEventListener("mouseleave", function () {

                let title = hoverEfect.children[1].firstElementChild;
                title.setAttribute("style", "display:none")

                let person = hoverEfect.children[1].firstElementChild.nextElementSibling.nextElementSibling;
                person.setAttribute("style", "display:none")

                let likeButton = hoverEfect.children[1].firstElementChild.nextElementSibling.children[0];
                likeButton.setAttribute("style","display:none")
            })
        })
    }
}
