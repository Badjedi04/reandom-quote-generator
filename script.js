async function getQuote() {
    const apiURL = "https://api.quotable.io/random";
    
    try {
        const response = await fetch(apiURL);
        if (!response.ok) throw new Error("API response not OK");

        const data = await response.json();
        document.getElementById("quote").innerText = data.content;
        document.getElementById("author").innerText = "- " + data.author;

        // Store the current quote in a global variable
        window.currentQuote = data;
    } catch (error) {
        console.error("Error fetching quote:", error);
        document.getElementById("quote").innerText = "Oops! Could not fetch a quote.";
        document.getElementById("author").innerText = "Please try again.";
    }
}

// Function to save a quote to localStorage
function saveQuote() {
    if (!window.currentQuote) return;

    let savedQuotes = JSON.parse(localStorage.getItem("savedQuotes")) || [];
    savedQuotes.push(window.currentQuote);
    localStorage.setItem("savedQuotes", JSON.stringify(savedQuotes));

    alert("Quote saved!");
}

// Function to display saved quotes
function showSavedQuotes() {
    let savedQuotes = JSON.parse(localStorage.getItem("savedQuotes")) || [];
    
    if (savedQuotes.length === 0) {
        alert("No saved quotes yet.");
        return;
    }

    let quotesList = savedQuotes.map(q => `"${q.content}" - ${q.author}`).join("\n\n");
    alert("Saved Quotes:\n\n" + quotesList);
}

// Load a quote on startup
getQuote();
