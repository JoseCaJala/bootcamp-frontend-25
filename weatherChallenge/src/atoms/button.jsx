const Button = ({ onClick, children, variant = 'primary', disabled = false }) => {
  const getButtonClass = () => {
    switch (variant) {
      case 'clean':
        return 'button button-clean';
      case 'city':
        return 'button button-city';
      default:
        return 'button button-primary';
    }
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={getButtonClass()}
    >
      {children}
    </button>
  );
};

export default Button;