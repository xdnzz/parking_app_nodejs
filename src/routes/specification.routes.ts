import { Router } from 'express';
import { CreateSpecificationService } from '../modules/cars/services/CreateSpecificationService';
import {SpecificatinoRepository} from '../modules/cars/repositories/SpecificationRepository';

const specificationRoutes = Router();

const specificationRepository = new SpecificatinoRepository();

specificationRoutes.post('/', (request, response) => {
    const {name, description} = request.body;
    const createSpecificationRepository = new CreateSpecificationService(specificationRepository);

    createSpecificationRepository.execute({name, description});

    return response.status(201).send();

})

export { specificationRoutes }