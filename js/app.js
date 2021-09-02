const searchInput = document.getElementById('search-Input')
const searchButton = document.getElementById('search-button')
const errorHandle =document.getElementById('error')


searchButton.addEventListener('click' ,function(){
    const searchText = searchInput.value
    searchInput.value= '';
    if(searchText === ''){
        errorHandle.innerHTML = `
        <h1 class="text-center text-warning d-inline bg-secondary " > Search field cannot be Empty</h1>
        `
    }    
    else {
    
        const url = `https://openlibrary.org/search.json?q=${searchText}`

    fetch (url)
    .then(res => res.json())
    .then(data => displayResult(data.docs))
        
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
                <img src="${book.cover_i}" class="card-img-top" alt="...">
                <div class="card-body">
                     <h5 class="card-title">${book.title}</h5>
                     <h4>${book.author_name}</h4>
                     <h6>${book.publish_date}</h6>
                     <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                </div>
          </div>
        `
        searchResult.appendChild(div)
    });


}