import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
import { User } from 'src/app/Models/User';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
    formData: User = new User();
    id: string = '';

    constructor(
        private basicService: UserService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.route.params.subscribe((params: any) => {
            this.id = params['id'];
            if (this.id) {
                this.getItem();
            }
        });
    }

    onSubmit(): void {
        if (this.id) {
            this.basicService.update(this.id, this.formData).subscribe(
                () => this.router.navigate(['/users']),
                (error) => console.error('Error updating user:', error)
            );
        } else {
            this.basicService.create(this.formData).subscribe(
                () => this.router.navigate(['/users']),
                (error) => console.error('Error creating user:', error)
            );
        }
    }

    getItem(): void {
        this.basicService.getById<User>(this.id).subscribe(
            (response) => {
                this.formData = response;
            },
            (error) => console.error('Error fetching user data:', error)
        );
    }
}
