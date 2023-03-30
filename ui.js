class UI {
    static getImage(result) {
        let imageArray = result.photos;
        const showImages = document.querySelector(".main-area");
        showImages.innerHTML = "";


        imageArray.forEach(function (images) {

            showImages.innerHTML +=
                `
            <div class="image-area">
                <div class="image-area-for-hover">
                        <img src="${images.src.portrait}" alt="pexels-api-image" id="image-set">
                    <div class="image-info-area">
                        <span id="image-info-text-title">${images.alt}</span>
                        <span id="hearts">
                        <i class="fa-solid fa-heart"></i>
                        </span> 
                        <span id="image-info-person">
                        <a href="${images.photographer_url}" target="_blank">Copyright: ${images.photographer}</a> 
                        </span>
                        <span id="imageId">${images.id}</span>
                    </div>
                </div>
            </div>
            `
        });
    }
    static showPaginationButton() {
        document.querySelector(".pageBtn").innerHTML =
            `
        <button id="prev">Önceki</button>
        <button id="next">Sonraki</button>
        `
    }
    static showGoArea() {
        document.querySelector(".number-area").innerHTML =
            `
        <label for="page-number" id="goText">Gitmek için bir sayfa numarası seç</label>
        <input type="number" name="page-number" id="page-number" min="1">
        <button id="go">Git!</button>
        `
    }
    static pageNumber() {
        document.querySelector("#page-number").value = "";
    }
}