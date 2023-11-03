function validateForm() {
  // Validasi nama lengkap
  const fname = document.getElementById('fname');
  if (fname.value === '') {
    alert('Nama lengkap harus diisi!');
    fname.focus();
    return false;
  }

  // Validasi email
  const email = document.getElementById('email');
  if (email.value === '') {
    alert('Email harus diisi!');
    email.focus();
    return false;
  } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
    alert('Email tidak valid!');
    email.focus();
    return false;
  }

  // Validasi apakah tinggal di Indonesia
  const yes = document.getElementById('yes');
  const no = document.getElementById('no');
  if (!yes.checked && !no.checked) {
    alert('Apakah Anda tinggal di Indonesia?');
    yes.focus();
    return false;
  }

  // Validasi apakah menyukai kucing
  const cat1 = document.getElementById('cat1');
  const cat2 = document.getElementById('cat2');
  const cat3 = document.getElementById('cat3');
  if (!cat1.checked && !cat2.checked && !cat3.checked) {
    alert('Anda harus memilih setidaknya satu alasan mengapa Anda menyukai kucing!');
    cat1.focus();
    return false;
  }

  // Validasi alasan menyukai kucing
  const catstext = document.getElementById('catstext');
  if (catstext.value === '') {
    alert('Alasan menyukai kucing harus diisi!');
    catstext.focus();
    return false;
  }

  // Validasi gambar kucing
  const mycat = document.getElementById('mycat');
  if (mycat.files.length === 0) {
    alert('Gambar kucing harus diunggah!');
    mycat.focus();
    return false;
  } else if (!['image/jpeg', 'image/png'].includes(mycat.files[0].type)) {
    alert('Gambar kucing harus berformat JPEG atau PNG!');
    mycat.focus();
    return false;
  }
  // Jika semua validasi berhasil, kembalikan true
  return true;
}

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}