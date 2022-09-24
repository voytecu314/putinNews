import { useState, useEffect, useRef } from 'react';
import speech from '../helpers/speech';
import Aside from './Aside';

const HeadLine = ({ data }) => {

    let rand50 = Math.round(Math.random()*50);
    
    //const text = useRef(rand50);

    data.results && speech(data, rand50);

    const [counter, setCounter] = useState(0);
    const count = () => {
        //console.log('myRef:', text.current.innerText);
        setCounter(prevCounter=>prevCounter+1);
    }

   /*  useEffect(()=>{
        
    },[counter]); */

    const article = (<div className="headline">
                    <h2>{data.results && data.results.articles[rand50].title}</h2>
                    <p>{data.results && data.results.articles[rand50].content}</p>
                    <img src={data.results && data.results.articles[rand50].urlToImage} 
                    alt={data.results && data.results.articles[rand50].title} width="400"/>
                    <a href={data.results && data.results.articles[rand50].url} target='blank'>Go to article</a>
                    <br /><button onClick={count}>NEXT</button>
                    </div>)

    return (<div id='main'>
        <Aside data={data} range={Math.round(Math.random()*21)}/>
        {article}
        <Aside data={data} range={Math.round(Math.random()*21)+25}/>
        </div>);
}

export default HeadLine;