interface IMovieMetaData {
    Title: string
    Year: string
    imdbID: string
    Type: string;
    Poster: string
}

interface IIconProps {
    color?: string;
    colorOnHover?: string;
    children?: React.ReactNode;
    size?: Number;
    solid?: boolean;
}

export type { IMovieMetaData, IIconProps }