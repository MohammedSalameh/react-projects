import { Route, useParams, Link, useRouteMatch } from 'react-router-dom';

import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const DUMMY_QUOTES = [
	{ id: '1', author: 'Mummi', text: 'learning react is fun' },
	{ id: '2', author: 'Snow', text: 'imagine learning angular yikes' },
];

const QuoteDetail = () => {
	const match = useRouteMatch();
	const params = useParams();

	const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

	if (!quote) {
		return <p>No Quote Found!</p>;
	}

	return (
		<>
			<HighlightedQuote text={quote.text} author={quote.author} />
			<Route path={match.path} exact>
				<div className='centered'>
					<Link className='btn--flat' to={`${match.url}/comments`}>
						Load comments
					</Link>
				</div>
			</Route>
			<Route path={`${match.path}/comments`}>
				<Comments />
			</Route>
		</>
	);
};

export default QuoteDetail;
