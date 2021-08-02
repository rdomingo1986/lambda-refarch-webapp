// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "3ramkn0a7vjah0v6im90eaerip",     // CognitoClientID
  "api_base_url": "https://m66qtntzt1.execute-api.us-west-2.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-lambda-refarch-webapp-demo.auth.us-west-2.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d1aqk1qqy6aq1f.amplifyapp.com"                                      // AmplifyURL
};

export default config;
