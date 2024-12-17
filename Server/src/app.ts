import express from 'express';
import cors from 'cors';
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

let users = [
    { id: "1", Name: "John Doe", Email: "john.doe@example.com", Password: "password123" },
    { id: "2", Name: "Jane Smith", Email: "jane.smith@example.com", Password: "securepass" },
    { id: "3", Name: "Alice Johnson", Email: "alice.j@example.com", Password: "alice2024" },
    { id: "4", Name: "Bob Brown", Email: "bob.brown@example.com", Password: "bobSecure" },
    { id: "5", Name: "Charlie Adams", Email: "charlie.adams@example.com", Password: "charliePass!" }
];


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
        id: (users.length + 1).toString(), // Auto-increment ID
        ...req.body
    };
    users.push(newUser);
    res.status(201).json(newUser);
});

app.put('/users/:id', (req, res) => {
    const index = users.findIndex(u => u.id === req.params.id);
    if (index !== -1) {
        users[index] = { ...users[index], ...req.body };
        res.json(users[index]);
    } else {
        res.status(404).json({ message: "User not found" });
    }
});

app.delete('/users/:id', (req, res) => {
    const index = users.findIndex(u => u.id === req.params.id);
    if (index !== -1) {
        const deletedUser = users.splice(index, 1);
        res.json(deletedUser);
    } else {
        res.status(404).json({ message: "User not found" });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
