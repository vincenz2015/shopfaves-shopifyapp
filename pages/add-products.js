import { Page, EmptyState } from "@shopify/polaris";
import { ResourcePicker } from "@shopify/app-bridge-react";
import store from "store-js";
import ResourceListWithProducts from "../components/ResourceList";
import { TitleBar } from "@shopify/app-bridge-react";
import mainMenu from "../components/mainMenu";

/* Add products */

const noProductsImage = "https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg";

class AddProducts extends React.Component {
  state = { open: false };

  render() {
    const emptyState = !store.get("ids");
    return (
      <Page title="Select Products" separator>
        <TitleBar
        title="My Products"
          primaryAction={{
            content: "Select products",
            onAction: () => this.setState({ open: true }),
          }}
          secondaryActions={mainMenu.secondaryActions}
        />
        <ResourcePicker
          resourceType="Product"
          showVariants={false}
          open={this.state.open}
          onSelection={(resources) => this.handleSelection(resources)}
          onCancel={() => this.setState({ open: false })}
        />
        {emptyState ? (
          <EmptyState
            heading="None"
            action={{
              content: 'Select products',
              onAction: () => this.setState({ open: true }),
            }}
            image={noProductsImage}
          >
            <p>No products yet.</p>
          </EmptyState>
        ) : (
            <ResourceListWithProducts />
          )}
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

export default AddProducts;
