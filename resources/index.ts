import axios from 'axios'
import { xml2json } from 'xml-js'
import { APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from 'aws-lambda'

export async function handler(event: APIGatewayProxyEventV2): Promise<APIGatewayProxyResultV2> {
    const query = event.queryStringParameters || {}
    const url = query['url'] || ''
    
    const response: APIGatewayProxyResultV2 = { headers: { 'Content-Type': 'application/json' } }

    try {
        const res = await axios.get(url)
        response.statusCode = 200
        response.body = xml2json(res.data, { compact: true, spaces: 4 })
        
    } catch (err) {
        response.statusCode = 503
        response.body = JSON.stringify({ error: `Requested url ${url} failed on our request with error ${err}` })
    }

    return response
}