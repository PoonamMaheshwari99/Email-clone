import { render,screen } from '@testing-library/react';
import Header from './Header';

describe('Header Component', () => {

    
     
    
     test('should check the header component title', () => {
        render(<Header/>)
        expect(screen.getByText('MAILBOX')).toBeInTheDocument();
     })
    

    test('should check the email icon', () => {
        render(<Header/>)
        expect(screen.getByTestId("email-icon")).toBeInTheDocument();
     })

  
    
    })
