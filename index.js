const textalaniE = document.getElementById("textalani");
const toplamSayiE = document.getElementById("toplam-sayi");
const kalanSayiE = document.getElementById("kalan-sayi");

textalaniE.addEventListener("keyup", () => {
  guncelSayici();
});

function guncelSayici() {
  toplamSayiE.innerText = textalaniE.value.length;
  kalanSayiE.innerText =
    textalaniE.getAttribute("maxLength") - textalaniE.value.length;
}