
import React from 'react';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Select,
    Button
  } from '@chakra-ui/react';
import axios from 'axios';
import { useToast } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';





export default function Form (props){

    const [title, setTitle] = React.useState('');
    const [year, setYear] = React.useState('');
    const [plot, setPlot] = React.useState('');
    const toast = useToast();
    const dispatch = useDispatch();

    const handleSearch = async e=>{
        let url = process.env.REACT_APP_MODB_URL;
        // let url = 'http://www.omdbapi.com/?apikey=2b957995';
        if(title !== '') {
            url = url + '&t=' + title;
        } else{
            toast({
                title: 'Title is required',
                description: "Title is required for the search",
                status: 'error',
                duration: 9000,
                isClosable: true,
              })
            return;
        }
        if(year !== ''){
            url += `&y=${year}`;
        }
        if(plot !== ''){
            url+= `&plot=${plot}`;
        }
        try{
            console.log(url)
            const res = await axios.post('/fetch', {url: url});
            // const res = await axios.get(url);
            let data = res.data;
            if(!Array.isArray(data)){
                if(data.Response === 'False'){
                    toast({
                        title: 'Error',
                        description: data.Error,
                        status: 'error',
                        duration: 9000,
                        isClosable: true,
                      })
                    return;
                }
                dispatch({type: 'omdb/update', payload: [res.data]});
            }else{
                dispatch({type: 'omdb/update', payload: res.data});
            }

            toast({
                title: 'Search success',
                description: "",
                status: 'success',
                duration: 9000,
                isClosable: true,
              })
        }catch(err){
            toast({
                title: 'Error',
                description: err.message,
                status: 'error',
                duration: 9000,
                isClosable: true,
              })
            return
        }
        
    }

    return(
        <div
        style={{margin: '3%',
            border: 'solid black',
            display: 'flex',
            flexDirection: 'column'
        }}
        >
            <div>
            <FormControl
            style={{
                margin: '2%'
            }}>
                <FormLabel>Title</FormLabel>
                <Input width='90%' placeholder='Title'  
                onChange={e=>{
                    setTitle(e.target.value);
                }} />
                <FormLabel>Year</FormLabel>
                <Input width='90%' placeholder='Year'
                    onChange={e=>{
                        setYear(e.target.value);
                    }}
                />
                <FormLabel>Plot</FormLabel>
                <Select 
                  onChange={e=>{
                    setPlot(e.target.value);
                  }}
                  width='90%' placeholder='Select Plot'>
                    <option>Short</option>
                    <option>Full</option>
                </Select>
            </FormControl>
            </div>

            <Button
            size='lg'
            style={{margin: "2%"}}
            onClick={handleSearch}
            >Search</Button>

        </div>
    );
}



