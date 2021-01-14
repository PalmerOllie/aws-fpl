import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

import response from '/opt/nodejs/defaultResponses';

export default async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    return Promise.resolve(
        {
            statusCode: 200,
            headers: {
                "some-custom-header":"some custom value"
            },
            body: JSON.stringify('Hello World!') 
        });
    //     response.success(
    //         200, {}, { message: 'Hello World!' })
    // );
}