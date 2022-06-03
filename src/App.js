import "./App.scss";
import Title from "./components/title.js";
import Directions from "./components/directions.js";
import CategoryHeading from "./components/category-heading.js";
import PublishableForm from "./components/publishable-form";

function App() {
  return (
    <div className="content">
      <Title />
      <Directions />
      <div className="cv-app">
        <CategoryHeading content="Contact" />
        <PublishableForm
          inputProps={[
            { type: "text", label: "name" },
            { type: "email", label: "email" },
            { type: "tel", label: "phoneNumber" },
          ]}
        />
        <CategoryHeading content="Education" />
        <PublishableForm
          inputProps={[
            { type: "text", label: "schoolName" },
            { type: "text", label: "titleOfStudy" },
            { type: "date", label: "dateOfStudy" },
          ]}
        />
        <CategoryHeading content="Work Experience" />
        <PublishableForm
          inputProps={[
            { type: "text", label: "companyName" },
            { type: "text", label: "position" },
            { type: "text", label: "tasksPerformed" },
            { type: "date", label: "dateFrom" },
            { type: "date", label: "dateTo" },
          ]}
        />
      </div>
    </div>
  );
}

export default App;
