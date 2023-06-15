import { ICreate } from "../interfaces/UsersInterface";
import { UsersRepository } from "../repositories/UserRepository"


class UsersServices {
    private usersRepository: UsersRepository;

    constructor() {
        this.usersRepository = new UsersRepository()
    }
    create({ name, email, password }: ICreate) {
        const create = this.usersRepository.create({ name, email, password })
    }
}

export { UsersRepository };