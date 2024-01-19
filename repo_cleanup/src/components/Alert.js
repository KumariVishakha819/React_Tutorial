function Alert({ children }) {
  return (
    <h1>
      <div className="alert alert-primary"> {children}</div>
    </h1>
  );
}
export default Alert;
