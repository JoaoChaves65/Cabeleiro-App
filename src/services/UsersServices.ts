import { hash } from "bcrypt";
import { ICreate } from "../interfaces/UsersInterface";
import { UsersRepository } from "../repositories/UserRepository"


class UsersServices {
    private usersRepository: UsersRepository;

    constructor() {
        this.usersRepository = new UsersRepository()
    }
    async create({ name, email, password }: ICreate) {
        const findUser = await this.usersRepository.findUserByEmail(email)

        if (findUser) {
            throw new Error('User exists')
        }

        const hashPassoword = await hash(password, 10)

        const create = await this.usersRepository.create({
            name,
            email,
            password: hashPassoword
        });
        return create;
    }
}

export { UsersServices };