const canvas = document.getElementById("previewCanvas");
const ctx = canvas.getContext("2d");

const backgroundImage = new Image();
backgroundImage.src = "background.jpg";

backgroundImage.onload = () => {
  drawCanvas();
};

backgroundImage.onerror = () => {
  console.error("Ошибка: фоновая картинка не найдена!");
  ctx.fillStyle = "red";
  ctx.font = "30px Arial";
  ctx.fillText("Ошибка: Картинка не загружена!", 100, 100);
};

function drawCanvas() {
  const namesInput = document.getElementById("names").value.trim();
  const date = document.getElementById("date").value.trim();
  const time = document.getElementById("time").value.trim();

  const formattedNames = namesInput.split(/\s+/).join(" и ");
  const formattedDateTime = `${date} в ${time}`;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

  // Имена
  ctx.font = 'bold 150px "Bebas Neue", sans-serif';
  ctx.fillStyle = "#0efb07";
  ctx.textAlign = "center";
  ctx.fillText(formattedNames, canvas.width / 2, 695);

  // Дата и время
  ctx.font = 'bold 100px "Bebas Neue", sans-serif';
  ctx.fillStyle = "#ffffff";
  ctx.textAlign = "center";
  ctx.fillText(formattedDateTime, canvas.width / 2, 985);
}

document.querySelectorAll("input").forEach((input) => {
  input.addEventListener("input", drawCanvas);
});

function downloadImage() {
  const link = document.createElement("a");
  link.download = "приглашение.png";
  link.href = canvas.toDataURL("image/png");
  link.click();
}