import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../src/theme/index";
import "../styles/globals.css";
import { SSRProvider } from '@react-aria/ssr';
import 'tailwindcss/tailwind.css';
import LayoutDefault from '../src/layout/LayoutDefault';



export default function MyApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const getLayout = Component.getLayout || ((page) => {
    return (
      <SSRProvider>
        <LayoutDefault>
          {page}
        </LayoutDefault>
      </SSRProvider>

    )
  })

  return getLayout(

    <>
      <SSRProvider>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </SSRProvider>
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
