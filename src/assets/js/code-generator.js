const qr = document.getElementById('qrcode');
const form = document.getElementById('qr-generate-form');
import 'qrcodejs';
var QRCode;

// SUBMIT ACTION
const onGenerate = (e) => {
  e.preventDefault();

  clearUI();

  const url = document.getElementById('url').value;
  const size = document.getElementById('size').value;

  // URL VALIDATION
  if (url === '') alert('Porfavor ingresar un URL');
  else {
    showLoader()
    setTimeout(() => {
      hideLoader();
      generateQRCode(url, size);
      // CREATE SAVE IMAGE BUTTON
      setTimeout(() => {
        const saveUrl = qr.querySelector('img').src;
        createSaveBtn(saveUrl);
      }, 50);
    }, 1000);
  }
};

// Generate QR code
const generateQRCode = (url, size) => {
  const qrcode = new QRCode('qrcode', {
    text: url,
    width: size,
    height: size,
  });
};


// Clear QR code and save button
const clearUI = () => {
  qr.innerHTML = '';
  const saveBtn = document.getElementById('save-link');
  if (saveBtn) {
    saveBtn.remove();
  }
};

// Show loader
const showLoader = () => {
  const loader = document.getElementById('loader');
  loader.style.display = 'block';
};

// Hide loader
const hideLoader = () => {
  const loader = document.getElementById('loader');
  loader.style.display = 'none';
};

// Create save button to download QR code as image
const createSaveBtn = (saveUrl) => {
  const link = document.createElement('a');
  link.id = 'save-link';
  link.classList =
    'bg-red-500 hover:bg-red-700 text-white font-bold py-2 rounded w-1/3 m-auto my-5';
  link.href = saveUrl;
  link.download = 'qrcode';
  link.innerHTML = 'Guardar Imagen';
  document.getElementById('qr-generated').appendChild(link);
};

hideLoader();

form.addEventListener('submit', onGenerate);
