/*
 * Udacity Front End Developer NanoDegree Program
 * 
 * Premium Cat Clicker Version 1
 * 
 * By Carlos Fins
 * 
 * https://github.com/clockwerkz
 * 
 * 
*/


// Cat Model Object
const model = function() {
    let selectedCat;
    const cats = [
        { name : 'Cleo',
        clickCount : 0,
        altText : 'Kitten Cleo with her siblings',
        img : 'img/q-aila-162475-unsplash.jpg',
        selected : false},
        { name : 'Clyde',
        clickCount : 0,
        altText : 'Clyde being lazy on the arm of a couch',
        img : 'img/sabri-tuzcu-213760-unsplash.jpg',
        selected : false},
        { name : 'Bonnie',
        clickCount : 0,
        altText : 'Bonnie looking up to see if it\'s snack time',
        img : 'img/bonnie.jpg',
        selected : false},
        { name : 'Max',
        clickCount : 0,
        altText : 'Something catches Max\'s eye while on the street',
        img : 'img/max.jpg',
        selected : false},
        { name : 'Noah',
        clickCount : 0,
        altText : 'Noah playing with a string of yarn while on a plastic chair',
        img : 'img/noah.jpg',
        selected : false}
    ];


    return {
        selectedCat,
        cats
    }
}();


//List View handles the list of cats on the aside section
const listView = function() {
    const catList = document.querySelector('#cat-list .list-of-cats');
    
    const render = (cats) => {
        catList.innerHTML = '';
        for (let cat of cats) {
            catList.innerHTML += "<li class='cat-item" + (cat.selected ? " cat-selected" : "") + "'>"+cat.name+"</li>"; 
        }
    } 

    catList.addEventListener('click', (e) => {
        octopus.selectCat(e.target.textContent);
    });

    return {
        render
    };
}();


//Cat View Object displays the selected Cat in the main section
const catView = function() {
    const catClicker = document.getElementById('cat-clicker');
    const catEntry = catClicker.querySelector('.cat-entry');
    

    const init = () => {
        catEntry.addEventListener("click", octopus.clickCounter);
        render();
    }

    const render = (cat) => {
        catEntry.innerHTML =  `
                <div class='entry-body'>
                    <img src='${cat.img}' class='cat-img' alt='${cat.altText}'/>
                    <h2 class='cat-name'>${cat.name}</h2>
                </div> <!-- .entry-body -->
                <h2>Clicked: <span class="click-count">${cat.clickCount}</span>
        
        `;
    }

    return {
        init,
        render
    }
}();


// Octopus Object
const octopus = function() {

    const init = () => {
        model.cats.sort((a,b) => a.name > b.name );
        selectCat(model.cats[0].name);
        listView.render(model.cats);
        catView.init();
    }

    const selectCat = (name) => {
        const cat = model.cats.filter(cat => cat.name === name)[0];
        if (model.selectedCat) model.selectedCat.selected = false;
        model.selectedCat = cat;
        model.selectedCat.selected = true;
        catView.render(cat);
        listView.render(model.cats);

    }

    const clickCounter = () => {
        if (model.selectedCat) {
            model.selectedCat.clickCount++;
            catView.render(model.selectedCat);
        }
    }

    return {
        init,
        selectCat,
        clickCounter
    }

}();

octopus.init();




