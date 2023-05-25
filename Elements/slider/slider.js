const slideContainer = document.getElementById('1')
const slides = slideContainer.getElementsByClassName('slide')

const pointerBox = document.createElement('div')
pointerBox.className = "pointer-container"

for (let i = 0; i < slides.length; ++i) {
    const pointer = document.createElement('div')
    pointer.className = 'pointer'
    pointer.setAttribute('onclick', "changeSlide(" + i + ")")
    pointerBox.appendChild(pointer)
}

slideContainer.appendChild(pointerBox)


function changeSlide(slideNo) {
    let inSlideNo = 0;
    for (let i = 0; i < slides.length; i++) {
        if (slides[i].classList.contains('slide-in')) {
            inSlideNo = i;
            if (i != slideNo) {
                slides[i].classList.remove('slide-in')
                slides[i].classList.remove('slide-in-left')
                slides[i].classList.remove('slide-in-right')
                slides[i].classList.add('slide-out')
                
                setTimeout(() => {
                    slides[i].style.display = 'none'
                  }, 1000);
            }
            if (i > slideNo) {
                slides[i].classList.add('slide-out-right')
            }
            else if (i < slideNo) {
                slides[i].classList.add('slide-out-left')
            }
        }
    }
    if (inSlideNo != slideNo) {
        setTimeout(() => {
            slides[slideNo].style.display = ''
          }, 0);
        slides[slideNo].classList.remove('slide-out')
        slides[slideNo].classList.remove('slide-out-left')
        slides[slideNo].classList.remove('slide-out-right')
        slides[slideNo].classList.add('slide-in')
        if (inSlideNo < slideNo) {
            slides[slideNo].classList.add('slide-in-right')
        }
        else {
            slides[slideNo].classList.add('slide-in-left')
        }
    }
}
