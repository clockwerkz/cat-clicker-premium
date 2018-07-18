const catClicker = document.getElementById('cat-clicker');

const cats = [
    { name : 'Cleo',
      clickCount : 0,
      altText : 'Kitten Cleo with her siblings',
      img : 'img/q-aila-162475-unsplash.jpg'},
      { name : 'Clyde',
      clickCount : 0,
      altText : 'Clyde being lazy on the arm of a couch',
      img : 'img/sabri-tuzcu-213760-unsplash.jpg'},
      { name : 'Bonnie',
      clickCount : 0,
      altText : 'Bonnie looking up to see if it\'s snack time',
      img : 'img/bonnie.jpg'},
      { name : 'Max',
      clickCount : 0,
      altText : 'Something catches Max\'s eye while on the street',
      img : 'img/max.jpg'},
      { name : 'Noah',
      clickCount : 0,
      altText : 'Noah playing with a string of yarn while on a plastic chair',
      img : 'img/noah.jpg'}
];

cats.sort((a,b) => a.name > b.name );

const catList = document.querySelector('aside .list-of-cats');
for (let cat of cats) {
    catList.innerHTML += `<li class='cat-item'>${cat.name}</li>`
}

catList.addEventListener('click', (e) => {
    updateDisplay(e.target.textContent);
});

const updateDisplay = (name) => {
    let catEntry = document.createElement('div');
    const cat = cats.filter(cat => cat.name === name)[0];
    catEntry.innerHTML =  `
            <div class='entry-body'>
                <img src='${cat.img}' class='cat-img' alt='${cat.altText}'/>
                <h2 class='cat-name'>${cat.name}</h2>
            </div> <!-- .entry-body -->
            <h2>Clicked: <span class="click-count">${cat.clickCount}</span>
    
    `;
    catEntry.classList.add('cat-entry');
    catEntry.addEventListener("click", function(e) {
        let counter = this.querySelector('.click-count');
        let newCount = parseInt(counter.innerHTML)+1;
        const name = this.querySelector('.cat-name').textContent;
        const cat = cats.filter(cat => cat.name === name)[0];
        cat.clickCount = newCount;
        counter.innerHTML = newCount;
    });
    catClicker.innerHTML = '';
    catClicker.appendChild(catEntry);
}

