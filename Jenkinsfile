pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Deploy to AWS Lambda') {
            steps {
                echo 'Deploying Lambda with Terraform...'
                sh '''
                    cd terraform
                    terraform init -input=false
                    terraform plan -input=false
                    terraform apply -auto-approve
                '''
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished.'
        }
    }
}
