import gql from "graphql-tag";
import { Query } from "react-apollo";
import {
  Card,
  Layout,
  ResourceList,
  Stack,
  TextStyle,
  Thumbnail
} from "@shopify/polaris";
import store from "store-js";

const GET_PRODUCTS_BY_ID = gql`
  query getProducts($ids: [ID!]!) {
    nodes(ids: $ids) {
      ... on Product {
        title
        handle
        descriptionHtml
        id
        images(first: 1) {
          edges {
            node {
              originalSrc
              altText
            }
          }
        }
        variants(first: 1) {
          edges {
            node {
              price
              id
            }
          }
        }
      }
    }
  }
`;

class ResourceListWithProducts extends React.Component {

  render() {
    return (
      <Query query={GET_PRODUCTS_BY_ID} variables={{ ids: store.get("ids") }}>
        {({ data, loading, error }) => {
          if (loading) return <div>Loading…</div>;
          if (error) return <div>{error.message}</div>;
          console.log(data);
          return (
            <Layout.Section>
              <Card>
                <ResourceList
                  showHeader
                  resourceName={{ singular: "Product", plural: "Products" }}
                  sortOptions={[
                    {label: 'January', value: 'DATE_MODIFIED_DESC'},
                    {label: 'February', value: 'DATE_MODIFIED_ASC'},
                  ]}
                  onSortChange={(selected) => {
                    console.log(`Sort option changed to ${selected}.`);
                  }}
                  items={data.nodes}
                  renderItem={(item) => {
                    const media = (
                      <Thumbnail
                        customer size="small"
                        source={
                          item.images.edges[0]
                            ? item.images.edges[0].node.originalSrc
                            : ""
                        }
                      />
                    );
                    const price = item.variants.edges[0].node.price;
                    return (
                      <ResourceList.Item
                        id={item.id}
                        media={media}
                        accessibilityLabel={`View details for ${item.title}`}
                      >
                        <Stack>
                          <Stack.Item fill>
                                {item.title}
                          </Stack.Item>
                          <Stack.Item>
                            <p>
                              <b style={{ fontWeight: "bold", fontSize: "24px" }}>10</b> referrals
                            </p>
                          </Stack.Item>
                        </Stack>
                      </ResourceList.Item>
                    );
                  }}
                />
              </Card>
              <div style={{ padding: '30px 0 50px 0' }}>
                <p>Amount owing this month <b style={{ fontSize: "24px" }}>$3.50</b></p>
                <p style={{ fontSize: "12px" }}>*based on 50c per referral</p>
              </div>
            </Layout.Section>

          );
        }}
      </Query>
    );
  }
}

export default ResourceListWithProducts;
