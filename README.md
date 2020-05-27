# random_challenge
A random user generators app.

## :computer:Tech Stack
- Frontend UI
    - ReactJs
    - Material UI
- Frontend Deploy
    - Amplify AWS CloudFront

- Auth Services
    - Firebase

- Api Request
    - AJAX
    - RandomUsers Api

- Project Management Tool
    -  [Github Project](https://github.com/betanyeli/random_challenge)

- Sprint duration
    - 5 days.

## :collision: AWS CLOUDFRONT DEPLOY :collision:
- :warning:FIRST! Create An AWS develop Account :warning:
- Run in terminal `npm install -g @aws-amplify/cli`
- Run in terminal `Amplify Configure` and login in your AWS Account
- Run in terminal `Amplify Init` for initialize a new Project
- Run  in terminal `Amplify add hosting` in the path of your project.
    - Select AWS CloudFront & S3 Bucket
    - Select DEV option for HTTP or PROD for HTTPS.
- Run in terminal `Amplify publish` 