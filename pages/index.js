import { EmptyState, Layout, Page } from "@shopify/polaris";

const img = "https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg";

/* Dashboard */
class Index extends React.Component {
  state = { open: false };
  render() {
    return (
      <Page>
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
