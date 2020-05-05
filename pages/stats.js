import { EmptyState, Layout, Page } from "@shopify/polaris";

const img = "https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg";

/* Stats */
class Stats extends React.Component {
  state = { open: false };
  render() {
    return (
      <Page>
          <Layout>
            <EmptyState
              heading="Stats"
              image={img}
            >
              <p>Make some stats!</p>
            </EmptyState>
          </Layout>
      </Page>
    );
  }
}

export default Stats;
