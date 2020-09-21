import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './button';

describe('Button', () => {
    it('renders with childrens', () => {
        const { asFragment } = render(<Button>qualquerConteudo</Button>);
        expect(asFragment()).toMatchSnapshot();
    });

    it('clicks', () => {
        const onClick = jest.fn();
        render(<Button onClick={onClick}>qualquerConteudo</Button>);

        const button = screen.getByRole('button');
        fireEvent.click(button);

        expect(onClick).toHaveBeenCalledTimes(1);
    });
});

