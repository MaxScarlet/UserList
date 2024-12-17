import { Component } from '@angular/core';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent {
    name: string = 'Maxim Kulik';
    designation: string = 'Full Stack Developer';
    email: string = 'maxim.kulik99@gmail.com';
    phone: string = '054-5446167';
    address: string = 'Bialik 58, Holon';
    github: string = 'https://github.com/MaxScarlet';
    linkedin: string = 'https://www.linkedin.com/in/maxim-kulik-il';
}
