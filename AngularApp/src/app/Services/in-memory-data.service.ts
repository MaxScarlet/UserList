import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { User } from 'src/app/Models/User';

@Injectable({
    providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const person: User[] = [
            { id: '1', Name: 'John Doe', Email: 'johndoe@example.com', Password: 'password123' },
            { id: '2', Name: 'Jane Doe', Email: 'janedoe@example.com', Password: 'securepass456' },
            { id: '3', Name: 'Alice Smith', Email: 'alice.smith@example.com', Password: 'alice789' },
        ];
        return { person };
    }

    post(reqInfo: RequestInfo) {
        const collection = reqInfo.collection as User[];
        const body = reqInfo.utils.getJsonBody(reqInfo.req) as User;

        if (!body.id) {
            const maxId = collection.length > 0
                ? Math.max(...collection.map((user) => parseInt(user.id, 10)))
                : 0;
            body.id = (maxId + 1).toString();
        }

        collection.push(body);
        return reqInfo.utils.createResponse$(() => {
            return {
                body,
                status: 201,
                headers: reqInfo.headers,
                url: reqInfo.url,
            };
        });
    }
}
