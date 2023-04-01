let pexels = new Pexels();


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

document.querySelector("#clearAll").addEventListener("click", function () {
    if (confirm("?")) {
        Storage.deleteAllStorage();
        LikedUI.deleteAllUI();
    }
})




