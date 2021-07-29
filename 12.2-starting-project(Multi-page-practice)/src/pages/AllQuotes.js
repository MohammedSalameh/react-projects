import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
	{ id: 1, author: 'Mummi', text: 'learning react is fun' },
	{ id: 2, author: 'Snow', text: 'imagine learning angular yikes' },
];

const AllQuotes = () => {
	return <QuoteList quotes={DUMMY_QUOTES}/>
};

export default AllQuotes;
