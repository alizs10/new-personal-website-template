// add fonts
import './styles/fonts/manototv/manototvkalamefont.eot';
import './styles/fonts/manototv/manototvkalamefont.ttf';
import './styles/fonts/manototv/manototvkalamefont.woff';
import './styles/fonts/manototv/manototvkalamefont.woff2';
import './styles/fonts/manototv/stylesheet.css';
import './styles/fontawesome/css/all.min.css';
import './js/all.min';
import './assets/placeholder-square.png';

const back = () => {
    var samples = document.querySelectorAll('#samples-container div');
    var samplesContainer = document.getElementById('samples-container');
    var width = samples[0].clientWidth;
    var currentPosition = samplesContainer.scrollLeft;

    samplesContainer.scroll({
        left: (- width + currentPosition),
        behavior: 'smooth'
    });
}


const forward = () => {
    var samples = document.querySelectorAll('#samples-container div');
    var samplesContainer = document.getElementById('samples-container');
    var width = samples[0].clientWidth;
    var currentPosition = samplesContainer.scrollLeft;
    console.log(currentPosition);
    samplesContainer.scroll({
        left: (width + currentPosition),
        behavior: 'smooth'
    });
}

const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');

prevBtn.addEventListener('click', back);
nextBtn.addEventListener('click', forward);