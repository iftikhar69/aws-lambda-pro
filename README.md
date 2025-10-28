# ⚡ AWS Lambda REST API Integration

A practical demonstration of how to integrate **AWS Lambda** with **Amazon API Gateway** to build a fully serverless REST API — scalable, cost-efficient, and easy to maintain.

---

## 🌐 Overview

This project shows how to:
- Create and deploy AWS Lambda functions.
- Integrate Lambda with API Gateway.
- Configure RESTful endpoints (GET, POST, PUT, DELETE).
- Test and validate API responses.
- Manage deployments through Git and GitHub.
- ✅ **Automate CI/CD with GitHub Actions** for linting, testing, and Lambda deployment.
- ✅ **Define infrastructure with Terraform (IaC)** for reproducible and consistent environments.

---

## 🗂️ Project Structure


```
lambda-rest-api-integration/
├── .github/
│ └── workflows/
│ ├── ci.yml
│ └── deploy.yml
├── terraform/
│ ├── main.tf
│ ├── variables.tf
│ └── outputs.tf
├── src/
│ └── (Lambda source files)
├── tests/
│ └── handler.test.js
├── Dockerfile
├── README.md
└── ...
```

---


---

## ⚙️ Features

✅ **Serverless Architecture** – No need to manage servers  
✅ **API Gateway Integration** – Seamless connection between client and Lambda  
✅ **Scalable & Cost-Efficient** – Pay only for execution time  
✅ **Secure Endpoints** – IAM roles and policies  
✅ **Simple Deployment** – Works with AWS Console or CLI  
✅ **CI/CD Ready** – Automated testing and deployment with GitHub Actions  
✅ **Infrastructure as Code (IaC)** – Terraform-based Lambda provisioning  
✅ **Docker Support** – Optional local testing or containerized Lambda builds  

---

## 🚀 Getting Started

### 1️⃣ Prerequisites
Make sure you have:
- An **AWS account**
- **AWS CLI** configured  
- **Terraform** (for infrastructure provisioning)
- **Node.js** or **Python** (depending on your Lambda runtime)
- **Postman** or **curl** for API testing

---

### 2️⃣ Setup & Deployment

#### Clone the Repository
```bash
git clone https://github.com/iftikhar69/lambda-rest-api-integration.git
cd lambda-rest-api-integration

```

Deploy Using Terraform
```bash
cd terraform
terraform init
terraform plan
terraform apply -auto-approve
```

Deploy the Lambda Function (Manual Option)

You can deploy via AWS Console or using AWS CLI:
```bash
aws lambda create-function \
  --function-name MyLambdaAPI \
  --runtime nodejs18.x \
  --role arn:aws:iam::<your-account-id>:role/<your-lambda-role> \
  --handler index.handler \
  --zip-file fileb://function.zip
```
Integrate with API Gateway

Open API Gateway in AWS Console.

Create a new REST API.

Add a resource (e.g., /users) and methods (GET, POST, etc.).

Link each method to your Lambda function.

Deploy the API to a stage (e.g., prod).

🔍 Testing the API
Use curl or Postman to test endpoints like:
```
curl -X GET https://<api-id>.execute-api.<region>.amazonaws.com/prod/users
```
Run unit tests locally:
```
npm test
```

🧪 CI/CD Pipeline

This project includes GitHub Actions workflows that:

Automatically install dependencies and run tests.

Deploy the Lambda function on merge to main.

File: .github/workflows/ci.yml
```
name: Lambda CI
on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]
jobs:
  build-and-test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 18
      - run: npm ci
      - run: npm test

```

🐳 Docker Support
You can run and test locally using Docker:
```
docker build -t lambda-api .
docker run -p 3000:3000 lambda-api
```
📸 Screenshots
🔹 Lambda REST API Setup
![Lambda Setup](https://github.com/iftikhar69/lambda-rest-api-integration/blob/main/Assets/Screenshot%20from%202025-10-23%2022-31-13.png?raw=true)

### 🔹 Sample Output / Response
![Sample Output](https://github.com/iftikhar69/lambda-rest-api-integration/blob/main/Assets/image1.png?raw=true)

---

🧩 Tech Stack
| Component            | Description                         |
| -------------------- | ----------------------------------- |
| **AWS Lambda**       | Core serverless compute service     |
| **API Gateway**      | Manages REST endpoints              |
| **IAM**              | Secure permission management        |
| **Terraform**        | Infrastructure as Code provisioning |
| **Docker**           | Optional containerized testing      |
| **GitHub Actions**   | CI/CD automation                    |
| **Node.js / Python** | Runtime for Lambda                  |
| **GitHub**           | Version control and collaboration   |

---

## 🧠 Learn More

- [AWS Lambda Documentation](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html)
- [Amazon API Gateway Docs](https://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html)
- [Serverless Framework](https://www.serverless.com/framework/docs/)

---

## 👨‍💻 Author

**[iftikhar69](https://github.com/iftikhar69)**  
💡 Passionate about cloud computing, serverless systems, and automation.

---

## 🪪 License

This project is licensed under the **MIT License**.  
See the [LICENSE](LICENSE) file for more details.
