import { Request, Response, NextFunction } from "express";

class UsersController {
    index() {
        //Buscar todos
    }
    show() {
        //Buscar somente um
    }
    store(request: Request, response: Response, next: NextFunction) {
        const { name, email, password } = request.body;
        try {
            const result = userService(name, email, password);

            return response.status(201).json(result);
        } catch (error) {
            next(error);
        }
    }
    auth() {
        // Autenticação
    }
}

export { UsersController }