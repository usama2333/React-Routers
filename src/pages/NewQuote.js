import React from 'react';
import { useHistory } from 'react-router-dom';
import QuoteForm from '../components/quotes/QuoteForm';

const NewQuote = () => {
    const history = useHistory();

    const addQuoteHandler = (data) => {
        console.log('This is quote form data');
        console.log(data);
        history.push('/quotes');
    }
  return (
    <div>
       <QuoteForm onAddQuote = {addQuoteHandler} />
    </div>
  )
}

export default NewQuote
