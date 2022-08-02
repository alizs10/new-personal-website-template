// add fonts
import './styles/fonts/manototv/manototvkalamefont.eot';
import './styles/fonts/manototv/manototvkalamefont.ttf';
import './styles/fonts/manototv/manototvkalamefont.woff';
import './styles/fonts/manototv/manototvkalamefont.woff2';
import './styles/fonts/manototv/stylesheet.css';
import './styles/fontawesome/css/all.min.css';
import './js/all.min';


const toggleGitLinks = () => {
    var gitLinksContainer = document.getElementById('git-links-container');
    toggleGitLinksBtn.classList.toggle('bg-white')
    toggleGitLinksBtn.classList.toggle('text-[#200461]')

    if (gitLinksContainer.classList.contains('hidden')) {
        gitLinksContainer.style.opacity = '0';
        gitLinksContainer.classList.remove('hidden');
        gitLinksContainer.classList.add('flex');
        gitLinksContainer.style.opacity = '1';
    } else {
        gitLinksContainer.style.opacity = '0';
        gitLinksContainer.classList.add('hidden');
        gitLinksContainer.classList.remove('flex');
        gitLinksContainer.style.opacity = '1';
    }







}


const toggleGitLinksBtn = document.getElementById('toggle-git-links-btn');

toggleGitLinksBtn.addEventListener('click', toggleGitLinks);