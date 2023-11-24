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
                    // Run Cypress tests
                    bat 'npx cypress run --spec cypress/e2e/mainTest.cy.js'
                }
            }
        }
    }
}
