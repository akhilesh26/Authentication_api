## Basic Authentication api end point
#### Prerequisites
* Node.js, MySQL-server
#### Follow these steps to run this project
1. First copy the repo link `https://github.com/akhilesh26/Authentication_api.git`
2. Open your terminal and run command `git clone <Paste repo link>`
3. Change directory to the project `cd Authentication_api`
4. Update dbConnect.js file <update mysql password and other if required>
5. Run schema.js file to create database schema `mysql -u root -p < schema.js`
6. Check database name HRG with user table.
7. Install dependencies `npm install`
8. Run project `npm start` and goto browser and open `localhost:3000` 
9. Open Postman and check all endpoint actions. 
                                                                              
### Some screenshots of Postman
* Root
![root](https://user-images.githubusercontent.com/15086865/45236102-8783de80-b2f8-11e8-9461-a04e55fdaa5d.png)


* Create new user
![create](https://user-images.githubusercontent.com/15086865/45235938-09bfd300-b2f8-11e8-9028-123904842069.png)

* Login user
![login](https://user-images.githubusercontent.com/15086865/45235947-10e6e100-b2f8-11e8-93a2-d15bc57f366e.png)

* Forgot password
![forgot](https://user-images.githubusercontent.com/15086865/45235950-15ab9500-b2f8-11e8-9640-105927a8739e.png)

* Reset password
![reset](https://user-images.githubusercontent.com/15086865/45235956-1a704900-b2f8-11e8-8613-a342eceb8774.png)
