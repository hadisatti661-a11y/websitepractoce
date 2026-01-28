const newsData = [
    {
        category: "TECH",
        title: "Quantum Internet Goes Public",
        desc: "The first unhackable network node was activated today in Tokyo.",
        img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600"
    },
    {
        category: "WORLD",
        title: "New Energy Peak",
        desc: "Solar and Wind now provide 60% of global electricity.",
        img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=600"
    }
];

function loadNews() {
    const grid = document.getElementById('newsGrid');
    grid.innerHTML = newsData.map(item => `
        <div class="news-card">
            <img src="${item.img}" alt="News">
            <div class="card-body">
                <small style="color:var(--primary)">${item.category}</small>
                <h3>${item.title}</h3>
                <p>${item.desc}</p>
            </div>
        </div>
    `).join('');
}

document.getElementById('alertBtn').onclick = () => alert("Subscribed to Breaking News!");

window.onload = loadNews;