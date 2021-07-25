const btn = document.getElementById('btn_upload');
const inputUpload = document.getElementById('upload');
const fileName = document.getElementById('file_name');

inputUpload.style.display = 'none';

btn.addEventListener ('click', () => {

    inputUpload.click();
});

inputUpload.addEventListener('change', (e) => {

    console.log(inputUpload.value);
    if (inputUpload.value) {
        fileName.innerText = inputUpload.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
    }

});

// Regular expression
//  /[\/\\]([\w\d\s\.\-\(\)]+)$/