async function fetchTrendingNews() {
    const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_API_KEY');
    const data = await response.json();
    displayTrendingNews(data.articles);
}

function displayTrendingNews(articles) {
    const trendingContainer = document.getElementById('trending');
    articles.forEach(article => {
        const articleElement = document.createElement('div');
        articleElement.innerHTML = `<img src="${article.urlToImage}" alt="${article.title}"><h3>${article.title}</h3><p>${article.description}</p>`;
        trendingContainer.appendChild(articleElement);
    });
}
