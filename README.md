# 🚀 AWS Lambda + API Gateway Integration (Serverless REST API)

[![Python](https://img.shields.io/badge/Python-3.9+-blue.svg)](https://www.python.org/)
[![AWS Lambda](https://img.shields.io/badge/AWS-Lambda-orange.svg)](https://aws.amazon.com/lambda/)
[![API Gateway](https://img.shields.io/badge/AWS-API_Gateway-yellow.svg)](https://aws.amazon.com/api-gateway/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

A minimal **serverless REST API** built using **AWS Lambda** and **API Gateway**, which fetches data from an external API (`jsonplaceholder.typicode.com`).  
This project demonstrates how to integrate Lambda functions with API Gateway triggers, layers, and HTTP endpoints.

---

## 🧩 Architecture Overview

```text
Client (Postman / Browser)
          │
          ▼
    API Gateway (HTTP Trigger)
          │
          ▼
   AWS Lambda Function
          │
          ▼
External API (JSONPlaceholder)

```
<p align="center"> <img src="./assets/flow_diagram.gif" width="550" alt="Flow of API Gateway + Lambda" /> </p>

💡 Project Overview

This project uses AWS Lambda as a lightweight compute service to handle HTTP requests routed from API Gateway.
When triggered, the Lambda function calls a public REST API and returns its JSON response.
Features

    ⚙️ Serverless architecture – No servers to manage.

    🌐 External API call using Python requests.

    🧱 Config separation (config.py for base URL).

    🧩 API Gateway integration with Lambda triggers and layers.

    🧾 JSON response displayed in Postman or your browser.
  ```
📂 Project Structure

aws-lambda-api/
├── lambda-function.py      # Core Lambda logic
├── config.py               # Base URL configuration
├── assets/
│   ├── screenshot.png      # Your AWS Lambda + Gateway setup
│   └── flow_diagram.gif    # Architecture visualization
└── README.md

⚙️ Setup & Deployment
Prerequisites

    🧠 AWS Account (with Lambda + API Gateway access)

    🐍 Python 3.8+

    🧰 AWS CLI configured locally

Steps

  1. Clone the repository
git clone https://github.com/<your-username>/aws-lambda-api.git
cd aws-lambda-api



  2. Deploy Lambda Function

    Go to AWS Lambda Console

    Create new function → Author from scratch

    Upload your lambda-function.py and config.py

    Add a Layer for external libraries (e.g. requests)

    Set Handler → lambda-function.lambda_handler

  3. Integrate with API Gateway

    Create a new HTTP API

    Add Lambda Trigger

    Deploy API → Copy endpoint URL

  4. Test using Postman
    GET https://<api-id>.execute-api.<region>.amazonaws.com/dev
  
  You’ll receive:
{
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}

📸 Screenshots
<p align="center"> <img src="./assets/screenshot.png" width="700" alt="AWS Lambda + API Gateway Setup" /> </p> 


🧠 Future Improvements

    Add POST & DELETE endpoints

    Integrate with DynamoDB for persistence

    Add CloudWatch Logs for monitoring

    Include CORS support for frontend apps
```

👨‍💻 Author

Iftikhar Hussain
📧 Reach me on GitHub or LinkedIn for collaboration.
🪪 License

This project is licensed under the MIT License
.
 <p align="center"> <b>“Build once. Scale infinitely. Go serverless.”</b> </p> ``` 

