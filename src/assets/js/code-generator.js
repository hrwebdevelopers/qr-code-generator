
const qr = document.getElementById('qrcode');

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
  var qrcode = new QRCode('qrcode', {
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
  const qrImage = document.getElementById('qr-image');
  qrImage.style.display = 'none';
  loader.style.display = 'block';
};

// Hide loader
const hideLoader = () => {
  const loader = document.getElementById('loader');
  const qrImage = document.getElementById('qr-image');
  qrImage.style.display = 'block';
  loader.style.display = 'none';
};

// Create save button to download QR code as image
const createSaveBtn = (saveUrl) => {
  const link = document.createElement('a');
  link.id = 'save-link';
  link.classList =
    'bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 rounded w-full m-auto my-5';
  link.href = saveUrl;
  link.download = 'qrcode';
  link.innerHTML = 'Guardar Imagen';
  window.scrollTo({ top: 0, behavior: "smooth" });
  document.getElementById('qr-generated').appendChild(link);
};

hideLoader();

const form = document.getElementById('qr-generate-form');
form.addEventListener('submit', onGenerate);

export default {
  onGenerate,
  generateQRCode,
  clearUI,
  showLoader,
  hideLoader
};
