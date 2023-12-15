//Funções para produtos
const inputFile = document.querySelector('#input-file1');
const labelImage1 = document.querySelector('.image1');
const labelText = 'Choose a Image';
labelImage1.innerHTML = labelText;

inputFile.addEventListener('change', function(event) {
    event.preventDefault();

    const inputTarget = event.target;
    const file = inputTarget.files[0];

    if (file) {
        const reader = new FileReader();

        reader.addEventListener('load', function(event) {
            const readerTarget = event.target;

            const img = document.createElement('img');
            img.src = readerTarget.result;
            img.classList.add('image1');
            img.classList = 'fotos';
            labelImage1.innerHTML = '';

            labelImage1.appendChild(img);
        });

        reader.readAsDataURL(file);
    }else {
        labelImage1.innerHTML = 'Choose a image';
    };
});      

const inputFile2 = document.querySelector('#input-file2');
const labelImage2 = document.querySelector('.image2');
labelImage2.innerHTML = labelText;

inputFile2.addEventListener('change', function(event) {
    event.preventDefault();

    const inputTarget = event.target;
    const file = inputTarget.files[0];

    if (file) {
        const reader = new FileReader();

        reader.addEventListener('load', function(event) {
            const readerTarget = event.target;

            const img = document.createElement('img');
            img.src = readerTarget.result;
            img.classList.add('image2');
            img.classList = 'fotos';
            labelImage2.innerHTML = '';

            labelImage2.appendChild(img);
        });

        reader.readAsDataURL(file);
    }else {
        labelImage2.innerHTML = 'Choose a image';
    };
});  

const inputFile3 = document.querySelector('#input-file3');
const labelImage3 = document.querySelector('.image3');
labelImage3.innerHTML = labelText;

inputFile3.addEventListener('change', function(event) {
    event.preventDefault();

    const inputTarget = event.target;
    const file = inputTarget.files[0];

    if (file) {
        const reader = new FileReader();

        reader.addEventListener('load', function(event) {
            const readerTarget = event.target;

            const img = document.createElement('img');
            img.src = readerTarget.result;
            img.classList.add('image3');
            img.classList = 'fotos';
            labelImage3.innerHTML = '';

            labelImage3.appendChild(img);
        });

        reader.readAsDataURL(file);
    }else {
        labelImage3.innerHTML = 'Choose a image';
    };
});  

const inputFile4 = document.querySelector('#input-file4');
const labelImage4 = document.querySelector('.image4');
labelImage4.innerHTML = labelText;

inputFile4.addEventListener('change', function(event) {
    event.preventDefault();

    const inputTarget = event.target;
    const file = inputTarget.files[0];

    if (file) {
        const reader = new FileReader();

        reader.addEventListener('load', function(event) {
            const readerTarget = event.target;

            const img = document.createElement('img');
            img.src = readerTarget.result;
            img.classList.add('image4');
            img.classList = 'fotos';
            labelImage4.innerHTML = '';

            labelImage4.appendChild(img);
        });

        reader.readAsDataURL(file);
    }else {
        labelImage4.innerHTML = 'Choose a image';
    };
});

const inputFile5 = document.querySelector('#input-file5');
const labelImage5 = document.querySelector('.image5');
labelImage5.innerHTML = labelText;

inputFile5.addEventListener('change', function(event) {
    event.preventDefault();

    const inputTarget = event.target;
    const file = inputTarget.files[0];

    if (file) {
        const reader = new FileReader();

        reader.addEventListener('load', function(event) {
            const readerTarget = event.target;

            const img = document.createElement('img');
            img.src = readerTarget.result;
            img.classList.add('image5');
            img.classList = 'fotos';
            labelImage5.innerHTML = '';

            labelImage5.appendChild(img);
        });

        reader.readAsDataURL(file);
    }else {
        labelImage5.innerHTML = 'Choose a image';
    };
});

const inputFile6 = document.querySelector('#input-file6');
const labelImage6 = document.querySelector('.image6');
labelImage6.innerHTML = labelText;

inputFile6.addEventListener('change', function(event) {
    event.preventDefault();

    const inputTarget = event.target;
    const file = inputTarget.files[0];

    if (file) {
        const reader = new FileReader();

        reader.addEventListener('load', function(event) {
            const readerTarget = event.target;

            const img = document.createElement('img');
            img.src = readerTarget.result;
            img.classList.add('image6');
            img.classList = 'fotos';
            labelImage6.innerHTML = '';

            labelImage6.appendChild(img);
        });

        reader.readAsDataURL(file);
    }else {
        labelImage6.innerHTML = 'Choose a image';
    };
});

