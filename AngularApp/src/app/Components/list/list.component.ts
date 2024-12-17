import { Component } from '@angular/core';
import { User } from 'src/app/Models/User';
import { UserService } from 'src/app/Services/user.service';
@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent {

    public list: User[] = []

    constructor(public basicService: UserService) {
    }
    ngOnInit() {
        this.getItems();
    }

    getItems() {
        this.basicService.get<User>().subscribe(
            (response) => {
                this.list = response;
            }
        )
    }
    deleteItem(id: string) {
        this.basicService.delete(id).subscribe((response) => {
            this.getItems();
        })
    }
}
