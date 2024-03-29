import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { ModalController, AlertController, NavParams , LoadingController} from '@ionic/angular';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FairsService } from 'src/app/services/fairs.service';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription, throwError } from 'rxjs';

@Component({
  selector: 'app-fair-student-register',
  templateUrl: './fair-student-register.page.html',
  styleUrls: ['./fair-student-register.page.scss'],
})
export class FairStudentRegisterPage implements OnInit, OnDestroy {
  @ViewChild('descriptionChars', {static: false}) descriptionChars;
  registered = false;
  resgisterForm: FormGroup;
  registerStudentSubscription: Subscription;
  studentInterests = [];
  date: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  summary: string;
  fairName: string;
  studentObject = {
    fairID: '',
    name: '',
    email: '',
    school: '',
    phone: '',
    gender: '',
    grade: '',
    lunch: '',
    interests: '',
    question1: {
      question: 'question 1',
      answer: ''},

    question2: {
      question: 'question 2',
      answer: ''},

    question3: {
      question: 'question 3',
      answer: ''},

    question4: {
      question: 'question 4',
      answer: ''},

    question5: {
      question: 'question 5',
      answer: ''},
  };

  validationMessasges = {
    email: [
      { type: 'email', message: 'Must be a valid email address'}
    ],
    phone: [
      { type: 'pattern', message: 'Phone number must be 10 digits, ei (734)123-4567.'}
    ]
  };

  interests = [
    { val: 'Automotive Mobility', isChecked: false },
    { val: 'Artificial Intelligence', isChecked: false },
    { val: 'Coding', isChecked: false },
    { val: 'Computer Science', isChecked: false },
    { val: 'Cyber Security', isChecked: false },
    { val: 'Digital Media', isChecked: false },
    { val: 'Engineering', isChecked: false },
    { val: 'Graphic Design', isChecked: false },
    { val: 'Robotics', isChecked: false },
    { val: 'Software Development', isChecked: false },
    { val: 'Video Game Design', isChecked: false }
  ];

  grades = [
    '6th Grade',
    '7th Grade',
    '8th Grade',
    '9th Grade',
    '10th Grade',
    '11th Grade',
    '12th Grade',
  ];

  schools = [
    'Martin Luther King High School',
    'Cass Technical High School',
    'Renaissance High School'
  ];

  lunches = [
    'Ham',
    'Turkey',
    'Veggie'
  ];
  fairID: any;

  constructor(
    private modal: ModalController,
    private alert: AlertController,
    private formBuilder: FormBuilder,
    private fairs: FairsService,
    private navParams: NavParams,
    private loading: LoadingController
  ) { }

  ngOnDestroy(): void {
    // this.registerStudentSubscription.unsubscribe();
  }

