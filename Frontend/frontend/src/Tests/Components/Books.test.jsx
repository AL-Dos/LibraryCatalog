import { render, screen, fireEvent } from '@testing-library/react';
import Books from '../../Components/Books'; // Adjust the path as per your project structure

test('Books Component Renders Provided Book Details Correctly', async () => {
  // Mock functions for remove and edit actions
  const removeFunc = vi.fn();
  const editFunc = vi.fn();

  // Render the Books component with provided book details and mock functions
  render(
    <Books
      Number="1"
      Title="Book Title"
      Author="Author Name"
      Category="Category Name"
      Status="Available"
      rmFunc={removeFunc}
      edFunc={editFunc}
    />
  );

  // Assert that the rendered book details match the provided book details
  expect(screen.getByText("1")).toBeInTheDocument(); // Assuming "Number" is rendered as text
  expect(screen.getByText("Book Title")).toBeInTheDocument();
  expect(screen.getByText("Author Name")).toBeInTheDocument();
  expect(screen.getByText("Category Name")).toBeInTheDocument();
  expect(screen.getByText("Available")).toBeInTheDocument();
});

describe('Books Component', () => {
  test('Buttons call function when clicked', () => {
    // Create a mock function
    const fn = vi.fn();

    // Render the Books component with book details
    render(<Books Number="1" Title="Book Title" Author="Author Name" Category="Category Name" Status="Available" rmFunc={fn} edFunc={fn}/>);

    // Find the remove and edit buttons by alt text
    const removeButton = screen.getByAltText('remove');
    const editButton = screen.getByAltText('edit');

    // Simulate a click on the remove button
    fireEvent.click(removeButton);

    // Assertion
    expect(fn).toHaveBeenCalled(); // Ensure the function has not been called yet

    // Simulate a click on the edit button
    fireEvent.click(editButton);

    // Assertion
    expect(fn).toHaveBeenCalled(); // Ensure the function has not been called yet
  });
});
