interface IProps {
    children:string
}

const Button = ({children}:IProps) => {
  return (
    <button>{children}</button>
  )
}

export default Button