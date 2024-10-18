export interface IButton {
    title: string;
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void; //? --> optional
    style?: React.CSSProperties;
}