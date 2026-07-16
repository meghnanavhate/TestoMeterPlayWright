CI(Continous Integratio)-CD(Continous Delivery)

CI --> Developers write code and upload it to Git. The system automatically builds the code and runs tests to check if everything is working correctly


CD --> It the tests pass, the application is automatically deployed to the testing or production envirnment.

Types of job
1. Atomic Job
--> An atomic job runs automatically after every code commit or push. It builds the application and runs the tests immediately. This helps find bugs quickly

2. Nightly build
--> A nightly build job runs once every day at a fixed time 