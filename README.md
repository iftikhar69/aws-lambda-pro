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

---

## 🗂️ Project Structure

```
lambda-rest-api-integration/
├── Assets/
│   ├── Screenshot from 2025-10-23 22-31-13.png
│   └── image1.png
├── src/
│   └── (Lambda source files)
├── README.md
└── ...
```

---

## ⚙️ Features

✅ **Serverless Architecture** – No need to manage servers  
✅ **API Gateway Integration** – Seamless connection between client and Lambda  
✅ **Scalable & Cost-Efficient** – Pay only for execution time  
✅ **Secure Endpoints** – IAM roles and policies  
✅ **Simple Deployment** – Works with AWS Console or CLI  

---

## 🚀 Getting Started

### 1️⃣ Prerequisites
Make sure you have:
- An **AWS account**
- **AWS CLI** configured  
- **Node.js** or **Python** (depending on your Lambda runtime)
- **Postman** or **curl** for API testing

---

### 2️⃣ Setup & Deployment

#### Clone the Repository
```bash
git clone https://github.com/iftikhar69/lambda-rest-api-integration.git
cd lambda-rest-api-integration
```

#### Deploy the Lambda Function
You can deploy via AWS Console **or** using AWS CLI:

```bash
aws lambda create-function \
  --function-name MyLambdaAPI \
  --runtime nodejs18.x \
  --role arn:aws:iam::<your-account-id>:role/<your-lambda-role> \
  --handler index.handler \
  --zip-file fileb://function.zip
```

#### Integrate with API Gateway
1. Open **API Gateway** in AWS Console.  
2. Create a new REST API.  
3. Add a resource (e.g., `/users`) and methods (GET, POST, etc.).  
4. Link each method to your Lambda function.  
5. Deploy the API to a stage (e.g., `prod`).  

---

## 🔍 Testing the API

Use `curl` or Postman to test endpoints like:

```bash
curl -X GET https://<api-id>.execute-api.<region>.amazonaws.com/prod/users
```

---

## 📸 Screenshots

### 🔹 Lambda REST API Setup
![Lambda Setup](https://github.com/iftikhar69/lambda-rest-api-integration/blob/main/Assets/Screenshot%20from%202025-10-23%2022-31-13.png?raw=true)

### 🔹 Sample Output / Response
![Sample Output](https://github.com/iftikhar69/lambda-rest-api-integration/blob/main/Assets/image1.png?raw=true)

---

## 🧩 Tech Stack

| Component | Description |
|------------|-------------|
| **AWS Lambda** | Core serverless compute service |
| **API Gateway** | Manages REST endpoints |
| **IAM** | Secure permission management |
| **Node.js / Python** | Runtime for Lambda |
| **GitHub** | Version control and collaboration |

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
