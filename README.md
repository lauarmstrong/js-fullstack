# js-fullstack

This project was created as part of the Udacity Fullstack Javascript Nanodegree Course.

# What does it do

This is an image-processing api to display the image in the dimensions specified by the user, and save the image as a thumbnail.
There are 4 images available in the assets/images folder.
The user must provide the correct params in the URL:
To add/ view an image, use the format: http://localhost:3001/api/imageApi?filename=fox&height=100&width=100 for example, specifying your own dimensions.
If the filename, height or width is missing from the URL, a message will display to the user.

# Run the app

-   npm run build
-   npm run start

# Test the app

-   npm run test (unit testing with Jasmine)
-   npm run lint (checks for linting errors)
