import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})

export class LandingPage implements OnInit {
  path;
  pathLength;
  resourcesPreivew = [
    {
      url: 'https://www.journi.org/',
      logo: 'https://static1.squarespace.com/static/55c4ffcfe4b0b6679a5a2ff5/t/55c927aee4b0389a4f23a090/1613609490575/?format=1500w',
      name: 'Journi',
      description: 'We are a non-profit organization dedicated to equipping communities with the skills and know-how to jump start local economies; to allow those communities to become globally competitive.\n\nWe believe in cultivating creativity, critical thinking, and a sense of culture. ',
    },
    {
      url: 'https://detroitpubliclibrary.org/',
      logo: 'https://unitedwaysem.org/wp-content/uploads/dpl-768x554.jpg',
      name: 'Detroit Public Library',
      description: 'The Detroit Public Library supports families! We offer both electronic and paper books to read with your children. Reading is a great way to bond with your child and enjoy your time together.\n\nWe also offer online programs, free online tutoring and many other great resources.',
    },
    {
      url: 'https://detroitydrc.z2systems.com/np/clients/detroitydrc/publicaccess/membershipDirectory.do?md=1',
      logo: 'https://detroitydrc.z2systems.com/np/clients/detroitydrc/resources/Youth-De.png',
      name: 'Detroit YDRC',
      description: 'The Youth Development Resource Center supports a network of hundreds of Detroit youth development providers offering afterschool or summer programs. We seek to strengthen their individual and collective impact on youth, giving them the tools they need to increase program quality and improve youth outcomes.',
    },
    {
      url: 'http://www.firststep-mi.org/',
      logo: 'https://unitedwaysem.org/wp-content/uploads/First-Step-Logo-Audriana-Buchanan.png',
      name: 'First Step',
      description: 'First Step is a nonprofit organization in Wayne County that provides free, comprehensive and confidential services for domestic and sexual violence survivors and their families. These services include emergency shelter, crisis intervention, 24-hour helpline, individual and group counseling, medical, housing, and legal advocacy, referrals, and more.',
    },

  ]

  slideOptions = {
    autoplay: {
      delay: 4000
    },
    speed: 1000
  };

  constructor(private router: Router) { }

  ngOnInit() {
    
  }
  download() {
    console.log('Attempting to download ...');
    this.router.navigate(['download']);
  }
  loginSignup() {
    this.router.navigate(['login']);
  }

  resources() {
    this.router.navigate(['resources']);
  }

  fairsPage() {
    this.router.navigate(['selection']);
  }

  pathScrollDraw() {
    // What % down is it?

    console.log(document.documentElement.scrollTop);

    // tslint:disable-next-line: max-line-length
    const scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

    // Length to offset the dashes
    const drawLength = this.pathLength * scrollPercentage;

    // console.log(scrollPercentage);
    // console.log(drawLength);

    // Draw in reverse
    this.path.style.strokeDashoffset = this.pathLength - drawLength;
  }

  // scrollTracking(event) {
  //   // this.pathScrollDraw();
  //   // console.log(event);
  //   const winScroll = event.detail.scrollTop;
  //   // const documentHeight = event.detail.scrollTop;
  //   // const windowHeight = event.detail.scrollTop;
  //   const height = event.detail.event.path[0].clientHeight;
  //   const scrollHeight = event.detail.event.path[0].scrollHeight;
  //   const scrolled = (winScroll / (scrollHeight - height)) * 100;

  //   // Fairs Illustration
  //   const lady = document.getElementById('Lady');
  //   const message = document.getElementById('Message');
  //   const messageTwo = document.getElementById('Message-2');
  //   const studentShape = document.getElementById('student-shape');
  //   const chaporoneShape = document.getElementById('chaporone-shape');
  //   const volunteerShape = document.getElementById('volunteer-shape');
  //   const partnerShape = document.getElementById('partner-shape');

  //   // FYF App Illustration
  //   const phoneBody = document.getElementById('Phone');
  //   const phoneShadow = document.getElementById('Phone-Shadow');

  //   // Resources Illustration
  //   const resourcesBackgroundNight = document.getElementById('Resources-Background-Night');
  //   const sun = document.getElementById('Sun');
  //   const moon = document.getElementById('Moon');


  //   // lady.style.display = 'none';
  //   // message.style.display = 'none';
  //   // messageTwo.style.display = 'none';
  //   studentShape.style.display = 'none';
  //   chaporoneShape.style.display = 'none';
  //   volunteerShape.style.display = 'none';
  //   partnerShape.style.display = 'none';

  //   // console.log(resourcesBackgroundNight.attributes);
  //   resourcesBackgroundNight.attributes[2].nodeValue = 'url(#linearGradient-21)';


  //   phoneBody.style.display = 'none';
  //   phoneShadow.style.display = 'none';

  //   sun.style.display = 'none';
  //   moon.style.display = 'block';

  //   if (scrolled > 6.3) {
  //     // lady.style.display = 'block';
  //   }
  //   if (scrolled > 6.5) {
  //     // message.style.display = 'block';
  //   }
  //   if (scrolled > 6.7) {
  //     // messageTwo.style.display = 'block';
  //   }

  //   if (scrolled > 5.59) {
  //     studentShape.style.display = 'inline-block';
  //   }
  //   if (scrolled > 5.59) {
  //     chaporoneShape.style.display = 'inline-block';
  //   }
  //   if (scrolled > 5.59) {
  //     partnerShape.style.display = 'inline-block';
  //   }
  //   if (scrolled > 5.59) {
  //     volunteerShape.style.display = 'inline-block';
  //   }

  //   if (scrolled < 18.5) {
  //     // Change Background back to Day time
  //     // Reveal the Moon
  //     // Reveal Sun
  //     sun.style.display = 'none';

  //     // Hide Moon
  //     moon.style.display = 'block';

  //     // Change Background of SVG Wrapper
  //     document.getElementById('resource-illustration-wrapper').style.backgroundColor = '#333';
  //     resourcesBackgroundNight.attributes[2].nodeValue = 'url(#linearGradient-21)';
      
  //   }

  //   if (scrolled > 18.5) {

  //     console.log('@ Resources Illustration. \n');
  //     // Reveal Sun
  //     sun.style.display = 'block';

  //     // Hide Moon
  //     moon.style.display = 'none';

  //     // Change Background of SVG Wrapper, which is just the
  //     document.getElementById('resource-illustration-wrapper').style.backgroundColor = '#6eabf2';

  //     // Change Background of SVG
  //     resourcesBackgroundNight.attributes[2].nodeValue = 'url(#linearGradient-20)';
  //   }

  //   if (scrolled > 19.6) {
  //     console.log('@ FYF App Illustration. \n');
  //     phoneBody.style.display = 'block';
  //     phoneShadow.style.display = 'block';
  //   }

    

  //   if(scrolled > 44.31) {
  //     console.log('Start Sun Rotation!');
  //     document.getElementById('Triangle-Copy-6').style.backgroundColor
  //   }
  //   if(scrolled > 47.13) {

  //   }
  //   if (scrolled > 72) {
  //     console.log('@ United-Way Logo. \n');
  //   }

  //   // console.log('ScrollTop: ', winScroll);
  //   // console.log('Height: ', height);
  //   console.log('Scroll %', scrolled);
  // }


}
