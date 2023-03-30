class Pexels {
    constructor(text) {
        this.url = "https://api.pexels.com/v1/search?query="
        this.text = text;
    }
    getPexelsPhoto() {
        return new Promise((resolve, reject) => {
            fetch(this.url + this.text.value, {
                headers: { Authorization: 'LsvsQZzdtKJLYKE6aoE7jgZYNZuF06O0hItp9buxKHPPPgYUOu2XVOXG' }
            })
                .then(resp => resp.json())
                .then(data => resolve(data))
                .catch(err => reject(err))
        })
    }

    getNextPage(count, search) {
        return new Promise((resolve, reject) => {
            fetch(`https://api.pexels.com/v1/search/?page=${count}&per_page=15&query=${search}`, {
                headers: { Authorization: 'LsvsQZzdtKJLYKE6aoE7jgZYNZuF06O0hItp9buxKHPPPgYUOu2XVOXG' }
            })
                .then(resp => resp.json())
                .then(data => resolve(data))
                .catch(err => reject(err))
        })
    }

    getCurrentImage(id) {
        return new Promise((resolve, reject) => {
            fetch("https://api.pexels.com/v1/photos/" + id, {
                headers: { Authorization: 'LsvsQZzdtKJLYKE6aoE7jgZYNZuF06O0hItp9buxKHPPPgYUOu2XVOXG' }
            })
            .then(resp => resp.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    }





    // return new Promise((resolve, reject) => {
    //     fetch("https://api.pexels.com/v1/photos/1170986", {
    //         headers: { Authorization: 'LsvsQZzdtKJLYKE6aoE7jgZYNZuF06O0hItp9buxKHPPPgYUOu2XVOXG' }
    //     })
    //     .then(resp => resp.json())
    //     .then(data => resolve(data))
    //     .catch(err => reject(err))
    // })






    // getOtherPage() {
    //     return new Promise((resolve, reject) => {
    //         let count = 1;
    //         let searched = this.text.value
    //         console.log(searched)
    //         document.querySelector("#next").addEventListener("click", pageNext);
    //         document.querySelector("#prev").addEventListener("click", pagePrev);

    //         function pageNext() {
    //             count++;
    //             fetchPage(count);
    //         };
    //         function pagePrev() {
    //             count--;
    //             fetchPage(count);
    //         };
    //         console.log(count)

    //         function fetchPage(count) {
    //             fetch(`https://api.pexels.com/v1/search/?page=${count}&per_page=15&query=cat`, {
    //                 headers: { Authorization: 'LsvsQZzdtKJLYKE6aoE7jgZYNZuF06O0hItp9buxKHPPPgYUOu2XVOXG' }
    //             })
    //                 .then(resp => resp.json())
    //                 .then(data => resolve(data))
    //                 .catch(err => reject(err))
    //         }
    //     })
    // }
}




