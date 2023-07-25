import { Typography } from '@mui/material';
import React from 'react';

export default function AboutTypography() {

  return (
    <>
          <Typography variant="h5" fontWeight="bold" gutterBottom >
            Wow, I have worked on this website for so long.
          </Typography>
          <Typography variant="body1" paragraph >
            I have learned so much about React, Material UI, and CSS, as well as the importance of a good-looking design,
            although I still have a long way to go :) <br/>
            I welcome everyone who visits this website to play around with it.
            I am very proud of it, and I hope you enjoy it as much as I do. Please tell me about any bugs you may find, or any suggestions you may have.
          </Typography>
          <Typography variant="body1" paragraph >
            I would like to thank tsach, my instructor, for all the help he has given me and for all the knowledge he has passed on to me,
            as well as my dad, who supported me throughout this journey.
          </Typography>

          <Typography variant="h5" fontWeight="bold" gutterBottom >
            So, without further ado, I present to you, CardNet! 
          </Typography>

          <Typography variant="h5" fontWeight="bold" sx={{pt:3}} gutterBottom>
            QUICKSTART GUIDE:
          </Typography>

          <Typography variant="body1" >
            <b>You must run the server locally in order to use this website.</b> The files for it are included in the git repository. <br/>
            You can start the server by running the command "node app" in the terminal of the server, and it will run on the 8182 port. <br/>

            All users use the same password, which is: <b>Abc123!</b> <br />
            To log in as a user, use the email: <b>user@user.com</b> <br />
            To log in as a business, use the email: <b>business@business.com</b> <br />
            To log in as an admin, use the email: <b>admin@admin.com</b> <br /> 
          </Typography>

          <Typography variant="h4" fontWeight="bold" sx={{pt:3}} gutterBottom>PAGES:</Typography>

          <Typography variant='h5' sx={{ fontWeight: 'bold', pt: 1, color:"36454F" }}>Cards (home) page:</Typography> 
          <p>
          Here you can see all the cards that have been created by businesses, which will be explained further below. <br/>
          If you are a business, you can create a card by clicking the add card button, which will take you to the card creation page, which will also be further explained below.  <br/> 
          You can also search for cards by typing in the search bar that is located on the top navigation bar, which will filter the cards by the search term. <br/>
          </p>
          <Typography variant='h5' sx={{ fontWeight: 'bold', color:"36454F" }}>Liked cards page:</Typography> 
          <p>
          Here you can see all the cards that you have liked. <br/>
          You can like a card by clicking the like button on the card in any page that you see it, as well as in the cards details page, which has a like button as a FAB button at the bottom right side of the page. <br/> 
          </p>
          <Typography variant='h5' sx={{ fontWeight: 'bold', color:"36454F" }}>My cards page:</Typography> 
          <p>
          Here you can see all the cards that you have created. <br/> 
          This page is the same as the card (home) page, but it only shows the cards that you have created. <br/>
          This page is only available to businesses, so if you are not a business, you will not be able to see this page. <br/>
          </p>
          <Typography variant='h5' sx={{ fontWeight: 'bold', color:"36454F" }}>Card creation page:</Typography>
          <p>
          You can create a card by clicking the add card button on the card page, which will take you to the card creation page. <br/>
          This page is only available to businesses, so if you are not a business, you will not be able to see this page. <br/>
          This page calls upon the "cardForm" component, which is a component that is used in both the card creation page and the card edit page. <br/> 
          </p>
          <Typography variant='h5' sx={{ fontWeight: 'bold', color:"36454F" }}>Card details page:</Typography> 
          <p>
          You can see the details of a card by clicking on the details of the card in any page that you see it, which will take you to the card details page. <br/>
          Here you can see the details of the card, as well as a FAB button at the bottom right side of the page, which you can use to like the card. <br/> 
          </p>
          <Typography variant='h5' sx={{ fontWeight: 'bold', color:"36454F" }}>Card edit page:</Typography> 
          <p>
          You can edit a card by clicking on the edit button on any card, only if you created it or are an admin. <br/>
          This page is only available to businesses, so if you are not a business, you will not be able to see this page. <br/> 
          </p>
          <Typography variant='h5' sx={{ fontWeight: 'bold', color:"36454F" }}>About page:</Typography>
          <p>
            Pretty self-explanatory, its the page that you are currently on. It contains information about the website. <br/>
          </p>
          <Typography variant="h4" fontWeight="bold" sx={{pt:3}} gutterBottom>CARDS:</Typography>
          <p>
          Cards are the main feature of this website. <br/>
          They are created by businesses, and can be liked by users. <br/>
          They are created by filling out a form, which is available to businesses only. <br/>
          They have a title, a subtitle, a description, a phone number, an address, and a picture. <br/>
          The cards can be edited by the business that created them, or by an admin. <br/>
          You can click on the details of a card to navigate to the card details page, where you can see the card in more detail. <br/>
          The cards can be deleted by the business that created them, or by an admin. <br/>
          </p>
          <Typography variant="h4" fontWeight="bold" sx={{pt:3}} gutterBottom>USERS:</Typography>
          <p>
            Users are devided into 2 main types - users and businesses. <br/>
            Users can like cards, and can see all the cards that they have liked in the liked cards page. <br/>
            Businesses, in addition to liking cards, can also create cards, and can see all the cards that they have created in the my cards page. <br/>
            In addition, there is an admin user, which can edit and delete all cards. All admins are businesses, but not all businesses are admins. <br/>
          </p>
          <Typography variant="h4" fontWeight="bold" sx={{pt:3}} gutterBottom>LAYOUT:</Typography>
          <p>
            The layout is devided into 3 main parts - the top navigation bar, the main content, and the bottom navigation bar. <br />
          </p>
          <Typography variant='h5' sx={{ fontWeight: 'bold', color:"36454F" }}>Top navigation bar:</Typography> 
          <p>
            The top navigation bar is the bar that is located on the top of the page. <br/>
            It contains the logo of the website, which is clickable and will take you to the cards (home) page. <br/>
            It also contains 2 navigation buttons, which will take you to the liked cards page and the my cards page, respectively. <br/>
            The liked cards page is only available if you are logged in, and the my cards page is only available if you are a business. <br/>
            It also contains a search bar, which you can use to search for cards by their title. <br/>
            You will notice there is a small flashlight icon on the right side of the search bar. This button is used to toggle the light theme of the website. I greatly recommend using the dark theme, which is much easier on the eyes. <br/>
            The navigation bar also contains a login button, which will take you to the login page, and a logout button, which will log you out. <br/>
            The login button is only available if you are not logged in, and the logout button is only available if you are logged in. <br/>
            There is also a profile picture which is also a button, which will open a small drop down menu, which contains links to a few pages of the website, as well as a logout button. <br/>
            The profile picture will only show up if you are logged in. <br/>
            </p>
          <Typography variant='h5' sx={{ fontWeight: 'bold', color:"36454F" }}>Main content:</Typography>
          <p>
            The main content is the main part of the website, which contains all the content of the website. <br/>
            It uses react-router-dom, which means that the content changes depending on the url. It also means that the content is rendered dynamically, which means that the page does not need to reload when you navigate to a different page, as well as the fact that other parts of the layout wont be effected. <br/>
          </p>
          <Typography variant='h5' sx={{ fontWeight: 'bold', color:"36454F" }}>Bottom navigation bar:</Typography>
          <p>
            The bottom navigation bar is the bar that is located on the bottom of the page, and is a very simple part of the website. <br/>
            It contains 2 navigation buttons, which will take you to the cards page and the about page, respectively. <br/>
          </p>
          
        </>
  );
}
