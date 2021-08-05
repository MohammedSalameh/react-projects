import { render,screen } from '@testing-library/react';
import Greeting from './Greeting';

describe('Greeting Component', () => {
  test('renders Hello World as a text', () => {
    // Arrange: Test dtata and test conditions
    render(<Greeting/>);
  
    // Act: Logic that should be tested
    
    // Assert: compare exectution results
    const helloworld = screen.getByText(/Hello World/i)
    // screen.getByText('Hello World', {exact: false})
    expect(helloworld).toBeInTheDocument();
    
  });

});

