import { Page, 
    Layout,
    Card,
    Form,
    FormLayout,
    Stack,
    TextField,
    Button,
    Select,
    Avatar,
    Heading,
    ResourceList,
    ResourceItem,
    SettingToggle,
    TextStyle } from "@shopify/polaris";
  // const img = "https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg";
  import { ResourcePicker, TitleBar } from "@shopify/app-bridge-react";
  class ViewStatus extends React.Component {
   
    render() {
        const secondaryActions = [{content: 'Dashboard', url: '/'},
        {content: 'Add Product', url: '/add-products'},
        {content: 'View Status', url: '/viewStatus'},
          ];

      return (
            
        <Page
            title="Statistics"
        >
            <TitleBar
                title="Welcome to Shopfaves"
                secondaryActions={secondaryActions}
            />
            {/* <Layout>
                <Layout.AnnotatedSection
                    title="Statistics"
                    description=""
                > */}
                <br/>
                <div style={{float:"right" , paddingRight:"15px"}}><p>referral clicks this month</p></div>
               <br/>
               <Card 
               >
                 
  <ResourceList
    resourceName={{singular: 'customer', plural: 'customers'}}
    items={[
      {
        id: 145,
        // url: 'customers/145',
        avatarSource:
          'https://burst.shopifycdn.com/photos/freelance-designer-working-on-laptop.jpg?width=746',
        name: 'Yi So-Yeon',
        location: 'Gwangju, South Korea',
      },
      {
        id: 146,
        // url: 'Order/146',
        avatarSource:
          'https://burst.shopifycdn.com/photos/freelance-designer-working-on-laptop.jpg?width=746',
        name: 'New',
        location: 'Gwangju, South Korea',
      },
    ]}
    renderItem={(item) => {
      const {id, url, avatarSource, name, location} = item;

      return (
        <ResourceItem
          id={id}
        //   url={url}
          media={
            <Avatar customer size="medium" name={name} source={avatarSource} />
          }
          accessibilityLabel={`View details for ${name}`}
          name={name}
        >
          <h3>
            <TextStyle variation="strong">{name}</TextStyle>
          </h3>
          <div>{location}</div>
          <span style={{float:"right",fontSize:"47px",fontWeight:"600",display:"flex",marginTop:"-32px"}}><h3>16</h3></span>
        </ResourceItem>
      );
    }}
  />
</Card>
                {/* </Layout.AnnotatedSection>
            </Layout> */}
        <div className="bottom" style={{marginTop:"50px"}}>
            <p>Amount owing this month <b style={{size:"20px"}}>$3.50</b></p><br/>
            <p style={{size:"5px",marginTop:"-20px"}}>*based on 50c per referral</p>
        </div>
        </Page>
      );
    }
  }
  export default ViewStatus;
//   <Card sectioned title="Fulfill order">
//           <Stack alignment="center">
//             <Stack.Item fill>
//               <p>Buy postage and ship remaining 2 items</p>
//             </Stack.Item>
//             <Button primary>Continue</Button>
//           </Stack>
//         </Card>