const links = document.querySelectorAll('a');
let prev_pos = 0;
links.forEach(link => {
    link.classList.add('fancyHover')
    link.addEventListener('mouseover', (event) => {
        // compare from prev element
        /*let curr_pos = link.getBoundingClientRect().left;
        if (curr_pos > prev_pos) { // left to right
            link.style.setProperty('--fdir', 'left');
            link.style.setProperty('--tdir', 'right');
        }
        if (curr_pos < prev_pos) { // right to left
            link.style.setProperty('--fdir', 'right');
            link.style.setProperty('--tdir', 'left');
        }
        prev_pos = curr_pos;*/

        // compare from mouse direction
        let curr_pos = link.getBoundingClientRect().left + link.getBoundingClientRect().width/2;
        if (curr_pos > event.clientX) { // left to right
            link.style.setProperty('--fdir', 'left');
            link.style.setProperty('--tdir', 'right');
        }
        if (curr_pos < event.clientX) { // right to left
            link.style.setProperty('--fdir', 'right');
            link.style.setProperty('--tdir', 'left');
        }
    })
})