  ngOnInit() {
    this.resgisterForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.maxLength(10), Validators.pattern('[0-9 ]{10}')]]
    });

    this.fairID = this.navParams.get('id');
    console.log('fairID:');
    console.log(this.fairID);
  }

  cancel() {
    this.modal.dismiss();
 }

 isChecked(interestName) {
  // tslint:disable-next-line: prefer-for-of
  for (let i = 0; i < this.interests.length; i++) {
    if (this.interests[i].val === interestName) {
      if (this.interests[i].isChecked === false) {
        console.log(interestName + ' has NOT been checked');
        this.interests[i].isChecked = true;
        console.log(this.interests);
        return;
      }
      if (this.interests[i].isChecked === true) {
        console.log(interestName + 'Interest has been checked');
        this.interests[i].isChecked = false;
        console.log(this.interests);
        return;
      }
    }
  }
 }

  selectGrade(e) {
    console.log('Added Grade ' + e.detail.value);
    this.studentObject.grade = e.detail.value;
  }

  selectSchool(e) {
    console.log('Added School ' + e.detail.value);
    this.studentObject.school = e.detail.value;
  }

  selectLunch(e) {
    console.log('Added Lunch ' + e.detail.value);
    this.studentObject.lunch = e.detail.value;
  }

  selectGender(e) {
    console.log('Added Gender ' + e.detail.value);
    this.studentObject.gender = e.detail.value;
  }


 question1Handler(e) {
  this.studentObject.question1.answer = e.detail.value;
  console.log(this.studentObject.question1);
 }

 question2Handler(e) {
  this.studentObject.question2.answer = e.detail.value;
  console.log(this.studentObject.question2);
 }

 question3Handler(e) {
  this.studentObject.question3.answer = e.detail.value;
  console.log(this.studentObject.question3);
 }

 question4Handler(e) {
  this.studentObject.question4.answer = e.detail.value;
  console.log(this.studentObject.question4);
 }

 question5Handler(e) {
  this.studentObject.question5.answer = e.detail.value;
  console.log(this.studentObject.question5);
 }


 registerStudent() {

  // Add all the students interests to the studentInterest array
  this.interests.forEach(interest => {

    if (interest.isChecked === true) {
      this.studentInterests.push(interest.val);
    }
  });

  this.studentObject.fairID = this.fairID;
  this.studentObject.interests = JSON.stringify(this.studentInterests);
  this.studentObject.name = this.resgisterForm.value['name'];
  this.studentObject.email = this.resgisterForm.value['email'];
  this.studentObject.phone = this.resgisterForm.value['phone'];

  // Check to see if the user has answered all the questions
  if (
    !this.studentObject.question1.answer ||
    !this.studentObject.question2.answer ||
    !this.studentObject.question3.answer ||
    !this.studentObject.question4.answer ||
    !this.studentObject.question5.answer ||
    !this.resgisterForm.valid ||
    !this.studentObject.name ||
    !this.studentObject.grade ||
    !this.studentObject.gender ||
    !this.studentObject.lunch ||
    !this.studentObject.school ||
    !this.studentObject.interests ) {
      console.log('Please answer all the questions!');
      return this.presentFormAlert();
  }  else {
    this.presentLoading();
  }
 }

async presentFormAlert() {
  const alert = await this.alert.create({
    // tslint:disable-next-line: max-line-length
    message: 'Please fill out the entire form, including the information at the top, and questions at the bottom. You do not need to fill out the Student Interests selection',
    // cssClass: ''
    buttons: [
      {
        text: 'Okay',
        role: 'cancel'
      }
    ]
  });

  await alert.present();
}
async presentEmailTakenAlert() {
 const alert = await this.alert.create({
   // tslint:disable-next-line: max-line-length
   message: 'This email has already been registered. Please use another email, or contact us if you believe your email has been used without your permission.',
   // cssClass: ''
   buttons: [
     {
       text: 'Okay',
       role: 'cancel'
     }
   ]
 });

 await alert.present();
}
async presentWaitListedAlert() {
 const alert = await this.alert.create({
   // tslint:disable-next-line: max-line-length
   header: 'You have been waitlisted',
   // tslint:disable-next-line: max-line-length
   message: 'There are already more than 30 students from your school signed up. If a space clears up, we will contact you via email and add you to the list.',
   // cssClass: ''
   buttons: [
     {
       text: 'Okay',
       handler: () => {
        this.modal.dismiss();
       }
     }
   ]
 });

 await alert.present();
}
async presentLoading() {
  const loading = await this.loading.create({
    cssClass: 'my-custom-class',
    message: 'Registering',
    duration: 2000
  });
  await loading.present();
  console.log('Trying to register student..');

  this.fairs.registerStudent(this.studentObject).pipe(
    catchError((error: HttpErrorResponse) => {

      if ( error.error === 'A Student already has that email address' ) {
        console.log('A Student already has that email address');

        this.presentEmailTakenAlert();
        return throwError;
      }

      if ( error.error === 'There are more than 30 students registered from your school' ) {
        console.log('There are more than 30 students registered from your school');

        this.presentWaitListedAlert();
        return throwError;
      }
    })
  )
  .subscribe(
     () => {
      console.log('REGISTERED STUDENT TO FAIR!');
      this.registered = true;
      console.log(this.studentObject.interests);

      console.log('Loading dismissed!');
     })
}
confirm() {
  this.modal.dismiss();
}

}
