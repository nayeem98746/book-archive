const searchInput = document.getElementById('search-Input')
const searchButton = document.getElementById('search-button')
const errorHandle =document.getElementById('error')


searchButton.addEventListener('click' ,function(){
    const searchText = searchInput.value
    searchInput.value= '';
    if(searchText === ''){
        // errorHandle.innerText= "Search field cannot be empty"

        errorHandle.innerHTML = `
        <h1 class="text-center text-warning d-inline bg-secondary " > Search field cannot be Empty</h1>
        `
        return

    }    
    
    else{    
    const url = `https://openlibrary.org/search.json?q=${searchText}`

    fetch (url)
    .then(res => res.json())
    .then(data => displayResult(data.docs))
    .finally(() => searchInput.value === "")
    
    }
    
    
})


const displayResult = books =>{
    // console.log(books)
    const searchResult = document.getElementById('search-result')
    searchResult.textContent = '';
    if(books.length === 0){
        errorHandle.innerHTML = `<h1 class="text-center text-warning d-inline bg-secondary rounded" >No Result Found</h1>` 
    }
  
    books.forEach(book => {
        // console.log(book)
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML= `
        <div class="card">
                <img src=" https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                     <h5 class="card-title">${book.title}</h5>
                     <h4>${book.author_name}</h4>
                     <h6>${book.publish_date}</h6>
                     <p class="card-text"></p>
                </div>
          </div>
        `
        searchResult.appendChild(div)
    });


}