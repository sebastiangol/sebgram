# sebgram

#### • There is a network issue with the Faker.js images which causes the several circular images on the page to take about 15 seconds to load, as of 25/11/2021.

This website is deployed using vercel: https://sebgram.vercel.app/

This project is a social media website for making posts. It is based on Instagram. The project uses the React library with the Next.js framework. Tailwind CSS is used to style the application. Firebase is used for authentication and data storage. Recoil is used for state manegement. NextAuth is used for authentication. Heroicons is used for the icons. Faker.js is used to populate the website with random data.

The page looks different depending on whether the user is signed in or not.

#### Signed out:
![image](https://user-images.githubusercontent.com/75766182/143477939-a04b25e0-f499-4064-b2e7-7fd9bf0f5a56.png)
#### Signed in:
![image](https://user-images.githubusercontent.com/75766182/143479563-68161a16-5e7c-4a8d-b492-5bf98a7f2520.png)

The website is responsive, adapting the page content to various screen sizes using TailwindCSS:
![image](https://user-images.githubusercontent.com/75766182/143490785-ab04a2cc-c9c5-41c6-9371-de24c18defb7.png)

The header contains a logo, an input field, a home icon button and a sign-in button. The logo and home icon buttons bring the user back to the home page if they are not already on it. When signed in, there is additionally a plus-circle button which is for creating a post. The sign-in button is replaced by the users's icon, which also acts as a logout button. When the buttons are hovered over, a tooltip is displayed. The left-side logo changes depending on screen size.

When clicking on the sign-in button, a sign-in page is displayed:
![image](https://user-images.githubusercontent.com/75766182/143489594-f27a778b-30c8-4870-962d-c0296dea7b33.png)

The sign-in-with-google button brings the user to a google authentication page, where you can sign in with a google account. After signing in, the user is brought back to the home page. The profile picture and first/last name of the logged-in google account are used on the page: the image in the stories section, and the name/image in the profile section on the right. The first and last name are combined into one username, which is then lowercased. The image and username will also be used if the user makes a post or a comment.

The main feed area has a stories section and a posts section. The stories section contains 20 stories represented by a circular image and name. The image and name are randomly generated using Faker.js. The section can be scrolled horizontally.

The post section displays posts. Posts contain the username of the poster, an image, a like counter, a caption and comments. When a user is signed in, the post additionally contains buttons including a like button, and a textfield and button for making a comment on the post.
#### Post when Signed out:
![image](https://user-images.githubusercontent.com/75766182/143480404-8c460539-a60c-47a7-a863-9e55a19b0c27.png)
#### Post when Signed in:
![image](https://user-images.githubusercontent.com/75766182/143480842-8d80d9e5-95fc-4d3d-ad58-747bec9cc213.png)


