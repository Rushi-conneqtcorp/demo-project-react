import { render, screen } from '@testing-library/react';
import Admission from './Admission';

describe('Admission Component', () => {
  test('renders table headers correctly', () => {
    render(<Admission admissions={[]} />);

    expect(screen.getByText('ID')).toBeInTheDocument();
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('Phone')).toBeInTheDocument();
    expect(screen.getByText('Message')).toBeInTheDocument();
  });

  test('renders admission records correctly', () => {
    const mockadmissions = [
      { id: 1, name: 'John Doe', email: 'demo@gmail.com', phone: '1234578905', message: 'demo message' },
      { id: 2, name: 'Jane Smith',email: 'demo1@gmail.com', phone: '1234578905', message: 'demo1 message' },
    ];

    render(<Admission admissions={mockadmissions} />);

    // Check if student names are displayed
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();

    // Check if emails are displayed
    expect(screen.getByText('demo@gmail.com')).toBeInTheDocument();
    expect(screen.getByText('demo1@gmail.com')).toBeInTheDocument();
  });

});

