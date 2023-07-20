/*
 *This fun little application is based on jikan-api , the unofficial api of myanimelist
 * Here's the main logic of app in a nutshell:
 *      form-Event-listener > getQuery for search term from listener> fetch() for 
      *      asynchronously getting request from api using our search term > ElementAdd()
      *      to add a 'card' to our main app . It receives: 1.title of show
      *      2.image link of show 3. status of the show from our json which we got from 
      *      api   
 fetch() for 
      *      asynchronously getting request from api using our search term > ElementAdd()
      *      to add a 'card' to our main app . It receives: 1.title of show
      *      2.image link of show 3. status of the show from our json which we got from 
      *      api   
  fetch() for 
      *      asynchronously getting request from api using our search term > ElementAdd()
      *      to add a 'card' to our main app . It receives: 1.title of show
      *      2.image link of show 3. status of the show from our json which we got from 
      *      api   
     * */



const ElementRemove = () => {

    const cards = document.querySelectorAll(".card")
        const cont = document.querySelector('.contain')
    let len = cards.length;

    //console.log(`${len} fdsasdafsadf`)

    while(len != 0){

        len -=1;
       cont.removeChild(cards[len])
    }

}



const ElementAdd = (title, img, stat, link) => {

    const contain = document.querySelector('.contain') ;
    let newCard = document.createElement('div');
    newCard.classList.toggle('card');

    newCard.innerHTML = `<a href=${link}  target="__blank" ><div class="name">${title}</div><img src="${img}" class="img"><div class="stat">${stat}</div></a>`;
    newCard.append(name);
    contain.append(newCard);
}

const fetch = async (word)=> {


    try{
    const opts = {
        params:{
            q : word
        }
    };

    const response = await axios.get("https://api.jikan.moe/v4/anime", opts);
    const data = await  response.data.data;
    console.log(`JSON fetched successfully with ${data.length} entries`)


    for(let element of data){
        let  img = element.images.jpg.large_image_url;
        let  title = element.title;
        let  stat = element.status;
        let link = element.url;


        ElementAdd(title, img, stat, link);
    }
    } catch{(e) => {
        console.log('error occured while fetching data from api');
        console.log(e);

    }




}
}


const getQuery = () => {

    let searchBar = document.querySelector('.search-box');
    let query = searchBar.value;
    fetch(query);
}

/*
let img = "https://cdn.myanimelist.net/images/anime/13/17405l.jpg"
let title = "naruto"
let stat = "completed";
*/
let searchBar = document.querySelector('.search');
    let query = searchBar.value;


const form = document.querySelector('#search-form')

form.addEventListener('submit',(e) => {
        e.preventDefault();
        ElementRemove();
         getQuery();
        // console.log(form.elements.query.value);
        // console.log(searchBar.value);
   })




// search Animation

const searchButton = document.querySelector('.search-button');
const search = document.querySelector('.search');

searchButton.addEventListener('click', function() {

    search.classList.toggle('open');

})

