import express, { Application } from "express";
import { PORT } from "./config/default";

export default class App {
    
    public app: Application;
    public port: string | number;

    constructor() {
        this.app = express();
        this.port = PORT || 8080
    }

    listen(): void {
        this.app.listen(this.port, () => console.log(`Express: listening on http://localhost:${this.port}`));
    }
};
