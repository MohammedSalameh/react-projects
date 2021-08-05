import { render,screen } from '@testing-library/react';
import Greeting from './Greeting';
import userEvent from '@testing-library/user-event'

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

  test('renders Text: "Its good to see you" if the button was NOT clicked', () => {
    // Arrange: Test dtata and test conditions
    render(<Greeting/>);
  
    // Act: Logic that should be tested
    
    
    // Assert: compare exectution results
    const text = screen.getByText(/It's good to see you/i)
    
    // screen.getByText('Hello World', {exact: false})
    expect(text).toBeInTheDocument();
    
  });

  test('render "Changed" if the button was clicked', () => {
    // Arrange: Test dtata and test conditions
    render(<Greeting/>);
  
    // Act: Logic that should be tested
    const button = screen.getByRole('button');
    userEvent.click(button)

    // Assert: compare exectution results
    const text = screen.getByText('Changed')
    // screen.getByText('Hello World', {exact: false})
    expect(text).toBeInTheDocument();
    
  });

  test('does not render, Its good to see you, if the button was clicked', () => {
    // Arrange: Test dtata and test conditions
    render(<Greeting/>);
  
    // Act: Logic that should be tested
    const button = screen.getByRole('button');
    userEvent.click(button)

    // Assert: compare exectution results
    const text = screen.queryByText("It's good to see you")

    // screen.getByText('Hello World', {exact: false})
    expect(text).toBeNull();
    
  });

});

