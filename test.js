// 取得彈出視窗元素
var modal = document.getElementById("myModal");
// 取得關閉按鈕元素
var closeBtn = modal.querySelector(".close");

// 取得所有的彈出連結元素
var popupLinks = document.querySelectorAll(".popup-link");

// 迭代彈出連結元素，為每個元素添加點擊事件處理器
popupLinks.forEach(function(link) {
    link.addEventListener("click", function(e) {
        e.preventDefault(); // 防止預設的連結行為

        var imgSrc = link.querySelector("img").src; // 取得點擊連結中的圖片 src 屬性值
        var modalImage = modal.querySelector("#modalImage"); // 取得彈出視窗中的圖片元素

        modalImage.src = imgSrc; // 將圖片 src 屬性值設置為點擊連結中的圖片 src 屬性值
        modal.style.display = "block"; // 顯示彈出視窗
    });
});

// 點擊關閉按鈕或彈出視窗以外的區域時隱藏彈出視窗
window.addEventListener("click", function(event) {
    if (event.target === modal || event.target === closeBtn) {
        modal.style.display = "none";
    }
});