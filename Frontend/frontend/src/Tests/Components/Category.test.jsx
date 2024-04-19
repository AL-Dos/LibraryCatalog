import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Category from '../../Components/Category';

test('Category Component Renders Provided Category Details Correctly', () => {
  const categoryDetails = {
    Number: "1",
    Category: "Category Name",
    Status: "Active",
  };

  const { getByText } = render(
    <Category
      Number={categoryDetails.Number}
      Category={categoryDetails.Category}
      Status={categoryDetails.Status}
      rmFunc={() => {}}
      edFunc={() => {}}
    />
  );

  expect(getByText(categoryDetails.Number)).toBeInTheDocument();
  expect(getByText(categoryDetails.Category)).toBeInTheDocument();
  expect(getByText(categoryDetails.Status)).toBeInTheDocument();
});

test('Category Component Buttons Trigger Correct Functions', () => {
  // Mock functions for remove and edit actions
  const removeFunc = vi.fn();
  const editFunc = vi.fn();

  const { getByAltText } = render(
    <Category
      Number="1"
      Category="Category Name"
      Status="Active"
      rmFunc={removeFunc}
      edFunc={editFunc}
    />
  );

  // Click on the remove button
  fireEvent.click(getByAltText("remove"));
  // Assert that removeFunc has been called
  expect(removeFunc).toHaveBeenCalled();

  // Click on the edit button
  fireEvent.click(getByAltText("edit"));
  // Assert that editFunc has been called
  expect(editFunc).toHaveBeenCalled();
});
