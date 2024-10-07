import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

import axios from 'axios';
import { Grid } from '@mui/material';

const Home = () => {
    const [products, setProducts] = useState([]);
    
    //connecting external API
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products').then((res) => {
            setProducts(res.data);   //users is the array name in dummyjson data
        })
    },[])
    
    return (
        <Grid container spacing={2}>
        {products.map((product)=>(
          <Grid item xs={12} sm={6} md={4} key={product.title}>
          <Card sx={{ maxWidth: 345, display: 'flex', flexDirection: 'column', height: '100%' }}>
        
          <CardMedia
            
            sx={{height: 250}}
            image={product.image}
            alt="product"
            title={product.title}
          />
          <CardContent sx={{flex: '1 0 auto'}}>
            <Typography gutterBottom variant="h5" component="div">
              {product.title}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {product.price}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {product.rating.rate}
            </Typography>
          </CardContent>
        
      </Card>
  </Grid>
            
        ))}
        </Grid>
        
    )
}

export default Home
