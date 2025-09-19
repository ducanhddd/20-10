// Danh sách lời chúc 20-10
const wishes = [
  { icon: "🌷", text: "Chúc bạn luôn xinh đẹp, mạnh khỏe và hạnh phúc trong cuộc sống!" },
  { icon: "🌸", text: "Chúc những người phụ nữ tuyệt vời luôn rạng rỡ nụ cười, thành công trong mọi lĩnh vực!" },
  { icon: "🎉", text: "Chúc mọi điều tốt đẹp nhất sẽ đến với bạn hôm nay và mãi về sau!" },
  { icon: "🌺", text: "Chúc bạn luôn tự tin, tỏa sáng và được yêu thương mỗi ngày!" },
  { icon: "💐", text: "Gửi những lời chúc tốt lành, yêu thương, chân thành nhất tới bạn nhân ngày 20-10!" },
  { icon: "🦋", text: "Mong bạn luôn giữ được nét duyên dáng, dịu dàng và bản lĩnh của người phụ nữ Việt Nam!" },
  { icon: "🎁", text: "Chúc bạn nhận được thật nhiều hoa, quà và lời chúc ý nghĩa trong ngày hôm nay!" },
  { icon: "👑", text: "Chúc một nửa thế giới luôn thành công, xinh đẹp và hạnh phúc viên mãn!" },
  { icon: "💖", text: "Chúc bạn ngày càng xinh đẹp, trẻ trung và tràn đầy năng lượng tích cực!" },
  { icon: "🌻", text: "Chúc các chị em luôn vui vẻ, yêu đời và gặp nhiều may mắn!" }
];

let currentIdx = 0;
const wishSlide = document.getElementById("wish-slide");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

function renderWish(idx) {
  const wish = wishes[idx];
  const words = wish.text.split(" ");
  let textHTML = "";
  words.forEach((word, i) => {
    textHTML += `<span class="wish-word" style="animation-delay: ${i * 0.07 + 0.08}s">${word}</span>`;
    if (i < words.length - 1) textHTML += " ";
  });
  wishSlide.innerHTML = `
    <div class="wish-card">
      <span class="wish-heart">❤️</span>
      <span class="wish-icon">${wish.icon}</span>
      <div class="wish-text">${textHTML}</div>
    </div>
  `;
  prevBtn.disabled = idx === 0;
  nextBtn.disabled = idx === wishes.length - 1;
}
renderWish(currentIdx);

prevBtn.onclick = () => {
  if (currentIdx > 0) {
    currentIdx--;
    renderWish(currentIdx);
  }
};
nextBtn.onclick = () => {
  if (currentIdx < wishes.length - 1) {
    currentIdx++;
    renderWish(currentIdx);
  }
};

// --------- Hiệu ứng hoa/trái tim rơi thẳng -----------
const fallingContainer = document.querySelector('.falling-container');
const fallItems = ['🌸', '💖', '🌷', '❤️', '💐', '🌺', '💗'];
function createFallingItem() {
  const item = document.createElement('span');
  item.className = 'falling';
  item.innerText = fallItems[Math.floor(Math.random() * fallItems.length)];
  item.style.left = Math.random() * 100 + 'vw';
  item.style.fontSize = (Math.random() * 1.6 + 1.4) + 'em';
  item.style.animationDuration = (Math.random() * 2 + 5.5) + 's';
  item.style.opacity = Math.random() * 0.3 + 0.7;
  fallingContainer.appendChild(item);
  item.addEventListener('animationend', () => item.remove());
}
setInterval(createFallingItem, 550);

// --------- Tự động phát nhạc khi người dùng tương tác nếu bị chặn autoplay ----------
const music = document.getElementById('bg-music');
if (music) {
  music.play().catch(() => {
    const enableMusic = () => {
      music.play();
      document.body.removeEventListener('click', enableMusic);
      document.body.removeEventListener('touchstart', enableMusic);
    };
    document.body.addEventListener('click', enableMusic);
    document.body.addEventListener('touchstart', enableMusic);
  });
}
