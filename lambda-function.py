import json
from config import base_url
import requests

def lambda_handler(event, context):
    res = requests.get(base_url + "todos/1")
    return {
        'statusCode': res.status_code,
        'body': json.dumps(res.json())
    }
