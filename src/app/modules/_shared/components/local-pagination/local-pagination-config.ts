
export class LocalPaginationConfig {
    constructor(
        public headers?: string[],
        public selectable?: boolean,
        public pageSize?: number,
        public currentPage?: number,
        public rulerSize?: number,
        public customViews?: any
    ) {

    }
}
