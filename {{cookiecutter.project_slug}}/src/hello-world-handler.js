const { metricScope } = require("aws-embedded-metrics");
let response;

exports.lambdaHandler = metricScope(metrics =>
    async () => {

    try {

        response = {
            'statusCode': 200,
            'body': JSON.stringify({
                message: 'hello from helloworld microservice'
            })
        }
    } catch (err) {
        logger.error('This is an error', err);
        return err;
    }

    return response
});