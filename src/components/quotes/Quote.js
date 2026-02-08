import './Quote.css';
import {useEffect,useState} from "react";
import CircularText from "../../reactbits/TextAnimations/CircularText/CircularText";
const url ="https://thequoteshub.com/api/tags/computers";

function Quote(){
    const [quote,setQuote]=useState("");
    const [loading, setLoading] = useState(true); 
    useEffect(()=>{
        fetch(url)
        .then((response)=>response.json())
        .then((quotes)=>{
            const random = quotes.quotes[Math.floor(Math.random()*quotes.quotes.length)];
            setQuote(random);
            
            setLoading(false);
        })
    },[]);
    if (loading) return <div className='loading'><CircularText
    text="Quotes*Loading*"
    onHover="speedUp"
    spinDuration={20}
    className="custom-class"
    
  /></div>;
    return(
        <div className="Quotes">
            <p className="quote-text">"{quote.text}"</p>
        <p className="author">-{quote.author}</p>
        </div>
    );
}
export default Quote;