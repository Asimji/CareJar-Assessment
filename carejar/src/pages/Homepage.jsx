import { Box, Grid, Image, Text } from '@chakra-ui/react'
import React from 'react'
import dent from "../images/dentist.jpeg"
import gyca from "../images/gyca.jpeg"
import nutri from "../images/nutri.jpeg"
import { Link } from 'react-router-dom'
import theme from './theme'
import '@fontsource/raleway/400.css'
import '@fontsource/open-sans/700.css'

let data = [
    {id:1,image:`${dent}`,title:"Dentist",desc:"Teeting troubles? Schedule a dentist checkup"},
    {id:2,image:`${gyca}`,title:"Gynecologist/Obsterician",desc:"Explore for women's health pregnancy and infertility treatments"},
    {id:3,image:`${nutri}`,title:"Dietitian/Nutrition",desc:"Get guidance on eting right, weight management and sports nutrition"},
    
]

const Homepage = () => {
  return (
    <Box  p={'5vh'} theme={theme}>
      <Text fontFamily={'body'} fontSize={'5vh'} fontWeight={'bold'}>Book an appointment for an in-click consultation</Text>
      <Text fontFamily={'body'} fontSize={'3vh'} mt={'1vh'} fontWeight={'semi-bold'}>Find exprienced doctors across all specialties</Text>
      <Grid templateColumns={'repeat(3,1fr)'} gap={'2vh'} mt={'2vh'}>
        {data.length>0 && data.map((item)=>{
            return <Box key={item.id}>
            <Box w={'100%'}>
                <Link to={`/${item.id}`}>
                <Image src={item.image} w={'100%'} borderRadius={'2vh'}/>
                </Link>
            </Box>
            <Text fontFamily={'body'} fontWeight={'bold'} mt={'1vh'}>{item.title}</Text>
            <Text fontFamily={'body'}>{item.desc}</Text>
            </Box>
        })}
      </Grid>
    </Box>
  )
}

export default Homepage
