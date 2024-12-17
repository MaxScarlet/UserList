import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';

const app = express();
const port = 3000;
const usersFilePath = path.join(__dirname, 'users.json');

app.use(cors());
app.use(express.json());

/**
 * Read data from JSON file
 * @returns returns array of users
 */
const readUsersFromFile = () => {
    if (fs.existsSync(usersFilePath)) {
        const data = fs.readFileSync(usersFilePath).toString();
        return JSON.parse(data);
    }
    return [];
};

/**
 * Write data to JSON file
 * @param {Array} users - array of users
 */
const writeUsersToFile = (users) => {
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
};

/**
 * Get the maximum user ID in the array
 * @param {Array} users - array of users
 * @returns maximum user ID
 */
const maxID = (users) => {
    return users.reduce((max, user) => {
        const id = parseInt(user.id);
        return !isNaN(id) ? Math.max(max, id) : max;
    }, 0);
}

let users = readUsersFromFile();

app.get('/users', (req, res) => {
    res.json(users);
});

app.get('/users/:id', (req, res) => {
    const user = users.find(u => u.id === req.params.id);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: "User not found" });
    }
});

app.post('/users', (req, res) => {
    const newUser = {
        id: (maxID(users) + 1).toString(),
        ...req.body
    };
    users.push(newUser);
    writeUsersToFile(users);
    res.status(201).json(newUser);
});

app.put('/users/:id', (req, res) => {
    const index = users.findIndex(u => u.id === req.params.id);
    if (index !== -1) {
        users[index] = { ...users[index], ...req.body };
        writeUsersToFile(users);
        res.json(users[index]);
    } else {
        res.status(404).json({ message: "User not found" });
    }
});

app.delete('/users/:id', (req, res) => {
    const index = users.findIndex(u => u.id === req.params.id);
    if (index !== -1) {
        const deletedUser = users.splice(index, 1);
        writeUsersToFile(users);
        res.json(deletedUser);
    } else {
        res.status(404).json({ message: "User not found" });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
