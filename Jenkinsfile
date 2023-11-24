pipeline {
    agent any

    stages {
        stage('Checkout and Install Dependencies') {
            steps {
                script {
                    // Checkout the source code from your GitHub repository
                    checkout changelog: false, poll: false, scm: [
                        $class: 'GitSCM',
                        branches: [[name: '*/main']],
                        doGenerateSubmoduleConfigurations: false,
                        extensions: [[$class: 'CleanCheckout']],
                        submoduleCfg: [],
                        userRemoteConfigs: [[url: 'https://github.com/benbilgili/jenkins_intro/']]
                    ]

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
