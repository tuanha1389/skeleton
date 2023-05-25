import { Entity } from "../entities/entityBase"

export abstract class RepositoryBase<TEntity extends Entity> {

    storage: Array<TEntity> = [];

    findById(id): TEntity {
        return this.storage.find(x => x.id === id);
    }
    save(entity: TEntity): void {
        this.storage.push(entity);
    }
}