var image = document.getElementById('myImage');
var modal = document.getElementById('myModal');
var modalImg = document.querySelector('.modal-content img');
var closeBtn = document.querySelector('.close');

image.addEventListener('click', function() {
  // 當圖片被點擊時，顯示彈出視窗並設置圖片
  modal.style.display = 'block';
  modalImg.src = this.src;
});

closeBtn.addEventListener('click', function() {
  // 當關閉按鈕被點擊時，隱藏彈出視窗
  modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
  // 當點擊視窗外的區域時，隱藏彈出視窗
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});