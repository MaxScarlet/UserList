import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/Models/User';
import { UserService } from 'src/app/Services/user.service';

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.css']
})
export class DetailsComponent {
    constructor(private basicService: UserService, private route: ActivatedRoute, private router: Router) { }
    public viewData: User = new User();
    id: string = "";
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id')!;
        this.getItem();
    }

    getItem() {
        this.basicService.getById<User>(this.id).subscribe(
            (response) => {
                this.viewData = response;
            }
        )
    }
}
