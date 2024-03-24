document.querySelectorAll('article').forEach(item => {
    item.addEventListener('click', event => {
      window.location.href = "kitap_bilgisi.html";
    });
  });
  
