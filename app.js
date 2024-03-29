const apiKey = "e0f38d7370a341f4969c8448b0d4031c";

const blogcontainer = document.getElementById("blog-container");

const searchField = document.getElementById("search-input");

const button = document.getElementById("btn");

// when user visits the page ,he/she should not see blank pages
async function fetchRandomNews() {
  try {
    const apiUrl = `https://newsapi.org/v2/top-headlines?sources=bbc-news&pageSize=10&apikey=${apiKey}`;

    const response = await fetch(apiUrl);

    const data = await response.json();
    // console.log(data);
    return data.articles;
  } catch (error) {
    console.error("Error fetching random news", error);
    return [];
  }
}

button.addEventListener("click", async () => {
  const query = searchField.value.trim();
  if (query != "") {
    try {
      const articles = await fetchNewsQuery(query);
      displayBlogs(articles);
    } catch (error) {
      console.log("error fetching news by query", error);
    }
  }
});

async function fetchNewsQuery(query) {
  try {
    const apiUrl = `https://newsapi.org/v2/everything?q=${query}&pageSize=10&apikey=${apiKey}`;

    const response = await fetch(apiUrl);

    const data = await response.json();
    return data.articles;
  } catch (error) {
    console.error("Error fetching random news", error);
    return [];
  }
}

// here we are making card structure as same written in html file
function displayBlogs(articles) {
  blogcontainer.innerHTML = "";
  articles.forEach((article) => {
    const blogCard = document.createElement("div");
    blogCard.classList.add("blog-card");
    const img = document.createElement("img");
    img.src = article.urlToImage;
    img.alt = article.title;
    const title = document.createElement("h2");
    // title.textContent = article.title;
    const truncatedTitle =
      article.title.length > 30
        ? article.title.slice(0, 30) + "..."
        : article.title;
    title.textContent = truncatedTitle;

    const description = document.createElement("p");
    const truncatedDescrip =
      article.description.length > 120
        ? article.description.slice(0, 120) + "..."
        : article.description;
    description.textContent = truncatedDescrip;

    blogCard.appendChild(img);
    blogCard.appendChild(title);
    blogCard.appendChild(description);
    blogCard.addEventListener("click", () => {
      window.open(article.url, "_blank");
    });
    blogcontainer.appendChild(blogCard);
  });
}
(async () => {
  try {
    const articles = await fetchRandomNews();
    displayBlogs(articles);
  } catch (error) {
    console.error("Error fetching random news", error);
    return [];
  }
})();
