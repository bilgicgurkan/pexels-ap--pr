class Storage {
    static getStorageList() {
        let list;

        if (localStorage.getItem("liked") == null) {
            list = [];
        }
        else {
            list = JSON.parse(localStorage.getItem("liked"))
        }
        return list;
    }
    static findIDandAddStorage() {
        let likeButton = document.querySelectorAll("#hearts");
        let list = this.getStorageList();

        likeButton.forEach(function (heart) {
            heart.addEventListener("click", function (e) {
                let id = e.target.parentElement.nextElementSibling.nextElementSibling.textContent;

                if (list.indexOf(id) === -1) {
                    list.push(id);
                    heart.setAttribute("style", "color:red")
                }
                else {
                    alert("daha önce kaydettiniz")
                }
                localStorage.setItem("liked", JSON.stringify(list))
            })
        })
    }
    static deleteFromStorage() {
        let list = this.getStorageList();
        let likeButton = document.querySelectorAll("#hearts");

        likeButton.forEach(function (heart) {
            heart.addEventListener("click", function (e) {
                let id = e.target.parentElement.nextElementSibling.nextElementSibling.textContent;
                let findId = list.findIndex(function (a) {
                    return a === id;
                })
                list.splice(findId, 1);
                localStorage.setItem("liked", JSON.stringify(list))
            })
        })
    }
    static deleteAllStorage() {
        localStorage.removeItem("liked");
    }

}