import { MailtrapProvider } from "../../providers/implementations/MailtrapMailProvider";
import { PostgresUsersRepository } from "../../providers/implementations/PostgresUsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const mailtrapProvider = new MailtrapProvider();
const postgresUsersRepository = new PostgresUsersRepository();

const createUserUseCase = new CreateUserUseCase(postgresUsersRepository, mailtrapProvider);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController };
