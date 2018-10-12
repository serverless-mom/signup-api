const qs = require('qs');
const AWS = require('aws-sdk');
exports.handler = async message => {
  console.log(message);
  const formData = qs.parse(message.body);
  console.log(formData);

  const dynamodb = new AWS.DynamoDB();
  const params = {
    Item: {
      'email': {
        S: formData.email
      },
      'name': {
        S: formData.name
      }
    },
    ReturnConsumedCapacity: 'TOTAL',
    TableName: process.env.TABLE_NAME
  };
  console.log (params.Item)

  await dynamodb.putItem(params).promise();
  console.log (params.Item)
  params.Item['email'] = params.Item['email'] + '1'
  await dynamodb.putItem(params).promise();


  return {
    statusCode: 302,
    headers: {'Location': 'https://stackery.io'}
  };
};
