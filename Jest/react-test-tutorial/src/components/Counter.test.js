import React from 'react'
import renderer from 'react-test-renderer';
import Counter from './Counter';

describe('Counter', () => {
    let component = null;
    
    it('renders correctly', () => {
        component = renderer.create(<Counter />);
    });
    
    it('matches snapshot', () => {
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
})