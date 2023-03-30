class LikedUI {
    static getLiked(result) {
        let likedImageArea = document.querySelector(".main-area");

        likedImageArea.innerHTML +=
            `
        <div class="image-area">
            <div class="image-area-for-hover">
                    <img src="${result.src.portrait}" alt="pexels-api-image" id="image-set">
                <div class="image-info-area">
                    <span id="image-info-text-title">${result.alt}</span>
                    <span id="hearts">
                    <i class="fa-solid fa-trash-can"></i>
                    </span> 
                    <span id="image-info-person">
                    <a href="${result.photographer_url}" target="_blank">Copyright: ${result.photographer}</a> 
                    </span>
                    <span id="imageId">${result.id}</span>
                </div>
            </div>
        </div>
        `
    }
    static deleteFromUI() {
        let likeButton = document.querySelectorAll("#hearts");

        likeButton.forEach(function (heart) {
            heart.addEventListener("click", function (e) {
                e.target.parentElement.parentElement.parentElement.parentElement.remove();
            })
        })
    }
}