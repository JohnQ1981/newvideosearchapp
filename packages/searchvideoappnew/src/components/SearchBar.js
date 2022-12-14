import React, { useState } from "react";
const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");

  const onInputChange = (event) => {
    setTerm(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    //TODO: Make sure we call call back from parent component
    onFormSubmit(term);
  };
  return (
    <div className="search-bar ui segment">
      <p>This App is built with React by J.Q</p>
      <hr></hr>
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label>Search a Video on YouTube!</label>
          <input type="text" value={term} onChange={onInputChange} />
        </div>
      </form>
    </div>
  );
};

// class SearchBar extends React.Component {
//   //state = { term: "" };

//   // onInputChange = event => {
//   //   this.setState({ term: event.target.value });
//   // };
//   // onFormSubmit = event => {
//   //   event.preventDefault();
//   //   //TODO: Make sure we call call back from parent component
//   //   this.props.onFormSubmit(this.state.term);
//   // };

//   render() {
//     // return (
//     //   <div className="search-bar ui segment">
//     //     <p>This App is built with React!</p>
//     //     <hr></hr>
//     //     <form onSubmit={this.onFormSubmit} className="ui form">
//     //       <div className="field">
//     //         <label>Video Search</label>
//     //         <input
//     //           type="text"
//     //           value={this.state.term}
//     //           onChange={this.onInputChange}
//     //         />
//     //       </div>
//     //     </form>
//     //   </div>
//     // );
//   }
// }

export default SearchBar;
