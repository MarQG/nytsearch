
const articles = [
    {
        id: "1",
        title: "This is a title1",
        date: 0,
        url: "http://google.com"
    },
    {
        id: "2",
        title: "This is a title2",
        date: 0,
        url: "http://google.com"
    },
    {
        id: "3",
        title: "This is a title3",
        date: 0,
        url: "http://google.com"
    }
]

module.exports = (app) => {
    app.get('/api/articles', (req, res) => {
        return res.json(articles);
    });
};