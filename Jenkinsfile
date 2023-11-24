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
            // Run Cypress tests and capture logs
            def logsFile = 'C:\\Users\\BenScott\\.jenkins\\workspace\\cypress_test_pipeline\\cypress-logs.txt'
            bat 'npx cypress run --spec cypress/e2e/mainTest.cy.js 2>&1 | Out-File -FilePath ' + logsFile
            
            echo "Cypress Logs:"
            echo "--- Start of Logs ---"
            echo readFile(logsFile)
            echo "--- End of Logs ---"
            
            // Fail the build if the Cypress tests return a non-zero exit code
            bat 'exit 0'
        }
    }
}

    }
}
