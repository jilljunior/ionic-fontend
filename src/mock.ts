export interface Video{
    _id?: any,
    title?: string,
    link?: string,
    description?: string,
    upload_date?: string,
    number_likes?: number,
    number_displayed?: number,
    number_shares?: number,
    number_comments?: number,
    categories?: any,
    active?: boolean,
    user?: any
}

export interface Preference {
    _id: any,
    categories: any,
    date: Date,
    user: any
}
export interface User{
    _id: any,
    avatar: string,
    user_name: string
}