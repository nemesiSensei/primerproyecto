import React from "react";
import img4 from "./media/MarkRosterBlack.png"

const Footer = props => {
  return (
    <footer class="bg-secondary text-white">
      <br></br>
      <br></br>
      <img src={img4} width="200" height="200"></img>
        <br></br>
        <br></br>
        <div class="text-end">
      <p class="blockquote">Copyright © Valhalla Technologies S.A.S. 2021</p>
      </div>
      <br></br>           
    </footer>
  );
};

export default Footer;