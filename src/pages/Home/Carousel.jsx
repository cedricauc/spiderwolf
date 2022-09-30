import React from 'react'
import Carousel from 'react-material-ui-carousel'
import {
  Button,
  Grid,
  CardContent,
  Typography,
  CardMedia,
  Card,
} from '@mui/material'

import './carousel.scss'
import pirateDice from '../../assets/img/pirate-s-dices.png'
import royaumeNawakim from '../../assets/img/royaume-nawakim.jpg'

export default function Slideshow(props) {
  const items = [
    {
      name: 'Jeux',
      caption: 'Jeux en ligne alternatif',
      contentPosition: 'left',
      items: [
        {
          name: "Pirate's dices",
          image: `${pirateDice}`,
        },
        {
          name: 'Le Royaume de Nawakim',
          image: `${royaumeNawakim}`,
        },
      ],
    },
    {
      name: 'Jeux',
      caption: 'Jeux en ligne alternatif',
      contentPosition: 'middle',
      items: [
        {
          name: "Pirate's dices",
          image: `${pirateDice}`,
        },
        {
          name: 'Le Royaume de Nawakim',
          image: `${royaumeNawakim}`,
        },
      ],
    },
    {
      name: 'Jeux',
      caption: 'Jeux en ligne alternatif',
      contentPosition: 'right',
      items: [
        {
          name: "Pirate's dices",
          image: `${pirateDice}`,
        },
        {
          name: 'Le Royaume de Nawakim',
          image: `${royaumeNawakim}`,
        },
      ],
    },
  ]

  return (
    <Carousel
      className="carousel"
      sx={{ width: { xl: '1000px', md: '400px', sm: '400px' } }}
    >
      {items.map((item, index) => (
        <Banner item={item} key={item} contentPosition={item.contentPosition} />
      ))}
    </Carousel>
  )
}

const Banner = (props) => {
  const contentPosition = props.contentPosition ? props.contentPosition : 'left'
  const totalItems = props.length ? props.length : 3
  const mediaLength = totalItems - 1

  let items = []
  const content = (
    <Grid item xs={4} key="content">
      <CardContent className="Content">
        <Typography className="Title">{props.item.name}</Typography>

        <Typography className="Caption">{props.item.caption}</Typography>

        <Button variant="outlined" className="ViewButton">
          En Savoir plus
        </Button>
      </CardContent>
    </Grid>
  )

  for (let i = 0; i < mediaLength; i++) {
    const item = props.item.items[i]

    const media = (
      <Grid item xs={4} key={item.name}>
        <CardMedia className="Media" image={item.image} title={item.name}>
          <Typography className="MediaCaption">{item.name}</Typography>
        </CardMedia>
      </Grid>
    )

    items.push(media)
  }

  if (contentPosition === 'left') {
    items.unshift(content)
  } else if (contentPosition === 'right') {
    items.push(content)
  } else if (contentPosition === 'middle') {
    items.splice(items.length / 2, 0, content)
  }

  return (
    <Card raised className="Banner">
      <Grid container spacing={0} className="BannerGrid">
        {items}
      </Grid>
    </Card>
  )
}
