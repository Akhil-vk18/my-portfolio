import { useEffect, useState } from 'react';

const fallbackQuotes = [
  { text: "Code is like humor. When you have to explain it, it's bad.", author: "Cory House" },
  { text: "Make it work, make it right, make it fast.", author: "Kent Beck" },
  { text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", author: "Martin Fowler" },
  { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
  { text: "Simplicity is the soul of efficiency.", author: "Austin Freeman" },
  { text: "Before software can be reusable it first has to be usable.", author: "Ralph Johnson" },
];

const pickFallback = () => fallbackQuotes[Math.floor(Math.random() * fallbackQuotes.length)];

const useRandomQuote = () => {
  const [quote, setQuote] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    const controller = new AbortController();

    // Fall back to a local quote if the API takes more than 5 seconds
    const timeoutId = setTimeout(() => {
      controller.abort();
      if (mounted) {
        setQuote(pickFallback());
        setIsLoading(false);
      }
    }, 5000);

    fetch('https://thequoteshub.com/api/tags/computers', { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error('fetch failed');
        return res.json();
      })
      .then((data) => {
        clearTimeout(timeoutId);
        if (!mounted) return;
        const quotes = data.quotes;
        const picked =
          quotes && quotes.length > 0
            ? quotes[Math.floor(Math.random() * quotes.length)]
            : pickFallback();
        setQuote(picked);
        setIsLoading(false);
      })
      .catch((err) => {
        clearTimeout(timeoutId);
        if (!mounted || err.name === 'AbortError') return;
        setQuote(pickFallback());
        setIsLoading(false);
      });

    return () => {
      mounted = false;
      clearTimeout(timeoutId);
      controller.abort();
    };
  }, []);

  return { quote, isLoading };
};

export default useRandomQuote;
