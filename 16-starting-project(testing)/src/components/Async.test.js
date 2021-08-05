import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';
import userEvent from '@testing-library/user-event';

import Async from './Async';

describe('Async component', () => {
	test('renders posts if request succeeds', async () => {
		render(<Async />);

		// getBy... looks at the dom instantly.
		// but the list is not there since yet
		// const listItems = screen.findAllByRole('listitem', {}, {timout: 5000});
		const listItems = await screen.findAllByRole('listitem');
		expect(listItems).not.toHaveLength(0);
	});
});
