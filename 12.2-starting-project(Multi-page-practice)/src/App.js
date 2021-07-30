import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Layout from './components/layout/Layout';
import LoadingSpinner from './components/UI/LoadingSpinner';

const NewQuote = React.lazy(() =>
	// download page only if needed.
	import('./pages/NewQuote')
);
const QuoteDetail = React.lazy(() =>
	// download page only if needed.
	import('./pages/QuoteDetail')
);
const NotFound = React.lazy(() =>
	// download page only if needed.
	import('./pages/NotFound')
);
const AllQuotes = React.lazy(() =>
	// download page only if needed.
	import('./pages/AllQuotes')
);

const fallBackUI = (
	<div className='centered'>
		<LoadingSpinner />
	</div>
);

function App() {
	return (
		<Layout>
			<Suspense fallback={fallBackUI}>
				<Switch>
					<Route path='/' exact>
						<Redirect to='/quotes' />
					</Route>
					<Route path='/quotes' exact>
						<AllQuotes />
					</Route>
					<Route path='/new-quote' exact>
						<NewQuote />
					</Route>
					<Route path='/quotes/:quoteId'>
						<QuoteDetail />
					</Route>
					<Route path='*'>
						<NotFound />
					</Route>
				</Switch>
			</Suspense>
		</Layout>
	);
}

export default App;
