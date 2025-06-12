const InfoText = ({ children, type = 'default' }) => {
  const getTextClass = () => {
    switch (type) {
      case 'error':
        return 'info-text error';
      case 'weather':
        return 'info-text weather';
      case 'title':
        return 'info-text title';
      default:
        return 'info-text';
    }
  };

  return (
    <div className={getTextClass()}>
      {children}
    </div>
  );
};

export default InfoText;