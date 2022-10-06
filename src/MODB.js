import React from 'react';
import {Box, Image, Button} from '@chakra-ui/react';


export default function MODB(props){

    // const [data, setData] = React.useState(props.data);
    const [clicked, setClicked] = React.useState(false)
    const handleClick=e=>{
        setClicked(!clicked);
    }

    return(
        <div style={{margin: '5%', 
            transition: 'ease 1s' }}>
            <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                <div style={{display: 'flex', justifyContent: 'center'}} >
                    <Image src={props.data.Poster} alt={props.Title} />
                </div>
                    <Box
                    mt='1'
                    fontWeight='semibold'
                    lineHeight='tight'
                    noOfLines={1}
                    fontSize='lg'
                    >
                    {`Title: ${props.data.Title}`}
                    </Box>
                    <Box p='1'>
                    <Box display='flex' alignItems='baseline'>
                        <Box
                            color='gray.500'
                            fontWeight='semibold'
                            letterSpacing='wide'
                            fontSize='xs'
                            textTransform='uppercase'
                            ml='2'
                        >
                            {props.data.Actors} 
                        </Box>
                    
                    </Box>
                    

                    <Box
                    mt='1'
                    fontWeight='semi'
                    lineHeight='tight'
                    noOfLines={1}
                    fontSize='xs'
                    >
                    {`Year: ${props.data.Year}`}
                    </Box>
                    

                        { clicked ?
                            <div>
                            <Box
                            mt='1'
                            fontWeight='semi'
                            lineHeight='tight'
                            noOfLines={1}
                            fontSize='xs'
                            >
                            {`Genre: ${props.data.Genre}`}
                            </Box>
                            <Box
                            mt='1'
                            fontWeight='semi'
                            lineHeight='tight'
                            noOfLines={1}
                            fontSize='xs'
                            >
                            {`Writer: ${props.data.Writer}`}
                            </Box>
                            </div> : <></>
                        }
                    <Button
                    onClick={handleClick}
                    size='sm'
                    style={{marginTop: '2%'}}>More</Button>
                </Box>

            </Box>
        </div>
    )

}