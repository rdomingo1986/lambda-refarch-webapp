// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "4a0upqpan98e24nv7na5sdi5k8",     // CognitoClientID
  "api_base_url": "https://p0uvqpy91f.execute-api.us-west-2.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-sam-app.auth.us-west-2.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d19uwzcpm3exhw.amplifyapp.com"                                      // AmplifyURL
};

export default config;
