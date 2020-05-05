import { Page, 
  Layout,
  Card,
  Select,
  Heading,
  ResourceList,
  ResourceItem,
  PageActions,
  AppProvider,
  TextStyle } from "@shopify/polaris";
  import store from "store-js";
// const img = "https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg";
import { ResourcePicker, TitleBar } from "@shopify/app-bridge-react";
class AddProduct extends React.Component {
  state = {
    open: false ,
   selected : 'today',
   option : [
    {label: 'Today', value: 'today'},
    {label: 'Yesterday', value: 'yesterday'},
    {label: 'Last 7 days', value: 'lastWeek'},
   
   ],
   items:[
    {
      id: 6,
      url: 'posts/6',
      title: 'How To Get Value From Wireframes',
      author: 'Jonathan Mangrove',
    },
  ],
};

  render() {
    const emptyState = !store.get("ids");
    const selected = '';
    const secondaryActions = [{content: 'Dashboard', url: '/'},
    {content: 'Add Product', url: '/add-products'},
    {content: 'View Status', url: '/viewStatus'},
      ];

    // const handleSelectChange = (value) => setSelected(value), []);
  
    const options = [
      {label: 'Today', value: 'today'},
      {label: 'Yesterday', value: 'yesterday'},
      {label: 'Last 7 days', value: 'lastWeek'},
    ];


    const selectedItems = '';
    // const actionGroups = [{title: 'Baz', actions: [{content: 'Baz', url: '/baz'}]}];
    return (
           <Page>
               <TitleBar
          // primaryAction={{
          //   content: "Welcome to Shopfaves",
          //   onAction: () => this.setState({ open: true }),
          // }}
          title="Welcome to Shopfaves"
          // primaryAction={primaryAction}
          secondaryActions={secondaryActions}
          // actionGroups={actionGroups}
          
        />
               <Layout.Section>
                   <Layout.AnnotatedSection
                    title = "Choose your products"
                    description = "Select a collection that contains the products that you wish to showcase on Shopfaves"
                   >
                       <Card sectioned>
                       <Heading element="h5">Collection</Heading>
                       <Select
                          label=""
                          options={options}
                        //   onChange={this.handleSelectChange()}
                          value={selected}
                        />
                         {/* <AppProvider apiKey="YOUR_API_KEY" i18n={{}} shopOrigin="YOUR_SHOP_ORIGIN"> */}
                         {/* <ResourcePicker
                            resourceType="Product"
                            open={this.state.open}
                            onSelection={(resources) => this.handleSelection(resources)}
                            onCancel={() => this.setState({ open: false })}
                        /> */}
                            {/* </AppProvider> */}
                       
                       </Card>
                   </Layout.AnnotatedSection>
                   <Layout.AnnotatedSection
                    title = "Choose your discount"
                    description = "Select a discount to offer (optional) It is recommended you use an offer. Please use the code shopfaves"
                   >
                       <Card sectioned>
                       <ResourceList
        resourceName={{singular: 'discount offers', plural: 'discount offers'}}
        items={[
          {
            id: 6,
            url: 'posts/6',
            title: 'SPECIAL',
            author: '10% off entire product',
          },
        ]}
        selectedItems={selectedItems}
        onSelectionChange={this.setSelectedItems('selectedItems')}
        selectable
        renderItem={(item) => {
          const {id, url, title, author} = item;
          const authorMarkup = author ? <div> {author}</div> : null;
          return (
            <ResourceItem
              id={id}
            //   url={url}
              accessibilityLabel={`View details for ${title}`}
              name={title}
            >
              <h3>
                <TextStyle variation="strong">{title}</TextStyle>
              </h3>
              {authorMarkup}
            </ResourceItem>
          );
        }}
      />
                         
                       </Card>
                   </Layout.AnnotatedSection>
                  
               </Layout.Section>
               <PageActions
  primaryAction={{
    content: 'Save',
  }}
/>

           </Page>
    );
  }


  handleSelection = (resources) => {
    const idsFromResources = resources.selection.map((product) => product.id);
    this.setState({ open: false });
    console.log(idsFromResources);
    store.set("ids", idsFromResources);
  };

  handleSelectChange = () =>{
    console.log("on select");
  }
  setSelectedItems = (valye) =>{

  }
  

}

export default AddProduct;
