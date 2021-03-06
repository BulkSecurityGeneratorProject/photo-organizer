import { BaseEntity, User } from './../../shared';

export class Photo implements BaseEntity {
    constructor(
        public id?: number,
        public fileName?: string,
        public path?: string,
        public type?: string,
        public dateCreated?: any,
        public thumbnail?: string,
        public image?: any,
        public preview?: any,
        public tags?: BaseEntity[],
        public user?: User,
    ) {
    }
}
