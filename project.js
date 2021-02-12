'use strict';

const projects = [
    {
        image: '/Project_images/NHS_Search.png',
        title: 'NHS MVC Recreation',
        name: 'nhs-project',
        shortDesc: 'Using the NHS Conditions API, I created a web application to convert the JSON data returned by the web API into valid HTML. \n In addition, I added CSS to display the HTML content on the page according to the style guidelines provided by the NHS.',
        medDesc: 'Using the NHS Conditions API, I created a web application to convert the JSON data returned by the web API into valid HTML. \n In addition, I added CSS to display the HTML content on the page according to the style guidelines provided by the NHS.',
        longDesc: 'Using the NHS conditions API, I created a replica version of the NHS website using ASP.net core MVC. This recreation would display information about medical conditions that \
        the user searched for, as well as give the user a alphabetised table that they can use to find the conditions that they wish to find more information about. \
        This was done by converting the JSON data received from the conditions API into valid HTML that would be displayed via a webpage to the user. This project used Javascript and CSS for\
        improved functionality such as revealing buttons that exist in the NHS Style Guide, as well as to have the same appearance as the official NHS website in accordance to the Style Guide.',
        languages: ["HTML","CSS","Javascript","ASP.Net", "JQuery", ".netCore","C#"]
    },
    {
        image: '/Project_images/temp.png',
        title: 'Pac-Man Genetic Q-learning agent',
        name: 'pacman-thesis',
        shortDesc: 'For my masters thesis, A variation on the standard deep Q-network model was developed and trained to play Ms Pacman, using only the information stored in the game RAM.',
        medDesc: 'For my masters thesis, A variation on the standard deep Q-network model was developed and trained to play Ms Pacman, using only the information stored in the game RAM.',
        longDesc: 'For my masters thesis, A variation on the standard deep Q-network model was developed and trained to play Ms Pacman, using only the information stored in the game RAM.\
         The developed DQN model used the additional genetic algorithm techniques of selection and mutation to improve performance over a standard DQN model. After each training period, \
         the best performing models were selected from the training results in regard to three different metrics: the lowest score achieved, the highest score achieved, and the average. \
         After the initial models were selected for evolution, the following evolution cycles selected only the model with the best result in regard to the metric used as the previous base\
         model.',
        languages: ["Python", "Machine-Learning", "AI", "Neural-Network"]
    },
    {
        image: '/Project_images/temp.png',
        title: 'Kanpachi Delivery/Sushi Daddy',
        name: 'kanpachi-sushi-daddy',
        shortDesc: 'Contracted work to create two restaurant sites for a california based sushi chain, fully designed and implemented by me. created with Wordpress, PHP, HTML, CSS and Javascript.',
        medDesc: 'Contracted work to create two restaurant sites for a california based sushi chain, fully designed and implemented by me. created with Wordpress, PHP, HTML, CSS and Javascript.',
        longDesc: 'Taken during the summer I did some contract work for a sushi restaurant chain located in LA California that was looking to create an online series of websites that would\
         display their menu and take the customer to the delivery services that they can order from the restaurant located in their area. I was in charge of designing the website in looks\
          and functionality. This project was completed on wordpress using PHP, the wordpress front end GUI and traditional website technologies, HTML, CSS, and Javascript.',
        languages: ["Wordpress", "Javascript", "PHP", "CSS", "HTML"]
    },
    {
        image: '/Project_images/temp.png',
        title: 'Python Facial Recognition',
        name: 'python-facial-recognition',
        shortDesc: 'Using the Scikit-learn library, I developed a neural network that was capable of locating the eyes and mouth of various pictures of people.',
        medDesc: 'Using the Scikit-learn library, I developed a neural network that was capable of locating the eyes and mouth of various pictures of people.',
        longDesc: 'Using the Scikit-learn library, a machine learning oriented library allowing for the development of neural networks in python. I developed a neural network that was \
        capable of locating the eyes and mouth of various pictures of people. This was done through the use of image filtering rather than using pre-existing libraries.',
        languages: ["Python", "Machine-Learning", "AI", "Neural-Network", "Scikit"]
    },
    {
        image: '/Project_images/temp.png',
        title: 'Android Virtual Pet',
        name: 'android-virtual-pet',
        shortDesc: 'I designed a virtual pet game with android studio where the player would search for bluetooth devices around them and from there be able to select a device which would\
         then be converted into a virtual pet.',
        medDesc: 'I designed a virtual pet game with android studio where the player would search for bluetooth devices around them and from there be able to select a device which would \
        then be converted into a virtual pet.',
        longDesc: 'During my masters degree I took an android development module, for this module I had to design an interactive android app that used various features off the smartphone,\
         such as the inbuilt camera, bluetooth, storage etc. For my app I designed a virtual pet game where the player would search for bluetooth devices around them and from there be able\
          to select a device which would then be converted into a virtual pet. The player would then be able to raise this pet, by training, playing, feeding and taking photos with their pet.',
        languages: ["C#", "Android","Android-Studio"]
    },
    {
        image: '/Project_images/temp.png',
        title: 'Java Web Service',
        name: 'java-web-service',
        shortDesc: 'I developed a RESTful webservice in Java that would allow the user to view a list of available flights and book one of these flights.',
        medDesc: 'I developed a RESTful webservice in Java that would allow the user to view a list of available flights and book one of these flights.',
        longDesc: ' I developed a RESTful webservice in Java that would allow the user to view a list of available flights and book one of these flights. As well as this I developed a client\
         that would give the user the capability of doing this through a GUI as well as other functionality from other Web APIs such as a currency converting API. All of the other APIs used \
         in this project were publically available from the internet.',
        languages: ["Java", "WebAPI", "RESTful", "Web-Service"]
    },
    {
        image: '/Project_images/temp.png',
        title: 'Abstract Factory Linked List',
        name: 'abstract-factory-linked-list',
        shortDesc: 'Using the abstract factory pattern I developed a C++ project that allowed the user to read the data from a file into a linked list or stack. The user would then be able to sort,\
         insert, delete, display or save the data in this list/stack.',
        medDesc: 'Using the abstract factory pattern I developed a C++ project that allowed the user to read the data from a file into a linked list or stack. The user would then be able to sort,\
        insert, delete, display or save the data in this list/stack.',
        longDesc: 'During my masters degree I developed a C++ program that takes data from a file or user input and converts this data into one of two related class types, this data is then\
         stored in either a linked list or a stack. The user is then able to sort, insert, delete, display or save this data. they can also convert the storage method from a linked list to \
         a stack and vice versa. This project was developed using the abstract factory design pattern.',
        languages: ["C++"]
    },
    {
        image: '/Project_images/temp.png',
        title: 'This Website!',
        name: 'github-portfolio',
        shortDesc: 'built from the ground up with HTML, CSS, and uses React to display the projects of this portfolio and to allow the user to change from dark mode to light mode.',
        medDesc: 'built from the ground up with HTML, CSS, and uses React to display the projects of this portfolio and to allow the user to change from dark mode to light mode.',
        longDesc: 'Developed to be hosted with Github pages this portfolio site was built from the ground up with HTML, CSS, and uses React to display the projects of this portfolio and to\
         allow the user to change from dark mode to light mode.',
        languages: ["CSS", "HTML", "React", "Javascript"]
    },
    {
        image: '/Project_images/temp.png',
        title: 'Financial Application',
        name: 'finance-app',
        shortDesc: 'A quick banking website that would allow users to view their banking information such as their balance and transactions.',
        medDesc: 'A quick banking website that would allow users to view their banking information such as their balance and transactions.',
        longDesc: 'A solo project during my graduate scheme I developed a quick banking website that would allow users to view their banking information such as their balance and transactions.\
         As well as send and receive money from other users of the bank. This site was developed using ASP.net and used SQL to hold user information.',
        languages: ["C#", "ASP.net", "SQL", "Javascript"]
    },
    {
        image: '/Project_images/temp.png',
        title: 'Wingtips group project',
        name: 'wingtips-mvc',
        shortDesc: ' Developed using an MVC design pattern, with an agile group we used SQL to store information about users and the products. This website allowed for users to browse the \
        store and purchase products using the paypal API for purchases.',
        medDesc: ' Developed using an MVC design pattern, with an agile group we used SQL to store information about users and the products. This website allowed for users to browse the \
        store and purchase products using the paypal API for purchases.',
        longDesc: 'During a graduate scheme I worked as a part of a team of 5 people including myself to develop an E-commerce website using ASP.net. Developed using an MVC design pattern,\
         with an agile group we used SQL to store information about users and the products. This website allowed for users to browse the store and purchase products using the paypal API for\
          purchases.',
        languages: ["C#", "ASP.net", "SQL", "Javascript"]
    },
    {
        image: '/Project_images/temp.png',
        title: 'Dota 2 Shadow Fiend 1v1 Bot',
        name: 'dota-2-sf-1v1-bot',
        shortDesc: 'For the final year project of my undergraduate degree I designed and implemented a bot from scratch that would be able to play a 1v1 game of Dota 2 without relying on \
        unfair advantages such as having access to information that a player would not have.',
        medDesc: 'For the final year project of my undergraduate degree I designed and implemented a bot from scratch that would be able to play a 1v1 game of Dota 2 without relying on \
        unfair advantages such as having access to information that a player would not have.',
        longDesc: 'For the final year project of my undergraduate degree I designed and implemented a bot from scratch that would be able to play a 1v1 game of Dota 2 without relying on \
        unfair advantages such as having access to information that a player would not have. This was developed fully in Lua using bot development resources provided by the developer of the game.',
        languages: ["Lua"]
    },
    {
        image: '/Project_images/temp.png',
        title: 'OpenGL lighting and Texture Demo',
        name: 'opengl-lighting-texture-demo',
        shortDesc: 'Improving on the simple graphics engine, later in my undergraduate degree I would have to implement various rendering techniques into a graphics engine supplied by my tutor. \
        For this project I implement rendering of normal maps, specular reflection maps and bump maps.',
        medDesc: 'Improving on the simple graphics engine, later in my undergraduate degree I would have to implement various rendering techniques into a graphics engine supplied by my tutor. \
        For this project I implement rendering of normal maps, specular reflection maps and bump maps.',
        longDesc: ' Improving on the simple graphics engine, later in my undergraduate degree I would have to implement various rendering techniques into a graphics engine supplied by my \
        tutor. For this project I implement rendering of normal maps, specular reflection maps and bump maps.',
        languages: ["OpenGL", "C", "C++"]
    },
    {
        image: '/Project_images/temp.png',
        title: 'Simple Graphics Engine',
        name: 'simple-graphics-engine',
        shortDesc: 'For my masters thesis, A variation on the standard deep Q-network model was developed and trained to play Ms Pacman, using only the information stored in the game RAM.',
        medDesc: 'For my masters thesis, A variation on the standard deep Q-network model was developed and trained to play Ms Pacman, using only the information stored in the game RAM.',
        longDesc: 'For my masters thesis, A variation on the standard deep Q-network model was developed and trained to play Ms Pacman, using only the information stored in the game RAM.\
         The developed DQN model used the additional genetic algorithm techniques of selection and mutation to improve performance over a standard DQN model. After each training period, \
         the best performing models were selected from the training results in regard to three different metrics: the lowest score achieved, the highest score achieved, and the average. \
         After the initial models were selected for evolution, the following evolution cycles selected only the model with the best result in regard to the metric used as the previous base\
         model.',
        languages: ["C", "C++"]
    },
    {
        image: '/Project_images/temp.png',
        title: 'Java Social Media App',
        name: 'java-social-media-app',
        shortDesc: 'Client-server based social media application created in Java, allowing users to create accounts for the social media service where they will then be able to add other users\
         as friends and make global posts onto a message board shared between all of their friends, they would also be able to create private instant messaging sessions with their friends also.',
        medDesc: 'Client-server based social media application created in Java, allowing users to create accounts for the social media service where they will then be able to add other users\
        as friends and make global posts onto a message board shared between all of their friends, they would also be able to create private instant messaging sessions with their friends also.',
        longDesc: 'During my undergraduate degree I had to develop a social media site using Java. For this social media application I had to create a client application and the server \
        structure for the social media site, the server would allow clients to sign up and connect to the social media service. The client would then be able to add other users as friends\
         post messages onto the message board shared between all of their friends and create private instant messaging sessions with other friends. All of this information would then be \
         stored on the server so the client would still be able to access this information when they next sign in.',
        languages: ["Java"]
    },
    {
        image: '/Project_images/temp.png',
        title: 'Asteroids',
        name: 'asteroids',
        shortDesc: 'A variation on the Arcade classic created in Monogame with C#, distinct from the original by changing the normal game experience by having the player be challenged to a \
        series of micro challenges that they must complete in a short 5-15 second time frame.',
        medDesc: 'A variation on the Arcade classic created in Monogame with C#, distinct from the original by changing the normal game experience by having the player be challenged to a \
        series of micro challenges that they must complete in a short 5-15 second time frame.',
        longDesc: 'During a games development module for my undergraduate degree, I had to design and develop a game in Monogame. I designed a variation on the classic arcade game Asteroids,\
         however instead of the traditional experience the game was separated into short micro-game style segments where the player would be tasked to defeat all of the enemies on screen or \
         collect all the starts on screen in 10 seconds then instantly being taken into the next micro-game, until the player ran out of lives, where they will then record their score against \
         the highscores',
        languages: ["C#", "Monogame"]
    },
    {
        image: '/Project_images/temp.png',
        title: 'C++ Word Sorting and Searching System',
        name: 'word-search-and-sort-system',
        shortDesc: 'A word search and sort system that would organise a text file into alphabetical order using a quick sort and then allow the user to search for all words beginning with a \
        certain letter or all the words of a certain length with a binary search.',
        medDesc: 'A word search and sort system that would organise a text file into alphabetical order using a quick sort and then allow the user to search for all words beginning with a \
        certain letter or all the words of a certain length with a binary search.',
        longDesc: 'During my undergraduate Degree for one of my courses I was tasked with creating a C++ project that would use one or more searching and sorting algorithms. For my project\
         I decided to develop a system that would take a text file from the user and sort this information into alphabetical order from there the user would then be able to search this sorted\
          file for all of the words beginning with a certain letter or all the words of a certain length. The searching algorithm that I used for this project was a binary search and the \
          sorting algorithm was a quick sort.',
        languages: ["C++"]
    },


];
export default projects;