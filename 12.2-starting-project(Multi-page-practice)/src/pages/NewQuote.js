import {useHistory} from 'react-router-dom'
import QuoteForm from '../components/quotes/QuoteForm';

const NewQuote = () => {
  const history = useHistory();

  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);
    // navigate away to swithc pages
    // push allows the user to go back
    // replace does not allow the user to go back
    history.push('/quotes');
  }


	return <QuoteForm onAddQuote={addQuoteHandler}/>;
};

export default NewQuote;
