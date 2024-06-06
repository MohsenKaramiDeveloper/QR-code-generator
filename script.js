const generateBtn = document.querySelector('form button');
const qrCodeBox = document.querySelector('.qr-code');
const qrInput = document.querySelector('form input');
const qrImage = document.querySelector('.qr-code img');


generateBtn.addEventListener('click' , () => {
    let qrValue = qrInput.value;
    if(!qrValue){
        return alert( 'please inter your text or link')
    }
    qrCodeBox.classList.remove('hidden')

    qrImage.crs = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`
})

