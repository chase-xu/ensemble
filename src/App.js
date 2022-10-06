import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import Form from './Form';
import MODB from './MODB'
import {useSelector, useDispatch} from 'react-redux';


function App() {


  const modbs = useSelector(state=>{
    return state.reducer.modbs;
  })

  return (
    <ChakraProvider>
      
      <div
      style={{
        margin: '10%'
      }}
      >
        <header
        style={{margin: '2%'}}
        >OMDB
        </header>
        <Form/>
      
      
      <div style={{  display: 'flex', justifyContent: 'center'}}>
        {modbs.map((ele, index)=>{
          return(<MODB data={ele} key={`${index}-keys`} />)
        })
      }
      </div>
      </div>



    </ChakraProvider>
  );
}

export default App;
