import { EmptyState, Layout, Page ,Button} from "@shopify/polaris";
import { ResourcePicker, TitleBar } from "@shopify/app-bridge-react";
import store from "store-js";
import ResourceListWithProducts from "../components/ResourceList";

const img = "https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg";

/* Dashboard */
class Index extends React.Component {
  state = { open: false };
  render() {
    const emptyState = !store.get("ids");
    // const primaryAction = {content: 'Foo', url: '/foo'};
    const secondaryActions = [{content: 'Dashboard', url: '/'},
    {content: 'Add Product', url: '/add-products'},
    {content: 'View Status', url: '/viewStatus'},
      ];
    // const actionGroups = [{title: 'Baz', actions: [{content: 'Baz', url: '/baz'}]}];
    return (
      <Page>
       
        <TitleBar
          title="Welcome to Shopfaves"
          secondaryActions={secondaryActions}
        />
        {emptyState ? (
          <Layout>
            <EmptyState
              heading="Welcome to Shopfaves"
              action={{
                content: 'Get started',
                onAction: () => this.setState({ open: true }),
              }}
              image={img}
            >
              <p>Promote your top products by showcasing them on shopfaves.co.nz New Zealand.  People want to discover your best products and it's even better if you offer a discount!</p>
            </EmptyState>
          </Layout>
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

export default Index;
