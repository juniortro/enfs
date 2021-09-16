import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline  from '@material-ui/core/CssBaseline';
import theme from '../src/theme';

export default function MyApp(props) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Enfs - Página inicial</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};