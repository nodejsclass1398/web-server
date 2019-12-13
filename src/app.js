const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT || 3000;
const geoLocation = require('./utils/geoLocation');
const forecast = require('./utils/forecast');


// directory paths
const publicDirectoryPath = path.join(__dirname , '../public');
const viewsPath = path.join(__dirname , '../template/views');
const partialsPath = path.join(__dirname , '../template/partials');

// serve assets or public static files
app.use(express.static(publicDirectoryPath));

// setup hbs
app.set('view engine' , 'hbs');
app.set('views' , viewsPath);
hbs.registerPartials(partialsPath);

app.get('' , (req , res) => {
    res.render('index' , {
        title : 'hbs title' ,
        name : 'ali rajabi'
    });
});

app.get('/about' , (req , res) => {
    res.render('about' , {
        title : 'hbs title for about' ,
        name : 'about page' ,
        img : 'images/Koala.jpg'
    });
});

app.get('/help' , (req , res) => {
    res.render('help' , {
        title : 'helpppppppp' ,

    });
});

app.get('/weather' , (req , res) => {


    if(!req.query.address) {
        return res.send({error : "please enter location"});
      }else{
        geoLocation(req.query.address , (error , {latitude , longitude , location} = {}) => {
          if (error) return res.send({error});
          
          forecast(latitude , longitude , location , (error , data) => {
            if (error) return res.send({error});
            res.send({
                forecast : data , 
                location , 
                address : req.query.address
            })
          });  
        })
      }

});

app.get('/products' , (req , res) => {
    // console.log(req.query);
    // console.log(req.query.search);
    if(!req.query.search){
       return res.send('please enter search');
    }
    res.send({
        products : []
    })
});

app.get('/help/*' , (req , res) => {
    res.render('404' , {
        title : 'page 404' , 
        errorMessage : 'the article is not found' 
    });
})

app.get('*' , (req , res) => {
    res.render('404' , {
        title : 'page 404' , 
        errorMessage : 'Page not found' 
    });
});

app.listen(port , () => {
    console.log('server run port 3000');
});