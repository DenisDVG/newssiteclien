// variables
//const generalBtn = document.getElementById("genral");
//const businessBtn = document.getElementById("business");
//const sportsBtn = document.getElementById("sport");
//const entertainmentBtn = document.getElementById("entertainment");
//const technologyBtn = document.getElementById("technology");
//const searchBtn = document.getElementById("searchBtn");

//const newsQuery = document.getElementById("newsQuery");
const newsType = document.getElementById("newsType");
const newsdetails = document.getElementById("newsdetails");

// Array
var newsDataArr = [];

// apis 
const API_KEY = "fc92769ac3d64cafa612e2d29067f6e1";
const HEADLINES_NEWS = "https://newsapi.org/v2/top-headlines?country=us&apiKey=";
const GENERAL_NEWS = "https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=";
const BUSINESS_NEWS = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=";
const SPORTS_NEWS = "https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=";
const ENTERTAINMENT_NEWS = "https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=";
const TECHNOLOGY_NEWS = "https://newsapi.org/v2/top-headlines?country=us&category=technology&pageSize=8&apiKey=";
const SEARCH_NEWS = "https://newsapi.org/v2/everything?q=";

window.onload = function() {
    newsType.innerHTML="<h4>Headlines</h4>";
    fetchHeadlines();
};


// generalBtn.addEventListener("click",function(){
//     newsType.innerHTML="<h4>General news</h4>";
//     fetchGeneralNews();
// });

// businessBtn.addEventListener("click",function(){
//     newsType.innerHTML="<h4>Business</h4>";
//     fetchBusinessNews();
// });

// sportsBtn.addEventListener("click",function(){
//     newsType.innerHTML="<h4>Sports</h4>";
//     fetchSportsNews();
// });

// entertainmentBtn.addEventListener("click",function(){
//     newsType.innerHTML="<h4>Entertainment</h4>";
//     fetchEntertainmentNews();
// });

// technologyBtn.addEventListener("click",function(){
//     newsType.innerHTML="<h4>Technology</h4>";
//     fetchTechnologyNews();
// });

// searchBtn.addEventListener("click",function(){
//     newsType.innerHTML="<h4>Search : "+newsQuery.value+"</h4>";
//     fetchQueryNews();
// });

const fetchHeadlines = async () => {
//     fetch("https://news193.p.rapidapi.com/", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "news193.p.rapidapi.com",
// 		"x-rapidapi-key": "07d887edadmsh927980dde538d9ep1403f3jsn5fe2edcc4e7a"
// 	}
// })
fetch("http://localhost:8000/", {
	"method": "GET",
	// "headers": {
	// 	"x-rapidapi-host": "news193.p.rapidapi.com",
	// 	"x-rapidapi-key": "07d887edadmsh927980dde538d9ep1403f3jsn5fe2edcc4e7a"
	// }
})
.then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    newsDataArr = data;
    displayNews();
  })
.catch(err => {
	console.error(err);
    console.log(response.status, response.statusText);
    newsdetails.innerHTML = "<h5>No data found.</h5>"
    return;
});

// -author: "Patrick Reilly"
// content: "Former President Donald Trump shot back at his former Vice President Mike Pence on Friday after Pence said that Trump was wrong in claiming he had the ability as vice president to overturn the 2020 e… [+2940 chars]"
// description: "Trump bashed his vice president ahead of the Capitol Hill riot for not having the “courage” to reject certified electors from Arizona, Georgia and Pennsylvania for then-President-elect Joe Biden.…"
// publishedAt: "2022-02-05T06:33:00Z"
// source:
// id: null
// name: "New York Post"
// [[Prototype]]: Object
// title: "Trump blasts Pence for calling him 'wrong,' for suggesting VP could overturn election - New York Post "
// url: "https://nypost.com/2022/02/05/donald-trump-responds-to-mike-pences-rejection-of-overturning-election/"
// urlToImage: "https://nypost.com/wp-content/uploads/sites/2/2022/02/pence-trump-077.jpg?quality=90&strip=all&w=1024"


    // const response = await fetch(HEADLINES_NEWS+API_KEY);
    // newsDataArr = [];
    // if(response.status >=200 && response.status < 300) {
    //     const myJson = await response.json();
    //     newsDataArr = myJson.articles;
    // } else {
    //     // handle errors
    //     console.log(response.status, response.statusText);
    //     newsdetails.innerHTML = "<h5>No data found.</h5>"
    //     return;
    // }

    
}


const fetchGeneralNews = async () => {
    const response = await fetch(GENERAL_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}

const fetchBusinessNews = async () => {
    const response = await fetch(BUSINESS_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}

const fetchEntertainmentNews = async () => {
    const response = await fetch(ENTERTAINMENT_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        console.log(myJson);
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}

const fetchSportsNews = async () => {
    const response = await fetch(SPORTS_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}

const fetchTechnologyNews = async () => {
    const response = await fetch(TECHNOLOGY_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}

const fetchQueryNews = async () => {

    if(newsQuery.value == null)
        return;

    const response = await fetch(SEARCH_NEWS+encodeURIComponent(newsQuery.value)+"&apiKey="+API_KEY);
    newsDataArr = [];
    if(response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        //error handle
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}

function displayNews() {

    newsdetails.innerHTML = "";

    // if(newsDataArr.length == 0) {
    //     newsdetails.innerHTML = "<h5>No data found.</h5>"
    //     return;
    // }

    newsDataArr.forEach(news => {

        // var date = news.publishedAt.split("T");
        var date = news;

        var col = document.createElement('div');
        col.className="col-sm-12 col-md-4 col-lg-3 p-2 card";

        var card = document.createElement('div');
        card.className = "p-2";

        var image = document.createElement('img');

        if(news.urlToImage)
        {
            image.setAttribute("height","matchparent");
            image.setAttribute("width","100%");
            image.src=news.urlToImage;
        }  
        

        var cardBody = document.createElement('div');
        
        var newsHeading = document.createElement('h5');
        newsHeading.className = "card-title";
        newsHeading.innerHTML = news.title;

        var dateHeading = document.createElement('h6');
        dateHeading.className = "text-primary";
        dateHeading.innerHTML = "";//date[0];

        var discription = document.createElement('p');
        discription.className="text-muted";
        discription.innerHTML = news.description;

        var link = document.createElement('a');
        link.className="btn btn-info";
        link.setAttribute("target", "_blank");
        link.href = news.url;
        link.innerHTML="Read more";

        cardBody.appendChild(newsHeading);
        cardBody.appendChild(dateHeading);
        cardBody.appendChild(discription);
        cardBody.appendChild(link);

        card.appendChild(image);
        card.appendChild(cardBody);

        col.appendChild(card);

        newsdetails.appendChild(col);
    });

}