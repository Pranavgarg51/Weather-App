import * as React from 'react';
import Card from '@mui/material/Card';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import "./InfoBox.css";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';


import Typography from '@mui/material/Typography';

export default function InfoBox({info}){
    // const INIT_URL="https://images.unsplash.com/photo-1696912158241-be58ad220dcc?q=80&w=1994&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const COLD_URL="https://st3.depositphotos.com/12985790/17848/i/450/depositphotos_178488738-stock-photo-dry-tree-frozen-lake-snow.jpg"
    const HOT_URL="https://t4.ftcdn.net/jpg/07/14/99/85/240_F_714998563_eo12EUBhpPcctambJbPM4yYRZsOyG96Z.jpg"
    const RAIN_URL="https://t4.ftcdn.net/jpg/02/80/73/23/240_F_280732325_HeZRjLxXjC8O153TzgW7Po1pUgqAY69f.jpg"
  
    return(
        <div className="InfoBox">
           
            <div className="cardContainer" >
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAIN_URL: info.temp >15 ? HOT_URL : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {info.humidity > 80 ? <ThunderstormIcon/>: info.temp > 15 ? <WbSunnyIcon/>: <AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" color="text.secondary"component="span">
       <p>Tempreture = {info.temp}&deg;C</p>
       <p>Humidity = {info.humidity}</p>
       <p>Min Temp = {info.tempMin}&deg;C</p>
       <p>Max Temp = {info.tempMax}&deg;C</p>
       <p>
        The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>
       
        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
    )
}