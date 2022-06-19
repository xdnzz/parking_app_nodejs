
import {CategoriesRepository} from '../repositories/CategoryRepository'

interface IRequest {
    name: string;
    description: string;
}
class CreateCategoryService {

    constructor(private categoriesRepository: CategoriesRepository){

    }
    execute({name, description}:IRequest):void {
        const categoryAlreadyExists = this.categoriesRepository.findByName(name);

        if (categoryAlreadyExists) {
            throw new Error ("Category already exists!")
        }

        this.categoriesRepository.Create({ name, description });

    }
}


export { CreateCategoryService }