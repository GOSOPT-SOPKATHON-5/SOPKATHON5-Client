import { DefaultTheme, css } from 'styled-components';

const colors = {
  test_blue: '#2456f7',
};

const fonts = {
  test_h1: css`
    font-family: AcuminProBlack;
    font-size: 5rem;
    font-weight: 900;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
  `,
};

const theme: DefaultTheme = {
  colors,
  fonts,
};
export default theme;
