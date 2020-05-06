import { EmptyState, Layout, Page } from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import mainMenu from "../components/mainMenu";

const img = "https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg";

/* Dashboard */

mainMenu.primaryAction = { content: 'View Stats', url: '/stats' };

class Index extends React.Component {
  state = { open: false };
  render() {
    return (
      <Page>
        <TitleBar
          primaryAction={mainMenu.primaryAction}
          secondaryActions={mainMenu.secondaryActions}
        />
        <Layout>
          <EmptyState
            heading="Shopfaves"
            action={{
              content: 'To start, click here to add products',
              url: 'add-products'
            }}
            image={img}
          ><p>Promote your top products by showcasing them 
             on the <a style={{ textDecoration:'none' }} href="https://www.shopfaves.co.nz" target="_blank">Shopfaves.co.nz</a> New Zealand website.
          </p>
          </EmptyState>
        </Layout>
      </Page>
    );
  }
}

export default Index;
