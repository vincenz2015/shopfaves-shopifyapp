const getSubscriptionUrl = async (ctx, accessToken, shop) => {
  const query = JSON.stringify({
    query: `mutation {
        appSubscriptionCreate(
            name: "Shopfaves pay per referral plan"
            returnUrl: "${process.env.HOST}"
            test: true
            lineItems: [
            {
              plan: {
                appUsagePricingDetails: {
                    cappedAmount: { amount: 50, currencyCode: USD }
                    terms: "50c for each referral click through on your products"
                }
              }
            }
            {
              plan: {
                appRecurringPricingDetails: {
                    price: { amount: 0, currencyCode: USD }
                }
              }
            }
            ]
          ) {
              userErrors {
                field
                message
              }
              confirmationUrl
              appSubscription {
                id
              }
          }
      }`,
  });

  const response = await fetch(
    `https://${shop}/admin/api/2019-10/graphql.json`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Access-Token": accessToken,
      },
      body: query,
    }
  );

  const responseJson = await response.json();
  const confirmationUrl =
    responseJson.data.appSubscriptionCreate.confirmationUrl;
  return ctx.redirect(confirmationUrl);
};

module.exports = getSubscriptionUrl;
