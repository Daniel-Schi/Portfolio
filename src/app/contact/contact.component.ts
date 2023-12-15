import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  name: any;
  email: any;
  message: any;
  send: boolean = false;


  contactForm = new FormGroup({
    nameInput: new FormControl('', [Validators.required, Validators.minLength(2)]),
    emailInput: new FormControl('', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.(de|com|net|nl|org|uk|cn|au|dk|pl|cz|at|lu|ru)$')]),
    messageInput: new FormControl('', [Validators.required, Validators.minLength(10)]),
    checkboxInput: new FormControl(false)
  });


  async sendMail() {
    if (this.contactForm.valid) {

      const name = this.contactForm.get('nameInput')?.value;
      const email = this.contactForm.get('emailInput')?.value;
      const message = this.contactForm.get('messageInput')?.value;


      let formData = new FormData();
      formData.append('name', name as string);
      formData.append('email', email as string);
      formData.append('message', message as any);

      try {
        await fetch('https://www.daniel-schirmer.de/email/send_mail.php', {
          method: 'POST',
          body: formData,
          mode: 'no-cors'
        });
      } catch (error) { }

      this.contactForm.reset();
      this.send = true;
    }
  }

  toTop() {
    window.scrollTo(0, 0);
  }

}