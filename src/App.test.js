import React from 'react';
import { render } from '@testing-library/react';
import App from '../../components/App';

test('renders App component', () => {
  const { getByText } = render(<App />);


  const addAnnouncementForm = getByText(/Добавить/i);
  const announcementList = getByText(/Список объявлений/i);


  expect(addAnnouncementForm).toBeInTheDocument();
  expect(announcementList).toBeInTheDocument();
});