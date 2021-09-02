const searchInput = document.getElementById('search-Input')
const searchButton = document.getElementById('search-button')


searchButton.addEventListener('click' ,function(){
    const searchText = searchInput.value
    searchInput.value = '';

    const url = `https://openlibrary.org/search.json?q=${searchText}`
    

    fetch (url)
    .then(res => res.json())
    .then(data => console.log(data.docs))
    
})
