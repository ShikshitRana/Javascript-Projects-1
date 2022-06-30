const triggers = document.querySelectorAll('a');
    const highlight = document.createElement('span');
    highlight.classList.add('highlight');
    document.body.appendChild(highlight);
    
    function highlightLink()
    {
        const linkCoords = this.getBoundingClientRect();
        const coords = {
            width: linkCoords.width ,
            height: linkCoords.height,
            left: linkCoords.left+window.scrollX,
            top: linkCoords.top+window.scrollY
        };

        highlight.style.width = `${coords.width+4}px`;
        highlight.style.height = `${coords.height}px`;
        highlight.style.transform= `translate(${coords.left-2}px,${coords.top}px)`;
    }

    triggers.forEach(e=>e.addEventListener('mouseenter', highlightLink));