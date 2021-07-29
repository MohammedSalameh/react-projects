import { useHistory } from 'react-router-dom';
import QuoteForm from '../components/quotes/QuoteForm';
import React, { useEffect } from 'react'

import useHttp from '../hooks/use-http';
import { addQuote } from '../lib/api';

const NewQuote = () => {
	const history = useHistory();
	const { sendRequest, status } = useHttp(addQuote);

  useEffect(() => {
    if(status === 'completed') {
      history.push('/quotes')
    }

  }, [status, history])

	const addQuoteHandler = (quoteData) => {
    sendRequest(quoteData);
		// navigate away to swithc pages
		// push allows the user to go back
		// replace does not allow the user to go back
		
	};

	return <QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
