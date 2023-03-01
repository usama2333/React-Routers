import React from 'react';
import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
    { id : 'Q1' , author : 'Usama' , text : 'I am a Full Stack Developer'},
    { id : 'Q2' , author : 'Haseeb' , text : 'I am a Surger Doctor'},
    { id : 'Q3' , author : 'Haji Sab' , text : 'I am the best one'}
]

const AllQuotes = () => {
  return (
    <div>
     
       <QuoteList quotes = {DUMMY_QUOTES}/>
      
    </div>
  )
}

export default AllQuotes
