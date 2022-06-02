import CompanyLogo from "../imgs/company-logo.jpg";

function Title() {
  return (
    <h1 className="heading">
      Welcome to <img src={CompanyLogo} alt="logo" className="heading__logo" />
    </h1>
  );
}

export default Title;
