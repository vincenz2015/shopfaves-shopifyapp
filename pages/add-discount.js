import {
  Button,
  Card,
  Form,
  FormLayout,
  Layout,
  Page,
  SettingToggle,
  Stack,
  TextField,
  TextStyle,
} from '@shopify/polaris';
import { TitleBar } from "@shopify/app-bridge-react";
import mainMenu from "../components/mainMenu";

mainMenu.primaryAction = { content: 'View Stats', url: '/stats' };

class Settings extends React.Component {
  state = {
    discount: '10%',
    enabled: false,
  };

  render() {
    const { discount, enabled } = this.state;
    const contentStatus = enabled ? 'Disable' : 'Enable';
    const textStatus = enabled ? 'enabled' : 'disabled';

    return (
      <Page title="Create an Offer" separator>
        <TitleBar
          title="My Offer"
          primaryAction={mainMenu.primaryAction}
          secondaryActions={mainMenu.secondaryActions}
        />
        <Layout>
          <Layout.AnnotatedSection
            title="Default discount"
            description="Add a product to Sample App, it will automatically be discounted."
          >
            <Card sectioned>
              <Form onSubmit={this.handleSubmit}>
                <FormLayout>
                  <TextField
                    value={discount}
                    onChange={this.handleChange('discount')}
                    label="Discount percentage"
                    type="discount"
                  />
                  <Stack distribution="trailing">
                    <Button primary submit>
                      Save
                      </Button>
                  </Stack>
                </FormLayout>
              </Form>
            </Card>
          </Layout.AnnotatedSection>
        </Layout>
      </Page>
    );
  }

  handleSubmit = () => {
    this.setState({
      discount: this.state.discount,
    });
    console.log('submission', this.state);
  };

  handleChange = (field) => {
    return (value) => this.setState({ [field]: value });
  };

}

export default Settings;