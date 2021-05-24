import { Component, OnInit, ViewChild, ViewChildren, ElementRef, QueryList,
  AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular';


@Component({
  selector: 'app-resources',
  templateUrl: './resources.page.html',
  styleUrls: ['./resources.page.scss'],
})
export class ResourcesPage implements OnInit {
  @ViewChild(IonContent, {static: true}) content: IonContent;
  @ViewChildren('resourceList') resourceList: QueryList<ElementRef>
  // Resource Filter States
  allResources = true;
  education = false;
  family = false;
  health = false;
  business = false;
  community = false;
  filtering = false;
  filterType = 'All';
  showFab = true;

  resources = [
    // Education
    {
      url: 'https://www.accreditedschoolsonline.org/resources/zoom-classroom-tips/',
      logo: 'https://www.accreditedschoolsonline.org/app/themes/sonic-theme-child/assets/dist/img/logo-header.svg',
      name: 'Accredited Schools Online',
      description: 'Zoom classrooms: Tips for students taking online classes.',
      type: 'Education',
      toggled: false
    },
    {
      url: 'https://www.akaetaiotaomega.org/',
      logo: 'https://www.akaetaiotaomega.org/resources/SiteAlbums/115993817/HIQ-logo.png',
      name: 'Alpha Kappa Alpha Sorotiy Incorportated',
      description: 'Since its chartering on February 6, 1960, the Eta Iota Omega Chapter has dedicated itself to uplifting the citizens of Inkster and Western Wayne County through innovative service programs. \n\nThrough the years, we have awarded thousands of dollars in scholarships to college-bound students, mentored hundreds of young ladies through the Sorrelles Club, distributed meals and food baskets to families in need, implemented programs to combat critical health issues, partnered with elected officials to address key political and civic issues, and hosted events such as the Anheuser-Busch “Great Kings and Queens of Africa” Exhibit to promote cultural awareness.',
      type: 'Education',
      toggled: false
    },
    {
      url: 'http://center4success.org/',
      logo: 'https://unitedwaysem.org/wp-content/uploads/CFS-logo-Heidi-Miller-768x351.png',
      name: 'Center 4 Success',
      description: 'Center for Success unites literacy and community to empower students in the journey of education.\n\nWe expose the future to our future generation – through mentoring by a diverse set of committed individuals, and program partners that allow students to experience learning through hands on projects that relate to their lives and allow them to explore their interests. \n\nWe support learners on their journey by providing committed individuals to build trusting relationships.',
      type: 'Education',
      toggled: false
    },
    {
      url: 'https://www.cityyear.org/detroit/',
      logo: 'https://unitedwaysem.org/wp-content/uploads/Cityyearlogo3-ginger-green-768x762.jpg',
      name: 'City Year Detroit',
      description: 'City Year is working to address the lack of equitable access to educational opportunities. Our AmeriCorps members partner with teachers and schools to add more support and to help create learning environments where students can build on their strengths and fully engage in their learning.',
      type: 'Education',
      toggled: false
    },
    {
      url: 'http://detroitchildrensfund.org/',
      logo: 'https://unitedwaysem.org/wp-content/uploads/DCF-logo-Brittini-Ward.jpg',
      name: 'Detroit Children Fund',
      description: 'The Detroit Children’s Fund is a nonprofit organization that makes high-potential investments to expand successful schools, greatly improve lower-performing schools and discover and develop talented educators so that every child in Detroit has the opportunity to receive an excellent education.',
      type: 'Education',
      toggled: false
    },
    {
      url: 'https://detroitydrc.z2systems.com/np/clients/detroitydrc/publicaccess/membershipDirectory.do?md=1',
      logo: 'https://detroitydrc.z2systems.com/np/clients/detroitydrc/resources/Youth-De.png',
      name: 'Detroit YDRC',
      description: 'The Youth Development Resource Center supports a network of hundreds of Detroit youth development providers offering afterschool or summer programs. We seek to strengthen their individual and collective impact on youth, giving them the tools they need to increase program quality and improve youth outcomes.',
      type: 'Education',
      toggled: false
    },
    {
      url: 'https://www.detroitk12.org/',
      logo: 'https://unitedwaysem.org/wp-content/uploads/DPSCD_Logo_wTag_-_2_Color_HiRes_-_RGB-HEX-768x640.jpg',
      name: 'Detroit Public Schools Community District',
      description: 'Detroit Public Schools Community District is the largest school district in Michigan and strives to educate and empower every student, every day to be outstanding citizens in their city, state and the world.',
      type: 'Education',
      toggled: false
    },
    {
      url: '',
      logo: '',
      name: 'Detroits SOARS',
      description: 'It takes a village to help your child reach their full potential. As your child enters a 4- or 5-star early learning setting, stay connected to your village by utilizing funding from a scholarship. The Detroit SOARS Scholarship program provides financial support to offset childcare tuition for eligible Detroit residents with children age 5 and younger.\n\n Tuition payments are given directly to the child care provider. Co-payment is based on income. Participants will receive assistance with child care placement. \n\nFor more information, contact Jackie Hunter at 313-617-9473 or jhunter@blackfamilydevelopment.org',
      type: 'Education',
      toggled: false
    },
    {
      url: 'https://developingkids.org/',
      logo: 'https://unitedwaysem.org/wp-content/uploads/no-background-dk-logo-Kimberly-Johnson.png',
      name: 'Developing K.I.D.S',
      description: 'Building strong communities by reaching out to youth and their families through prevention / youth development, family management, and community support services.',
      type: 'Education',
      toggled: false
    },
    {
      url: 'https://www.edsisolutions.com/',
      logo: 'https://unitedwaysem.org/wp-content/uploads/edsi-logo-stroked@2x-Akilah-P.png',
      name: 'EDSI Solutions',
      description: 'EDSI (Educational Data Systems, Inc.) is a national workforce development, talent solutions and consulting company with a passion for helping great companies and communities train and retain great people. \n\nEDSI works with regions, employers and jobseekers to overcome their most challenging obstacles. Founded in 1979 and headquartered in Dearborn, Michigan, the company employs more than 800 people across the country. EDSI is a National Best and Brightest® Companies To Work For award winner.',
      type: 'Education',
      toggled: false
    },
    {
      url: 'https://epiphanyeducationcenter.org/',
      logo: 'https://unitedwaysem.org/wp-content/uploads/Epiphany-logo-transparent-768x686.png',
      name: 'Epiphany Education Center',
      description: 'Nonprofit learning center for elementary and middle school students.',
      type: 'Education',
      toggled: false
    },
    {
      url: 'https://generalassemb.ly/',
      logo: 'https://unitedwaysem.org/wp-content/uploads/ga-Jenna-Rote.png',
      name: 'General Assembly',
      description: 'Since 2011, General Assembly has transformed tens of thousands of careers through pioneering, experiential education in today’s most in-demand skills. When you learn web development, data, design, business and more with GA, you get:\n\n-Award-winning curriculum and expert instructors, on campus and online.\n\n-A global, professional community of 40,000-plus full- and part-time alumni.\n\n-Career results from leading-edge courses, with mentorship each step of the way.',
      type: 'Education',
      toggled: false
    },
    {
      url: 'https://www.gvsu.edu/k12connect/k-12-connect-virtual-tutoring-2.htm?fbclid=IwAR2EDWQ_FyQaiOoQx1FNcVVqrHuSotJsVfL7AXTJae9sdKWHeqil0X1x3Vk',
      logo: 'https://unitedwaysem.org/wp-content/uploads/gvsu.jpg',
      name: 'Grand Valley State University Virtual Tutoriing',
      description: 'GVSU K-12 Connect Virtual Tutoring is available for any student in grades K-12. This program is a free, virtual 1:1 tutoring/homework support service in which students can harness additional learning support through connecting with university students, faculty or staff with expertise in various subjects through Zoom. Whether you are looking for a one-time appointment or recurring, weekly sessions, the tutoring center can accommodate any student’s tutoring needs.',
      type: 'Education',
      toggled: false
    },
    {
      url: 'https://www.journi.org/',
      logo: 'https://static1.squarespace.com/static/55c4ffcfe4b0b6679a5a2ff5/t/55c927aee4b0389a4f23a090/1613609490575/?format=1500w',
      name: 'Journi',
      description: 'We are a non-profit organization dedicated to equipping communities with the skills and know-how to jump start local economies; to allow those communities to become globally competitive.\n\nWe believe in cultivating creativity, critical thinking, and a sense of culture. ',
      type: 'Education',
      toggled: false
    },
    {
      url: 'https://www.michiganlearning.org/',
      logo: 'https://unitedwaysem.org/wp-content/uploads/michigan-learning-channel.png',
      name: 'Michigan Learning Channel',
      description: 'A statewide public television partnership offering instructional content to support the education of students and to provide alternative resources for families and teachers.',
      type: 'Education',
      toggled: false
    },
    {
      url: 'https://www.facebook.com/mistrongerfamily',
      logo: 'https://unitedwaysem.org/wp-content/uploads/MSUE-wordmark_Black_10in_300res-Vivian-Washington-768x99.jpg',
      name: 'Michigan State University',
      description: 'Michigan State University (MSU) Extension helps people improve their lives by bringing the vast knowledge resources of MSU directly to individuals, communities and businesses. To learn more, contact Vivian Washington at washi138@msu.edu or 313-494-4672.',
      type: 'Education',
      toggled: false
    },
    {
      url: 'http://npfeschools.org/',
      logo: 'https://unitedwaysem.org/wp-content/uploads/NPFE-Logo-Yolanda-Eddins-768x576.jpg',
      name: 'New Paradigm For Education (NPFE)',
      description: 'NPFE is a nonprofit Charter Management Organization (CMO) comprised of educational practitioners, community advocates and business leaders who have dedicated years of service to children. Our mission is to provide a quality education through shared responsibility in a safe supportive environment for all students to meet the challenges of a global society. We are committed to excellence.',
      type: 'Education',
      toggled: false
    },
    {
      url: 'https://www.detroitk12.org/nolan',
      logo: 'https://unitedwaysem.org/wp-content/uploads/Screenshot-2020-10-19-150642-768x582.jpg',
      name: 'Nolan Elementary Middle School',
      description: 'Nolan provides a safe and inclusive learning environment for all students! At Nolan, we offer a rigorous curriculum that includes electives in instrumental music, vocal music and art! We offer one:one technology for all K-8 students promote STEAM education. \n\nWe support a whole child commitment with wraparound services for students and families with our partnerships with ACC, DHS Pathway to Potential, St. John’s Clinic and on-site counselors. Students can participate in extracurricular activities like basketball and cheer, male and female mentoring and Girl and Boy Scouts. Nolan is dedicated to meeting the academic, social and emotional needs of your children!',
      type: 'Education',
      toggled: false
    },
    {
      url: 'https://www.oaklandliteracy.com/',
      logo: 'https://unitedwaysem.org/wp-content/uploads/logo-only-Lisa-Machesky.jpg',
      name: 'Oakland Literacy Council',
      description: 'The Oakland Literacy Council believes that all people have a fundamental right to literacy. With support from our funders, we pair trained, compassionate tutors with adult learners until they become proficient readers, writers and communicators. As literate adults, they make our communities and our democracy stronger. \n\nThey contribute to our economy, exercise their voice in their communities and give their children a solid educational foundation. The Oakland Literacy Council is the only organization dedicated solely to ending adult illiteracy in Oakland County. Our services include one-on-one tutoring, conversation and small group learning, online curriculum and digital literacy support. \n\nOakland Literacy Council provides personalized attention for adults who need help with English conversation skills and basic reading and writing.  We also help with computer skills and internet access.  Our programs can help you achieve your dreams of a better job or completing your high school education. \n\nWe also help you to read your mail, fill out forms and help your child with their education. You will work one-on-one with a volunteer tutor and will work online individually and in groups. Our services are free for Oakland County residents. ',
      type: 'Education',
      toggled: false
    },
    {
      url: 'https://www.pontiac.k12.mi.us/',
      logo: 'https://unitedwaysem.org/wp-content/uploads/non-bold-psd-logo-Heidi-Hedquist.png',
      name: 'Pontiac School District',
      description: 'Pontiac School District serves more than 4,000 students in Pontiac and surrounding municipalities. We believe all students deserve a pathway to success as an adult and are proud to be able to offer a number of scholarships, trade pathway partnerships and other outstanding opportunities to prepare students to become successful adults.',
      type: 'Education',
      toggled: false
    },
    {
      url: 'https://rosenclassroom.com/',
      logo: 'https://unitedwaysem.org/wp-content/uploads/ROSEN-Classroom-NEW-2-Jackie-Miceli-768x256.jpg',
      name: 'Rosen Classroom',
      description: 'https://unitedwaysem.org/wp-content/uploads/ROSEN-Classroom-NEW-2-Jackie-Miceli-768x256.jpg',
      type: 'Education',
      toggled: false
    },
    {
      url: 'https://www.soardetroit.com/',
      logo: 'https://unitedwaysem.org/wp-content/uploads/Copy-of-SD_Logo_Horiz_color-Sheree-Dial.png',
      name: 'SOAR Detroit',
      description: 'Soar Detroit provides one-on-one literacy tutoring that caters to the individual reading needs of each child. Our lessons are created by professional education specialists and led by our passionate volunteer mentors.\n\nWe work with students in Detroit through our partnerships with school districts, and faith communities. During this season of COVID, we have moved our services to be completely virtual. Tutoring sessions run during the school day for Fall 2020 and will expand to after school hours starting January 2021. We are excited to see students achieve the best and SOAR in reading!',
      type: 'Education',
      toggled: false
    },
    {
      url: 'http://www.springboardcollaborative.org/',
      logo: 'https://unitedwaysem.org/wp-content/uploads/Springboard_logo_color_RGB-1-Stephanie-Toronto-768x234.png',
      name: 'Springboard Collaborative',
      description: 'We coach educators and family members to help kids learn to read by 4th grade.',
      type: 'Education',
      toggled: false
    },
    {
      url: 'https://www.svsfcenter.org/',
      logo: 'https://unitedwaysem.org/wp-content/uploads/SVSF-Color-Logo-with-lines-Pantone-293-U-Diane-Renaud-768x140.jpg',
      name: 'St. Vincent and Sarah Fisher Center',
      description: 'For 175 years, St. Vincent and Sarah Fisher Center (SVSF) has been serving the families of Metro Detroit. SVSF provides free, personalized educational programs for low-income children and adults, empowering families through education.',
      type: 'Education',
      toggled: false
    },
    {
      url: 'http://urbyreadingacademy.com/',
      logo: 'https://unitedwaysem.org/wp-content/uploads/Screenshot_20191202-183527_Gallery-Candice-Williams-Urby-Education-768x708.jpg',
      name: 'Urby Education LLC',
      description: 'Urby Education, LLC is an education consulting business that supports families and organizations in increasing children’s reading abilities in grades K-2. This includes our online reading academy, parent reading workshops, online courses, and our hands-on Lit Kits for kids.',
      type: 'Education',
      toggled: false
    },


    // Community
    {
      url: 'https://www.accesscommunity.org/',
      logo: 'https://unitedwaysem.org/wp-content/uploads/access_logo_color-Heidi-Mellanen-Swiecki-768x180.jpg',
      name: 'Access',
      description: 'ACCESS empowers communities to improve their economic, social and cultural well-being through an extensive network of programming and wraparound services.',
      type: 'Community',
      toggled: false
    },
    {
      url: 'https://www.congressofcommunities.com/',
      logo: 'https://unitedwaysem.org/wp-content/uploads/COC_RECREATED_LOGO1-Amanda-Holiday-768x490.jpg',
      name: 'Congress of Communities',
      description: 'Congress of Communities (CoC) is a nonprofit organization serving Southwest Detroit. The mission of CoC is to provide leadership and facilitate collaboration of residents, youth, and stakeholders to foster a vibrant and sustainable community. \n\nCoC accomplishes its mission through leadership development, amplifying resident voice, supporting cross community collaboration, and building up local leaders. CoC programming includes Taking Action for Nuestros Ninos (TANN) parent leadership fellowship, TANN Action Team, early childhood programs, Latinx youth council, Nuestro Futuro, Building Sustainable Communities, Bridge to Jobs, and more.',
      type: 'Community',
      toggled: false
    },
    {
      url: 'http://www.dhdc1.org/',
      logo: 'https://unitedwaysem.org/wp-content/uploads/DHDC-1-Yashira-Rodriguez.png',
      name: 'Detroit Hispanic Development Corporation',
      description: 'DHDC’s mission is to make a difference by creating opportunities to change the lives of young people and their families.  We are committed to meeting the needs of our community by providing quality, innovative and culturally appropriate services; Mainly in Southwest Detroit.',
      type: 'Community',
      toggled: false
    },
    {
      url: 'http://detroitpal.org/',
      logo: 'https://unitedwaysem.org/wp-content/uploads/PAL-Logo-Justin-Cook.jpeg',
      name: 'Detroit PAL',
      description: 'In partnership with the Detroit Police Department and community volunteers, Detroit PAL is helping youth find their greatness through athletic, academic, and leadership development programs.',
      type: 'Community',
      toggled: false
    },
    {
      url: 'https://www.facebook.com/DetroitParentNetwork/',
      logo: 'https://unitedwaysem.org/wp-content/uploads/main-logo-2019_07_23-22_51_23-UTC-Jametta-Lilly-768x384.jpg',
      name: 'Detroit Parent Network',
      description: 'The Detroit Parent Network Is Michigan’s premier parent engagement organization that educates, equips and empowers parents as champions for their children and for change in their schools and community.\n\nGrowing from a start-up nonprofit in 2002, Detroit Parent Network is a membership network of almost 1,000 households serving low-income families that are predominantly African American and Latino. DPN services and advocacy are multi-generational and designed to improve parent involvement in education, which is proven to promote child success.',
      type: 'Community',
      toggled: false
    },
    {
      url: 'https://detroitpubliclibrary.org/',
      logo: 'https://unitedwaysem.org/wp-content/uploads/dpl-768x554.jpg',
      name: 'Detroit Public Library',
      description: 'The Detroit Public Library supports families! We offer both electronic and paper books to read with your children. Reading is a great way to bond with your child and enjoy your time together.\n\nWe also offer online programs, free online tutoring and many other great resources.',
      type: 'Community',
      toggled: false
    },
    {
      url: 'http://www.firststep-mi.org/',
      logo: 'https://unitedwaysem.org/wp-content/uploads/First-Step-Logo-Audriana-Buchanan.png',
      name: 'First Step',
      description: 'First Step is a nonprofit organization in Wayne County that provides free, comprehensive and confidential services for domestic and sexual violence survivors and their families. These services include emergency shelter, crisis intervention, 24-hour helpline, individual and group counseling, medical, housing, and legal advocacy, referrals, and more.',
      type: 'Community',
      toggled: false
    },
    {
      url: 'https://www.oakgov.com/health/information/covid-19/Pages/default.aspx',
      logo: '',
      name: 'Oakland County Health Division',
      description: 'The Oakland County Health Division provides health services for the public, businesses and educational communities. The Health Division’s 40+ programs/services focus on preventing the spread of disease; ensuring a safe and clean environment; promoting and encouraging healthy behaviors; preparing for emergencies; surveillance of disease threats; and ensuring accessibility of health services. \n\nOakland County Health Division also offers various evidence-based prevention programs, funded by the Oakland Community Health Network, aimed at reducing risky behaviors that lead to substance use and violence.',
      type: 'Community',
      toggled: false
    },
    {
      url: 'https://mediation-omc.org/',
      logo: 'https://unitedwaysem.org/wp-content/uploads/NewLogo.jpg',
      name: 'Oakland Mediation Center',
      description: 'For over 29 years Oakland Mediation Center (OMC) has provided conflict resolution and education services that are quite affordable and quickly empower community members, families, businesses, courts and schools to resolve conflict. OMC is an apolitical, nonprofit, volunteer-based Community Dispute Resolution Program (CDRP) center whose volunteers represent and serve the community.',
      type: 'Community',
      toggled: false
    },
    {
      url: 'https://www.playworks.org/michigan/',
      logo: 'https://unitedwaysem.org/wp-content/uploads/Playworks-Official-logo-web-Karen-Dunham-768x521.png',
      name: 'Playworks',
      description: 'All kids deserve the social, emotional and physical benefits of play. We help schools and youth programs create healthy play environments where every child can join in. Through play, kids learn to make friends, solve problems and believe in themselves.\n\nFounded in 1996, Playworks expanded to Michigan in 2010. Playworks Michigan serves schools across Michigan through our year-round on-site and virtual support services. We’re also reaching thousands more students across Michigan through professional development workshops for schools and youth organizations.',
      type: 'Community',
      toggled: false
    },
    {
      url: 'https://theartexperience.org/',
      logo: 'https://unitedwaysem.org/wp-content/uploads/TAE-LOGO-improvinglives2020-Audra-Pieknik-768x361.png',
      name: 'The Art Experience',
      description: 'The Art Experience is a community art and art therapy studio located in Pontiac whose mission is to improve lives through the arts. We welcome those of all ages, all abilities, all socio-economic backgrounds and all levels of creative experience to take part in our programs, and help us create new ones. Programs are offered to both the broad community and specialized for specific populations.',
      type: 'Community',
      toggled: false
    },
    {
      url: 'https://improvproject.detroitcreativityproject.org/',
      logo: 'https://unitedwaysem.org/wp-content/uploads/dcp-logo-small-Beth-Hagenlocker.jpg',
      name: 'The Detroit Creativity Project',
      description: 'We offer free improvisational theater programs for middle and high school youth. Improv offers our students tools to be creative, build confidence, and develop their communication and literacy skills.',
      type: 'Community',
      toggled: false
    },
    {
      url: 'https://unitedwaysem.org/wp-content/uploads/TFK_infoflyer.pdf',
      logo: 'https://unitedwaysem.org/wp-content/uploads/1601486167550_1601486161307_Time-for-Family-Logo-Gwendolyn-Mcfall-768x514.jpg',
      name: 'Time for Kids & Family Services',
      description: 'Time for Kids & Family Services, INC. (TKFS) is a nonprofit community based organization whose primary purpose is to provide children and families with quality social services that leads to family stabilization.',
      type: 'Community',
      toggled: false
    },
    {
      url: 'https://www.waynemetro.org/cares/',
      logo: 'https://unitedwaysem.org/wp-content/uploads/cropped-wayneMetroLogo-768x204.png',
      name: 'Wayne Metro Community Action Agency',
      description: 'We are embodied by the belief that no one should live in poverty.',
      type: 'Community',
      toggled: false
    },
    {
      url: 'https://cures.wayne.edu/',
      logo: 'https://unitedwaysem.org/wp-content/uploads/600-cures-logo-Rochelle-Chapman.png',
      name: 'Wayne State University Center for Urban Responses to Environmental Stressors',
      description: 'The Center for Urban Responses to Environmental Stressors (CURES) has a strong commitment to serving, informing and learning from the community and fostering bi-directional communication between researchers and the public.',
      type: 'Community',
      toggled: false
    },
    {
      url: '',
      logo: '',
      name: '',
      description: '',
      type: 'Community',
      toggled: false
    },
    {
      url: 'https://discoveryourspark.org/program-finder/#',
      logo: '../../assets/logos/DYS-logo.png',
      name: 'Discover Your Spark',
      description: 'Lorem',
      type: 'Community',
      toggled: false
    },
    {
      url: 'https://gdyt.org/',
      logo: '../../assets/logos/GDYT-logo.png',
      name: "Grow Detroit's Youth Talent (GDYT)",
      description: 'Lorem',
      type: 'Community',
      toggled: false
    },
    {
      url: 'https://detroitsummerguide.org/',
      logo: '../../assets/logos/DSG-logo.png',
      name: 'Detroit Summer Guide',
      description: 'Lorem',
      type: 'Community',
      toggled: false
    },


    // Family
    {
      url: 'https://brilliantdetroit.org/',
      logo: 'https://unitedwaysem.org/wp-content/uploads/BD-logo-Emma-Laut-768x234.png',
      name: 'Brilliant Detroit',
      description: 'Brilliant Detroit is dedicated to building kid success neighborhoods where families with children 0-8 have what they need to be school ready, healthy and stable.',
      type: 'Family',
      toggled: false
    },
    {
      url: 'https://www.congressofcommunities.com/',
      logo: 'https://unitedwaysem.org/wp-content/uploads/Option3-Camarrah-Morgan-768x344.jpg',
      name: 'Detroit Champions for Hope',
      description: 'Helping Detroit parents and caregivers be actively engaged as their children’s first teacher and champion.',
      type: 'Family',
      toggled: false
    },
    {
      url: 'https://lilbrilliantmindz.com/',
      logo: 'https://unitedwaysem.org/wp-content/uploads/CFB4055E-1F33-4384-81AD-91EB5207D2AB-Angela-Hayes-768x283.jpeg',
      name: 'Lil Brilliant Mindz LLC',
      description: 'We provide free Early Headstart to low income families.',
      type: 'Family',
      toggled: false
    },
    {
      url: 'https://lovintouchlc.com/',
      logo: 'https://unitedwaysem.org/wp-content/uploads/New-Logo-2020-2021-Kelly-Bishaw.png',
      name: 'Lovin Touch Learning Center',
      description: 'Lovin’ Touch Learning Center is a center located in Detroit that offers extended hour childcare, drop in care and Saturday Care. Our program’s mission is to provide opportunities that will allow children to develop social, emotional and cognitive skills in a safe secure environment.',
      type: 'Family',
      toggled: false
    },
    {
      url: 'https://www.starfishfamilyservices.org/',
      logo: 'https://unitedwaysem.org/wp-content/uploads/Starfish-Logo-Uncoated_Hor-Susan-Powers-1-768x225.jpg',
      name: 'Starfish Family Services',
      description: 'Family Service Agency ; Strengthening Families to Build Brighter Futures for Children.',
      type: 'Family',
      toggled: false
    }
  ];

  // Having two initial resources arrays so we always have initial data for All filter.
  loadedResources = this.resources;
  filteredResources = [];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.loadedResources = this.resources;
    const el = document.querySelector(".filter");
    const filterStickyObserver = new IntersectionObserver(
      ([e]) => {
        console.log(e);
        e.target.classList.toggle("is-pinned", e.intersectionRatio < 1),
        { threshold: [1] }
      }
    )
    filterStickyObserver.observe(el);
  }
  ngAfterViewInit(): void {
    // const cells = this.resourceList.toArray();
    // console.log(cells[1].nativeElement);
    // console.log(cells[1].nativeElement.innerHTML);
  }
  resourceToggle(i) {
    console.log(i);
    // console.log(this.resourceList['_results']);

    let list = this.resourceList['_results'];
    list.forEach((resource, index) => {
      // console.log(index);
      // Selecting Resource

      if( i === index ) {
        if(resource.toggled) {
          resource.toggled = false;
          resource.el.style.height = '65px';
          resource.el.style.background = '#0055a5';
          resource.el.style.margin = '10px';
          resource.el.children[0].children[0].children[0].style.color = 'white';
          resource.el.children[0].children[0].children[0].style.fontSize = '1em';
          resource.el.children[0].children[1].children[0].name = 'chevron-down-circle-outline';
          resource.el.children[0].children[1].children[0].style.background = '#0055a5';
          return;
        }
        resource.toggled = true;
        resource.el.style.height = 'auto';
        resource.el.style.background = 'white';
        resource.el.style.margin = '54px 10px 54px 10px';
        resource.el.children[0].children[0].children[0].style.color = '#0055a5';
        resource.el.children[0].children[0].children[0].style.fontSize = '1.4em';
        resource.el.children[0].children[1].children[0].name = 'chevron-up-circle-outline';
        resource.el.children[0].children[1].children[0].style.background = '#f57814';
        return;
      }
    });
  }
  scrollTracking(event) {
    console.log(event);
    const winScroll = event.detail.scrollTop;
    // const documentHeight = event.detail.scrollTop;
    // const windowHeight = event.detail.scrollTop;
    const height = event.detail.event.path[0].clientHeight;
    const scrollHeight = event.detail.event.path[0].scrollHeight;
    const scrolled = (winScroll / (scrollHeight - height)) * 100;

    console.log('ScrollTop: ', winScroll);
    console.log('Height: ', height);
    // console.log('Scroll %', scrolled);
    document.getElementById('scrollBarResources').style.width = scrolled + '%';
  }
  allFilter() {
    this.allResources = true;
    this.education = false;
    this.family = false;
    this.community = false;
    this.filter('All');
    this.filterType = 'All';
    this.filterSpinner();
  }
  educationFilter() {
    this.allResources = false;
    this.education = true;
    this.family = false;
    this.community = false;
    this.filter('Education');
    this.filterType = 'Education';
    this.filterSpinner();
  }
  familyFilter() {
    this.allResources = false;
    this.education = false;
    this.family = true;
    this.community = false;
    this.filter('Family');
    this.filterType = 'Family';
    this.filterSpinner();
  }
  communityFilter() {
    this.allResources = false;
    this.education = false;
    this.family = false;
    this.community = true;
    this.filter('Community');
    this.filterType = 'Community';
    this.filterSpinner();
  }
  filter(type) {
    if(type == 'All') {
      this.loadedResources = this.resources;
    } else {
      this.loadedResources = this.resources.filter(resource => resource.type === type)
    }
  }
  filterSpinner() {
    this.hideResources();
    this.filtering = true;
    setTimeout(() => {
      this.filtering = false;
    }, 1000);
  }
  hideResources() {
    let resources = document.getElementById('resources');
    // console.log(resources);
    resources.style.opacity = '0';
    resources.style.transition = '500';
    setTimeout(() => {
      resources.style.opacity = '1';
    }, 1000);
  }
  back() {
    this.router.navigate(['']);
  }
  backToTop() {
    this.content.scrollToTop();
  }
  logScrolling(event) {

    if (event.detail) {
      // console.log('ScrollTop: ' + event.detail.scrollTop);
      // console.log('Y: ' + event.detail.currentY);
      // console.log('Event Details: ' + event.detail);
    }

    if (event.detail.currentY >= 480) {
      this.showFab = true;
       console.log('SHOW FAB!')
    }

    if (event.detail.currentY <= 480) {
      this.showFab = false;
    }

  }
}
