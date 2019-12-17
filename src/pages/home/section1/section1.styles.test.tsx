import React from 'react';
import renderer, { ReactTestRendererJSON } from 'react-test-renderer';
import 'jest-styled-components';
import { StyledArtistsFilterBox, StyledLogSpotifyLink } from './section1.styles';
import { ThemeProvider } from 'styled-components';
import theme from '../../../app/App.theme';

describe('Tests `StyledArtistsFilterBox` ', () => {
  let tree: ReactTestRendererJSON | null;

  beforeAll(() => {
    tree = renderer.create(<StyledArtistsFilterBox />).toJSON();
  })

  test('Matches snapshot ', () => {
    expect(tree).toMatchSnapshot();
  })
  
  test('Have styles ', () => {
    expect(tree).toHaveStyleRule('grid-template-columns', '3fr 4fr 7fr')
    expect(tree).toHaveStyleRule('grid-template-columns', '3fr 4fr 4fr', {
      media: '(max-width: 1100px)',
    })
    expect(tree).toHaveStyleRule('grid-template-columns', '1fr 1fr', {
      media: '(max-width: 880px)',
    })
    expect(tree).toHaveStyleRule('grid-template-columns', '1fr', {
      media: '(max-width: 600px)',
    })
  })
})

describe('Tests `StyledLogSpotifyLink` ', () => {
  let tree: ReactTestRendererJSON | null;

  beforeAll(() => {
    tree = renderer.create(
        <ThemeProvider theme={theme}>
            <StyledLogSpotifyLink />
        </ThemeProvider>
    ).toJSON();
  })

  test('Matches snapshot ', () => {
    expect(tree).toMatchSnapshot();
  })
  
  test('Have styles ', () => {
    expect(tree).toHaveStyleRule('width', '50%')
    expect(tree).toHaveStyleRule('width', '80%', {
      media: '(max-width: 1100px)',
    })
    expect(tree).toHaveStyleRule('width', '85%', {
      media: '(max-width: 880px)',
    })
  })
})
