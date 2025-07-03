import './atoms.css'

export const Button = ({children , color, onClick}) => {
    return (
        <button onClick={onClick} className={`btn btn-${color}`}>{children}</button>
    )
}