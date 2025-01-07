// Good luck!
const express = require('express')
const app = express()


let Data = {
    RomanceAnime: [
        {
    
          name: "solo levering",
          rating: 9.0,
          yearOfRelease: 2016
        },
        {
          name: "Toradora!",
          rating: "8.2",
          yearOfRelease: 2008
        },
        {
          name: "Clannad",
          rating: "8.0",
          yearOfRelease: 2007
        },
        {
          name: "Fruits Basket",
          rating: "8.6",
          yearOfRelease: 2001
        },
        {
          name: "Kimi ni Todoke",
          rating: "8.0",
          yearOfRelease: 2009
        }
      ],
      mainCharacter: [
        { name: "sung jin woo", age: 17, show: "solo leveling" },
        { name: "Taki Tachibana", age: 17, show: "darling and the fraxx" },
        { name: "Taiga Aisaka", age: 16, show: "Toradora!" },
        { name: "Tomoya Okazaki", age: 17, show: "Clannad" },
        { name: "Tohru Honda", age: 16, show: "Fruits Basket" }
      ]
    }
  
  
  app.use((req,res,next)=>{
    console.log(req.method, res.url)
    next()
    })

    app.get("/", (req, res) => {
        res.status(200).send(`<h2>Find your Anime</h2> <img src = "https://media1.giphy.com/media/fraFWJOtGih9u/200.webp?cid=ecf05e476shevcbgrlx0m24i4eqbr5ycvhl7ewye4suts0wv&ep=v1_gifs_search&rid=200.webp&ct=g"></img>`);
      });
    
      app.get("/docs", (req, res) => {
        res.status(200).send("/romance gives first romance anime and info on it. /mc gives first main character and the anime they belong to. /romance/{index} gives an anime at that index. /mc/{id} gives a mc and there info at that id.");
      });

      app.get("/romance", (req, res) => {
        res.status(200).json(Data.RomanceAnime[0]);
      });

      app.get("/mc", (req, res) => {
        res.status(200).json(Data.mainCharacter[0]);
      });

      app.get("/romance/:index", (req, res) => {
        const anime = req.params.index
        res.status(200).send(Data.RomanceAnime[anime])
      });

      app.get("/mc/:id", (req, res) => {
        const mainc = req.params.id
        res.status(200).send(Data.RomanceAnime[mainc])
      });




  app.get((req, res) => {
    res.status(404).send('error on page')
  });


  app.listen(3000, () => {
    console.log("Server running")
})