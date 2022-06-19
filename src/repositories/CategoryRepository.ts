import { Category } from '../model/Category'


interface ICreateCategoryDTO {
    name: string;
    description: string;
}

class CategoriesRepository {
    private categories: Category[] = [];

    constructor() {
        this.categories = []
    };

    Create({ name, description }: ICreateCategoryDTO): void {
        const category = new Category();

        Object.assign(category, {
            name,
            description,
            created_at: new Date()
        });

        this.categories.push(category);
    };

    List(): Category[] {
        return this.categories;
    };

    findByName(name: string): any {

        const category = this.categories.find((categories) => categories.name === name);

        return category;
    }

}


export { CategoriesRepository } 