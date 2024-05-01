- Clone the project and run the command for install node modules

```bash
 npm i

#  Run the command for start the project -
 npm start
```

<!-- API Endpoint-->
<!-- Create Content  -->

POST - http://localhost:5000/api/v1/content/create-content
example data -

{
"banner": {
"heading": "this is heading",
"subheading": "this is subheading",
"imageUrl": "https://image.com"
}
}

GET - http://localhost:5000/api/v1/content/get-contents

GET by ID - http://localhost:5000/api/v1/content/663128242df7adf7fbbc8a1c

PATCH - http://localhost:5000/api/v1/content/6631af36b953a7cc72660c3d
