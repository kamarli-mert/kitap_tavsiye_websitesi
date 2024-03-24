// Kitaplar için tıklama olayı ekleme
document.querySelectorAll('article').forEach(item => {
    item.addEventListener('click', event => {
      // Tıklanan kitap hakkında bilgilendirme metni olan yeni bir sayfa oluştur
      window.location.href = "kitap_bilgisi.html";
    });
  });
  