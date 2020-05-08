import App from "next/app";
import Head from "next/head";
import { AppProvider, FooterHelp, Link } from "@shopify/polaris";
import { Provider } from "@shopify/app-bridge-react";
import "@shopify/polaris/styles.css";
import translations from "@shopify/polaris/locales/en.json";
import Cookies from "js-cookie";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import fetch from 'node-fetch';

const apiKey = (typeof API_KEY !== 'undefined') ? API_KEY : Cookies.get("apiKey");

const client = new ApolloClient({
  fetch: fetch,
  fetchOptions: {
    credentials: "include",
  },
});

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    const config = {
      apiKey: apiKey,
      shopOrigin: Cookies.get("shopOrigin"),
      forceRedirect: true,
    };
    return (
      <React.Fragment>
        <Head>
          <title>Shopfaves</title>
          <meta charSet="utf-8" />
        </Head>
        <Provider config={config}>
          <AppProvider i18n={translations}>
            <ApolloProvider client={client}>
              <Component {...pageProps} />
              <div style={{ margin: '0 0 60px 0' }}>
                <FooterHelp>
                  Learn more about{' '}
                  <Link url="https://www.shopfaves.co.nz" external={true}>
                    Shopfaves NZ
                  </Link>
                  {' '} or {' '}
                  <a style={{textDecoration:'none'}} href="mailto:shopify@vindiweb.co.nz?Subject=support request from Shopfaves shopify app" target="_blank">
                    contact us
                  </a>
                  {' '} if you need support
              </FooterHelp>
              </div>
            </ApolloProvider>
          </AppProvider>
        </Provider>
      </React.Fragment>
    );
  }
}

export default MyApp;