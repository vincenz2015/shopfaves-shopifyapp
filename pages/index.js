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
          title="Dashboard"
          primaryAction={mainMenu.primaryAction}
          secondaryActions={mainMenu.secondaryActions}
        />
        <Layout>
          <EmptyState
            heading="Shopfaves"
            action={{
              content: 'Welcome to Shopfaves... let\'s go',
              onAction: () => this.setState({ open: true }),
            }}
            image={img}
          >
            <p>Select products to push to Shopfaves!</p>
          </EmptyState>
        </Layout>
      </Page>
    );
  }
}

export default Index;
