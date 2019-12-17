import React from 'react';
import renderer, { ReactTestRendererJSON } from 'react-test-renderer';
import 'jest-styled-components';
import { StyledMusicCardsBox } from './section3.styles';

describe('Tests `StyledMusicCardsBox` ', () => {
  let tree: ReactTestRendererJSON | null;

  beforeAll(() => {
    tree = renderer.create(<StyledMusicCardsBox />).toJSON();
  })

  test('Matches snapshot ', () => {
    expect(tree).toMatchSnapshot();
  })
  
  test('Have styles ', () => {
    expect(tree).toHaveStyleRule('grid-template-columns', '1fr 1fr 1fr 1fr')
    expect(tree).toHaveStyleRule('grid-template-columns', '1fr 1fr 1fr', {
      media: '(max-width: 1100px)',
    })
    expect(tree).toHaveStyleRule('grid-template-columns', '1fr 1fr', {
      media: '(max-width: 860px)',
    })
    expect(tree).toHaveStyleRule('grid-template-columns', '1fr', {
      media: '(max-width: 600px)',
    })
  })
})
