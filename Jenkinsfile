pipeline {
    agent any

    stages {
        stage('Checkout and Install Dependencies') {
            steps {
                script {
                    // Print the current directory to verify the checkout location
                    echo "Current directory: ${pwd()}"

                    // List the contents of the current directory
                    bat 'dir'

                    // Install project dependencies including Cypress
                    bat 'npm install'
                }
            }
        }

        stage('Run Cypress Tests') {
            steps {
                script {
                    // Define a log file path
                    def logFilePath = "${env.WORKSPACE}/cypress-logs.txt"

                    // Run Cypress tests and redirect output to the log file
                    bat "npx cypress run --spec cypress/e2e/mainTest.cy.js > ${logFilePath} 2>&1"

                    // Print the content of the log file
                    echo "Cypress Logs:"
                    readFile logFilePath
                }
            }
        }
    }
}
