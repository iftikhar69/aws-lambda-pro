provider "aws" {
  region = "us-east-1"
}

resource "aws_lambda_function" "demo" {
  function_name = "lambda-demo"
  handler       = "src/handler.handler"
  runtime       = "nodejs18.x"
  role          = "arn:aws:iam::123456789012:role/lambda-execution-role"
  filename      = "lambda.zip"
}
