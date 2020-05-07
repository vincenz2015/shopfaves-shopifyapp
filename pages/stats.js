import { Page, Layout, EmptyState } from "@shopify/polaris";
import store from "store-js";
import ResourceListWithProductsStats from "../components/ResourceListStats";
import { TitleBar } from "@shopify/app-bridge-react";
import mainMenu from "../components/mainMenu";

/* View stats */

const noProductsImage = "https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg";

class Stats extends React.Component {
  state = { open: false };

  render() {
    const emptyState = !store.get("ids");
    return (
      <Page title="Statistics" separator>
        <TitleBar
          title="View Stats"
          secondaryActions={mainMenu.secondaryActions}
        />
        <Layout>
          {emptyState ? (
            <EmptyState
              heading="None"
              action={{
                content: 'No stats here'
              }}
              image={noProductsImage}
            >
              <p>No statistics yet.</p>
            </EmptyState>
          ) : (
              <ResourceListWithProductsStats />
            )}
        </Layout>
      </Page>
    );
  }

  handleSelection = (resources) => {
    const idsFromResources = resources.selection.map((product) => product.id);
    this.setState({ open: false });
    console.log(idsFromResources);
    store.set("ids", idsFromResources);
  };
}

export default Stats;
