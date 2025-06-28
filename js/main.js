// 画像の配列
const images = [
  "../images/Frame 14.png",
  "../images/Frame 15.png",
  "../images/Frame 16.png",
  "../images/Frame 17.png",
];

class PhotoViewer {
  // コンストラクタで渡す
  constructor(rootElm, images) {
    this.rootElm = rootElm;
    this.images = images;
    this.currentIndex = 0;
  }

  init() {
    const nextButtonElm = this.rootElm.querySelector(".nextButton");
    nextButtonElm.addEventListener("click", () => {
      this.next();
    });

    const prevButtonElm = this.rootElm.querySelector(".prevButton");
    prevButtonElm.addEventListener("click", () => {
      this.prev();
    });

    this.updatePhoto();
  }

  updatePhoto() {
    const frameElm = this.rootElm.querySelector(".frame");
    const image = this.images[this.currentIndex];
    const imageIndex = this.currentIndex + 1;

    frameElm.innerHTML = `
            <p>${imageIndex}枚目</p>
            <div class="currentImage">
                <img src="${image}" />
            </div>
        `;

    this.startTimer();
  }

  startTimer() {
    if (this.timerKey) {
      clearTimeout(this.timerKey);
    }

    this.timer = setTimeout(() => {
      this.next();
    }, 3000); // 3秒後に次の画像へ
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.updatePhoto();
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.updatePhoto();
  }
}

new PhotoViewer(document.getElementById("PhotoViewer"), images).init();
