import ecom from '../../Images/ecom.png';
import insta from '../../Images/insta.png';
import ebike from '../../Images/ebike.png';
import clone from '../../Images/SpaceX.png';
import jobs from '../../Images/job_platform.png';
import space from '../../Images/space_agency.png';


export const projects = [
    {
        path: '/projects/jobs',
        title: 'Job Posting Platform',
        image: jobs,
        desc: 'After login in, this web app will create a job post based on your description and will appear alongside the other posts',
        stack: [' Vue.js ', ' TypeScript ', ' Vue-Router '],
        responsive: true,
        projectLink: 'https://jobsplatform.netlify.app/',
        codeLink: 'https://github.com/g-andrei-u/Job_Posting_Platform'
    },

    {
        path: '/projects/ecommerce',
        title: 'Ecommerce Website',
        image: ecom,
        desc: 'A ecommerce web app where you can choose to buy anything from a catalog of products.',
        stack: [' React.js ', ' Redux ', ' React-Router '],
        responsive: true,
        projectLink: 'https://valueondemand.netlify.app/',
        codeLink: 'https://github.com/g-andrei-u/Ecommerce_App'
    },

    {
        path: '/projects/insta',
        title: 'Instagram App',
        image: insta,
        desc: 'A clone of Instagram, were I have put in a lot of Creativity inside the project and it was very fun working on it. It was a challenge at some point, but i had a lot to learn from it!',
        stack: [' React.js '],
        responsive: false,
        projectLink: 'https://customclone.netlify.app/',
        codeLink: 'https://github.com/g-andrei-u/Instagram_App'
    },

    {
        path: '/projects/clone',
        title: 'SpaceX Clone',
        image: clone,
        desc: 'A clone site of the official SpaceX Website, it is responsive and has the same interactive features as the Official site.',
        stack: [' Vanilla Javascript '],
        responsive: true,
        projectLink: 'https://g-andrei-u.github.io/SpaceX_Site_Clone/',
        codeLink: 'https://github.com/g-andrei-u/SpaceX_Site_Clone'
    },

    {
        path: '/projects/ebikes',
        title: 'Shop Landing Page',
        image: ebike,
        desc:  'A responsive landing page with interactive features made for a company that rents electrical bikes in different european cities.',
        stack: [' Vanilla Javascript '],
        responsive: true,
        projectLink: 'https://g-andrei-u.github.io/Project_Ebikes/',
        codeLink: 'https://github.com/g-andrei-u/Project_Ebikes'
    },

    {
        path: '/projects/space',
        title: 'Agency Landing Page',
        image: space,
        desc: 'A landing page with features created by php and a design created with sass',
        stack: [' PHP ', ' Sass '],
        responsive: false,
        projectLink: 'https://thespaceagency.000webhostapp.com/',
        codeLink: 'https://github.com/g-andrei-u/Space-Page'
    }
]
