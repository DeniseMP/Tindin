carousel = (function(){
    var box = document.querySelector('.carousel');
    var next = box.querySelector('.proxima');
    var prev = box.querySelector('.anterior');
    var items = box.querySelectorAll('.conteudo li');
    var ind = box.querySelectorAll('.carousel-indicators li')
    var counter = 0;
    var amount = items.length;
    var current = items[0];
    var indvet = ind[0];
    
    function navigate(direction) {
    current.classList.remove('atual');
    indvet.classList.remove('active');
    counter = counter + direction;
    if (direction === -1 && 
    counter < 0) { 
    counter = amount - 1; 
    }
    if (direction === 1 && 
    !items[counter]) { 
    counter = 0;
    }
    current = items[counter];
    indvet = ind[counter];
    current.classList.add('atual');
    indvet.classList.add('active');
    }
    next.addEventListener('click', function(ev) {
    navigate(1);
    });
    prev.addEventListener('click', function(ev) {
    navigate(-1);
    });
    navigate(0);
    })();