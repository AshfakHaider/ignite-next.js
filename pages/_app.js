// import '../styles/globals.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { SSRProvider } from '@react-aria/ssr';



// function MyApp({ Component, pageProps }) {
//   return (
    
//       <SSRProvider>
//         <Component {...pageProps} />
//       </SSRProvider>
   

//   )
// }

// export default MyApp
import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../src/theme/index";
import "../styles/globals.css";
import { SSRProvider } from '@react-aria/ssr';
import 'tailwindcss/tailwind.css';


export default function MyApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <SSRProvider>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
      </SSRProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
