import { ICategoryRepository, ICreateCategoryDTO } from "./ICategoryRepository";
import { Category } from '../model/Category';


class PostgresCategoriesRepository implements ICategoryRepository {
    findByName(name: string): Category {
        console.log(name)
        throw new Error("Method not implemented");
    }
    list(): Category {
        throw new Error("Method not implemented");
    }
    create({name, description: string}: ICreateCategoryDTO): void {
        throw new Error("Method not implemented");
    }
}

export { PostgresCategoriesRepository }