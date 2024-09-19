function performSearch() {
    const query = document.getElementById('search-bar').value;
    // Simulate search results
    const results = [
        { title: 'Result 1', description: 'Description for result 1' },
        { title: 'Result 2', description: 'Description for result 2' },
    ];
    displayResults(results);
}

function displayResults(results) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';
    results.forEach(result => {
        const resultElement = document.createElement('div');
        resultElement.innerHTML = `<h2>${result.title}</h2><p>${result.description}</p>`;
        resultsContainer.appendChild(resultElement);
    });
}
