# papaSquat

- [Backend Development](#backend-development)
- [PR Review Process](#pr-review-process)
- [Setting Up the Database](#database)

## Backend Development ##
### Dependencies ###
1. Maven (https://maven.apache.org/)
2. IDE (https://code.visualstudio.com/)

### Steps to Bring Up the Web App ###
[generally following instructions at this link: https://spring.io/guides/gs/spring-boot/]
1. Download Maven.
  - Download Maven as a zip file from this site (https://maven.apache.org/)
  - Go to the folder where the zip file was installed, and type `unzip apache-maven-3.8.1-bin.zip`.
  - Add it to your environment variables by typing `export PATH="$_nameoffolder_/apache-maven-3.8.1/bin:$PATH"`.
2. Go back to your project, and go to the sprint-boot folder: `cd spring-boot/`.
3. Make the `mvnw` file an executable by typing `chmod a+x mvnw`.
4. Start the local development website using `./mvnw spring-boot:run`. (This may take a while to download all the dependencies)
  - This may fail depending on if there are any errors, or if you don't have the right credentials.
5. Open a browser and go to http://localhost:8080/

## PR Review Process ##
1. Branch off from `develop` branch in your IDE with `git checkout -b branchName`
    - All branches should start with `feature/`.
    - You can work off someone else's branch if they've pushed it by checking out to their branch name: `git checkout theirBranchName`.
2. Make your changes, `git add`, `git commit`, then `git push origin branchName`
    - If you forget to make a new branch, you can always do `git stash` then `git stash pop` after you create your branch.
4. Create your pull request in the Pull Requests tab. Assign yourself as the assignee, and add the whole team as reviewers.
    - All PRs need at least 3 approvers to merge.
    - After there are enough approvers, the 

- Together, we will merge the develop branch into main. Our web application will deploy the `main` branch.

## Database ##
### Viewing Data ###
1. Ask a member of the team to give you access to the database.
  - There are two databases, one called `papasquat-test` and one called `papasquat-1fdae`
  - The first one is for development, and the second one is for production.
2. Go to https://console.firebase.google.com/u/0/. You should be able to click on the project in your dashboard if you have been added. 
3. After clicking the project, go to "Firestore Database" on the left navbar to see the database. 
4. You can edit current documents, delete them, or create new ones through this page.

### Connecting Springboot to DB ###
1. Go to `spring-boot/src/secrets/firebaseDB.json`
2. Put the DB secrets there. This will tell Springboot what DB to connect to. 

