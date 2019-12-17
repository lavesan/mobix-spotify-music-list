import React from 'react';
import renderer, { ReactTestRendererJSON } from 'react-test-renderer';
import 'jest-styled-components';
import { StyledSectionCard } from '.';

describe('Tests `StyledSectionCard` ', () => {
  let tree: ReactTestRendererJSON | null;

  beforeAll(() => {
    tree = renderer.create(<StyledSectionCard />).toJSON();
  })

  test('Matches snapshot ', () => {
    expect(tree).toMatchSnapshot();
  })
  
  test('Have styles ', () => {
    expect(tree).toHaveStyleRule('box-shadow', '0 0 6px #c2c2c2')
    expect(tree).toHaveStyleRule('width', '80%')
    expect(tree).toHaveStyleRule('background-color', '#fff')
    expect(tree).toHaveStyleRule('padding', '10px 50px')
    expect(tree).toHaveStyleRule('padding', '10px 20px', {
      media: '(max-width: 570px)',
    })
  })
})
