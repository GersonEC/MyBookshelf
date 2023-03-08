interface MyProps {
  label: string;
}

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & MyProps;

const Button: React.FC<Props> = ({ label, ...props }) => {
  return <button {...props}>{label}</button>;
};

export default Button;
