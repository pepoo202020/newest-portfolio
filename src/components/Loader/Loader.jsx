import Lottie from "lottie-react";
import { Component } from "react";
import loader from "./loader.json";

export default class Loader extends Component {
  render() {
    return (
      <div id="logo" className="loader_contianer">
        <Lottie animationData={loader} />
      </div>
    );
  }
}
