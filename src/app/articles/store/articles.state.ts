
export interface ArticlesState {
    articlesToday: any[] | null;
    articlesMost: any[] | null;
    articlesLast: any[] | null;
    articlesSearch: any[] | null;
    articleDetail: any| null;
    isLoadingToday: boolean;
    isLoadingMost: boolean;
    isLoadingLast: boolean;
    isLoadingSearch: boolean;
    isLoadingDetail: boolean;
    busqueda:any|null;
    error: any;
}

export const articlesInitialState: ArticlesState = {
    articlesToday: null,
    articlesMost: null,
    articlesLast: null,
    articlesSearch: null,
    articleDetail: null,
    isLoadingToday: true,
    isLoadingMost: true,
    isLoadingLast: true,
    isLoadingSearch: true,
    isLoadingDetail: true,
    busqueda:null,
    error: null
};