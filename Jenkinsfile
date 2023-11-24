pipeline {
    agent any

    stages {
        stage('Checkout and Install Dependencies') {
            steps {
                script {
                    echo "Current directory: ${pwd()}"
                    bat 'dir'
                    bat 'npm install'
                }
            }
        }

        stage('Run Cypress Tests') {
            steps {
                script {
                    // Run Cypress tests and print logs directly to the console
                    bat 'npx cypress run --spec cypress/e2e/mainTest.cy.js 1>C:\\Users\\BenScott\\.jenkins\\workspace\\cypress_test_pipeline\\cypress-logs.txt 2>&1'
                    echo "Cypress Logs:"
                    echo "--- Start of Logs ---"
                    echo readFile('C:\\Users\\BenScott\\.jenkins\\workspace\\cypress_test_pipeline\\cypress-logs.txt')
                    echo "--- End of Logs ---"
                }
            }
        }
    }
}
