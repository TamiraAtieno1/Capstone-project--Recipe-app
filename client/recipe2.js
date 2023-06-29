const searchForm = document.querySelector("form");
const searchResultDiv = document.querySelector(".search-result");
const container = document.querySelector(".container");
let searchQuery = "";
const APP_ID ='47adb569';
const APP_KEY ='5eac3a7f1f2c9da71715d24affa585f2';
const baseURL =`https://api.edamam.com/api/recipes/v2?q=pizza&app_id${APP_ID}&app_keyid${APP_KEY}`;


searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    searchQuery = e.target.querySelector("input").value;
    fetchAPI();
});

async function fetchAPI (){
    const baseURL =`https://api.edamam.com/api/recipes/v2?q=pizza&app_id${APP_ID}&app_keyid${APP_KEY}`;
    const response = await fetch(baseURL);
    const data =await response.json();
    console.log(response);
    // generateHTML(data.hits);
    // console.log(data);
}
// function generateHTML(results){
//     let generatedHTML = "";
//     results.map(results => {
//         generatedHTML += 
//         `
//         <div class="item">
//                     <img src="" alt="pizza">
//                     <div class="flex-container">
//                         <h1 class="title">This is a recipe</h1>
//                         <a class="view-button" href="#">View Recipe</a>
//                     </div>
//                     <p class="item-data">Calories: 120</p>
//                 </div>
        
//         `

//     })
//     searchResultDiv.innerHTML = generatedHTML;
// }