const inputFile7 = document.querySelector('#input-file7');
const labelImage7 = document.querySelector('.image7');
labelImage7.innerHTML = labelText;

inputFile7.addEventListener('change', function(event) {
    event.preventDefault();

    const inputTarget = event.target;
    const file = inputTarget.files[0];

    if (file) {
        const reader = new FileReader();

        reader.addEventListener('load', function(event) {
            const readerTarget = event.target;

            const img = document.createElement('img');
            img.src = readerTarget.result;
            img.classList.add('image7');
            img.classList = 'fotos';
            labelImage7.innerHTML = '';

            labelImage7.appendChild(img);
        });

        reader.readAsDataURL(file);
    }else {
        labelImage7.innerHTML = 'Choose a image';
    };
});

const inputFile8 = document.querySelector('#input-file8');
const labelImage8 = document.querySelector('.image8');
labelImage8.innerHTML = labelText;

inputFile8.addEventListener('change', function(event) {
    event.preventDefault();

    const inputTarget = event.target;
    const file = inputTarget.files[0];

    if (file) {
        const reader = new FileReader();

        reader.addEventListener('load', function(event) {
            const readerTarget = event.target;

            const img = document.createElement('img');
            img.src = readerTarget.result;
            img.classList.add('image8');
            img.classList = 'fotos';
            labelImage8.innerHTML = '';

            labelImage8.appendChild(img);
        });

        reader.readAsDataURL(file);
    }else {
        labelImage8.innerHTML = 'Choose a image';
    };
});

const inputFile9 = document.querySelector('#input-file9');
const labelImage9 = document.querySelector('.image9');
labelImage9.innerHTML = labelText;

inputFile9.addEventListener('change', function(event) {
    event.preventDefault();

    const inputTarget = event.target;
    const file = inputTarget.files[0];

    if (file) {
        const reader = new FileReader();

        reader.addEventListener('load', function(event) {
            const readerTarget = event.target;

            const img = document.createElement('img');
            img.src = readerTarget.result;
            img.classList.add('image9');
            img.classList = 'fotos';
            labelImage9.innerHTML = '';

            labelImage9.appendChild(img);
        });

        reader.readAsDataURL(file);
    }else {
        labelImage9.innerHTML = 'Choose a image';
    };
});

//Funções para estoque
const inputFile10 = document.querySelector('#input-file10');
const labelImage10 = document.querySelector('.image10');
labelImage10.innerHTML = labelText;

inputFile10.addEventListener('change', function(event) {
    event.preventDefault();

    const inputTarget = event.target;
    const file = inputTarget.files[0];

    if (file) {
        const reader = new FileReader();

        reader.addEventListener('load', function(event) {
            const readerTarget = event.target;

            const img = document.querySelector('img');
            img.src = readerTarget.result;
            img.classList.add('image10');
            img.classList = 'fotos';
            labelImage10.innerHTML = '';

            labelImage10.appendChild(img);
        });

        reader.readAsDataURL(file);
    }else {
        labelImage10.innerHTML = 'Choose a image';
    };
});

const inputFile11 = document.querySelector('#input-file11');
const labelImage11 = document.querySelector('.image11');
labelImage11.innerHTML = labelText;

inputFile11.addEventListener('change', function(event) {
    const inputTarget = event.target;
    const file = inputTarget.files[0];

    if (file) {
        const reader = new FileReader();

        reader.addEventListener('load', function(event) {
            const readerTarget = event.target;

            const img = document.querySelector('img');
            img.src = readerTarget.result;
            img.classList.add('image11');
            img.classList = 'fotos';
            labelImage11.innerHTML = '';

            labelImage11.appendChild(img);
        });

        reader.readAsDataURL(file);
    }else {
        labelImage11.innerHTML = 'Choose a image';
    };
});

const inputFile12 = document.querySelector('#input-file12');
const labelImage12 = document.querySelector('.image12');
labelImage12.innerHTML = labelText;

inputFile12.addEventListener('change', function(event) {
    const inputTarget = event.target;
    const file = inputTarget.files[0];

    if (file) {
        const reader = new FileReader();

        reader.addEventListener('load', function(event) {
            const readerTarget = event.target;

            const img = document.querySelector('img');
            img.src = readerTarget.result;
            img.classList.add('image12');
            img.classList = 'fotos';
            labelImage12.innerHTML = '';

            labelImage12.appendChild(img);
        });

        reader.readAsDataURL(file);
    }else {
        labelImage12.innerHTML = 'Choose a image';
    };
});

