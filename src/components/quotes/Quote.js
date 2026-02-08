import './Quote.css';
import {useEffect,useState} from "react";
import CircularText from "../../reactbits/TextAnimations/CircularText/CircularText";

const fallbackQuotes = [
  { text: "Code is like humor. When you have to explain it, it's bad.", author: "Cory House" },
  { text: "Make it work, make it right, make it fast.", author: "Kent Beck" },
  { text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", author: "Martin Fowler" },
  { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
];

const url ="https://thequoteshub.com/api/tags/computers";

function Quote(){
    // Initialize with a random fallback quote
    const [quote,setQuote]=useState(() => {
        const randomIndex = Math.floor(Math.random() * fallbackQuotes.length);
        return fallbackQuotes[randomIndex];
    });
    const [loading, setLoading] = useState(true); 
    
    useEffect(()=>{
        // Fetch a new random quote on each component mount (page refresh)
        fetch(url)
        .then((response)=>response.json())
        .then((quotes)=>{
            const randomQuote = quotes.quotes[Math.floor(Math.random()*quotes.quotes.length)];
            setQuote(randomQuote);
            setLoading(false);
        })
        .catch((error) => {
            // Use fallback quote if fetch fails
            const randomFallback = fallbackQuotes[Math.floor(Math.random()*fallbackQuotes.length)];
            setQuote(randomFallback);
            setLoading(false);
        });
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
