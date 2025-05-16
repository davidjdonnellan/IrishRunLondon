import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactCardComponent } from '../../common/contact-card/contact-card.component';

@Component({
  selector: 'app-contact-us',
  imports: [CommonModule,ContactCardComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
    contactInfo = [
        {
          "icon":"email.svg",
          "tag":"info@irishrunlondon.com",
          "description":"Send us an email",
          "href":"mailto:info@irishrunlondon.com"
        },
        {
          "icon":"instagram.svg",
          "tag":"@irishrunninglondon",
          "description":"Follow us on Instagram",
          "href":"https://www.instagram.com/irishrunninglondon/"
        },
        {
          "icon":"facebook.svg",
          "tag":"Irish Run London",
          "description":"Find us on Facebook",
          "href":"https://www.facebook.com/groups/IrishRUNLondon/"
        },
        {
          "icon":"whatsapp.svg",
          "tag":"Irish Run London",
          "description":"Join the conversation on WhatsApp",
          "href":"https://chat.whatsapp.com/IGwe9Cdxw6ZFrfUEtexvcc"
        }

    ]
}
