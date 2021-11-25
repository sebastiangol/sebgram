# sebgram

#### • There is a network issue with the Faker.js images which causes the several circular images on the page to take about 15 seconds to load, as of 25/11/2021.

This website is deployed using vercel: https://sebgram.vercel.app/

This project is a social media website for making posts. It is based on Instagram. The project uses the React library with the Next.js framework. Tailwind CSS is used to style the application. Firebase is used for authentication and data storage. Recoil is used for state manegement. NextAuth is used for authentication. Heroicons is used for the icons. Faker.js is used to populate the website with random data.

The website is responsive, adapting the page content to various screen sizes using TailwindCSS.

The page looks different depending on whether the user is signed in or not.

#### Signed out:
![image](https://user-images.githubusercontent.com/75766182/143477939-a04b25e0-f499-4064-b2e7-7fd9bf0f5a56.png)
#### Signed in:


When the user is signed in, the header contains a logo, an input field, a home icon button and a sign-in button. The logo changes depending on screen size.

The main feed area has a stories section and a posts section. The stories section contains 20 stories represented by a circular image and name. The image and name are randomly generated using Faker.js. The section can be scrolled horizontally.

The post section displays posts. Posts contain the username of the poster