const inputFile13 = document.querySelector('#input-file13');
const labelImage13 = document.querySelector('.image13');
labelImage13.innerHTML = labelText;

inputFile13.addEventListener('change', function(event) {
    const inputTarget = event.target;
    const file = inputTarget.files[0];

    if (file) {
        const reader = new FileReader();

        reader.addEventListener('load', function(event) {
            const readerTarget = event.target;

            const img = document.querySelector('img');
            img.src = readerTarget.result;
            img.classList.add('image13');
            img.classList = 'fotos';
            labelImage13.innerHTML = '';

            labelImage13.appendChild(img);
        });
        
        reader.readAsDataURL(file);
    }else {
        labelImage13.innerHTML = 'Choose a image';
    };
});


const inputFile14 = document.querySelector('#input-file14');
const labelImage14 = document.querySelector('.image14');
labelImage14.innerHTML = labelText;

inputFile14.addEventListener('change', function(event) {
    const inputTarget = event.target;
    const file = inputTarget.files[0];

    if (file) {
        const reader = new FileReader();

        reader.addEventListener('load', function(event) {
            const readerTarget = event.target;

            const img = document.querySelector('img');
            img.src = readerTarget.result;
            img.classList.add('image14');
            img.classList = 'fotos';
            labelImage14.innerHTML = '';

            labelImage14.appendChild(img);
        });

        reader.readAsDataURL(file);
    }else {
        labelImage14.innerHTML = 'Choose a image';
    };
});

const inputFile15 = document.querySelector('#input-file15');
const labelImage15 = document.querySelector('.image15');
labelImage15.innerHTML = labelText;

inputFile15.addEventListener('change', function(event) {
    const inputTarget = event.target;
    const file = inputTarget.files[0];

    if (file) {
        const reader = new FileReader();

        reader.addEventListener('load', function(event) {
            const readerTarget = event.target;

            const img = document.querySelector('img');
            img.src = readerTarget.result;
            img.classList.add('image15');
            img.classList = 'fotos';
            labelImage15.innerHTML = '';

            labelImage15.appendChild(img);
        });
        reader.readAsDataURL(file);
    }else {
        labelImage15.innerHTML = 'Choose a image';
    };
});

const inputFile16 = document.querySelector('#input-file16');
const labelImage16 = document.querySelector('.image16');
labelImage16.innerHTML = labelText;

inputFile16.addEventListener('change', function(event) {
    const inputTarget = event.target;
    const file = inputTarget.files[0];

    if (file) {
        const reader = new FileReader();

        reader.addEventListener('load', function(event) {
            const readerTarget = event.target;

            const img = document.querySelector('img');
            img.src = readerTarget.result;
            img.classList.add('image16');
            img.classList = 'fotos';
            labelImage16.innerHTML = '';

            labelImage16.appendChild(img);
        });
        reader.readAsDataURL(file);
    }else {
        labelImage16.innerHTML = 'Choose a image';
    };
});

const inputFile17 = document.querySelector('#input-file17');
const labelImage17 = document.querySelector('.image17');
labelImage17.innerHTML = labelText;

inputFile17.addEventListener('change', function(event) {
    const inputTarget = event.target;
    const file = inputTarget.files[0];

    if (file) {
        const reader = new FileReader();

        reader.addEventListener('load', function(event) {
            const readerTarget = event.target;

            const img = document.querySelector('img');
            img.src = readerTarget.result;
            img.classList.add('image17');
            img.classList = 'fotos';
            labelImage17.innerHTML = '';

            labelImage17.appendChild(img);
        });

        reader.readAsDataURL(file);
    }else {
        labelImage17.innerHTML = 'Choose a image';
    };
});

const inputFile18 = document.querySelector('#input-file18');
const labelImage18 = document.querySelector('.image18');
labelImage18.innerHTML = labelText;

inputFile18.addEventListener('change', function(event) {
    const inputTarget = event.target;
    const file = inputTarget.files[0];

    if (file) {
        const reader = new FileReader();

        reader.addEventListener('load', function(event) {
            const readerTarget = event.target;

            const img = document.querySelector('img');
            img.src = readerTarget.result;
            img.classList.add('image18');
            img.classList = 'fotos';
            labelImage18.innerHTML = '';

            labelImage18.appendChild(img);
        });

        reader.readAsDataURL(file);
    }else {
        labelImage18.innerHTML = 'Choose a image';
    };
});

