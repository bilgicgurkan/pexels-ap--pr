let pexels = new Pexels();
// let storage = new Storage();


document.addEventListener("DOMContentLoaded", function () {
    let idList = Storage.getStorageList();
    idList.forEach(id => {
        pexels.getCurrentImage(id)
            .then(result => {
                LikedUI.getLiked(result)
                Image.textHover()
                Storage.deleteFromStorage();
                LikedUI.deleteFromUI();
            })
            .catch(err => console.log(err))
    });
})




