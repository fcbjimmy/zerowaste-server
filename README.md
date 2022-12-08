# project

for image upload
npm i express-fileupload
import it on app.js and invoke it

upload controller
uploadProductImage
req.files

Cloudinary
CLOUD_NAME
CLOUD_API_KEY
CLOUD_API_SECRET

npm i cloudinary
import cloudinary
v2
cloudinary.config({
cloud_name: process.env.CLOUD_NAME,
api_key: process.env.CLOUD_API_KEY,
api_secret: process.env.CLOUD_API_SECRET,
})

temp files
add folder on cloudinary

user routes
sign up✅
login ✅
logout
Authentication ✅
get all products✅

product routes
create product ✅
get all products from current user ✅
get single products ✅
update product ✅
delete product ✅

enum roles admin user

upload files ✅

How to connect to an SQL database using URI string with Sequelize.js
https://gist.github.com/iasjem/856dda81664bce0ff55e3f848a6f8bdf
https://stackoverflow.com/questions/59680367/using-connection-uris-with-read-replication-in-sequelize

https://sequelize.org/docs/v6/getting-started/
const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname') // Example for postgres

Working with ENUM type values in Sequelize
https://sebhastian.com/sequelize-enum/
# zerowaste-server
