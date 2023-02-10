import './App.css';
import './index.css';


function App() {
  return (
    <>
      <div class="firstcontainer">
        <h1 class="heading">An inspiring design delivered to <br></br> your inbox every morning </h1>
        <p class="para">Our team scouts the internet for the best design, <br></br> illustrations and art and delivers a truly inspiring <br></br> one every day to your inbox</p>
        <strong class="strong">Show me how it looks</strong>
        <br></br>
        <input id="email" type="email" placeholder="Your E-mail address" />
        <button id="button">Register Now</button>
        <p class="para2">Free - No Spam - No Data Sharing</p>
        <img src="https://i.ibb.co/dJGFRkQ/phone.png" class="manphone" alt="phone"></img>
      </div>


      <footer>
        <div id="footdiv">
          <table border="0" id="table">
            <tr>
              <td class="ltd">Prompt Generator</td>
              <td class="rtd" align="right">Dweep.io</td>
            </tr>
            <tr>
              <td class="ltd">Dweep Daily</td>
              <td class="rtd" align="right">Made with love in india</td>
            </tr>

            <tr>
              <td class="ltd">All Contributors</td>
              <td class="rtd" align="right"><img src="https://i.ibb.co/6DR8rFr/insta.png" alt="instagram" width="25px" /> <img src="https://i.ibb.co/nsWQ7x6/link.png" alt="linkedin" width="25px" /></td>
            </tr>

            <tr>
              <td class="ltd">Your data on Dweep.io</td>
            </tr>
            <tr>
              <td class="ltd">Contribute to Deep.io</td>
              <td class="rtd" align="right">hello@dweep.io</td>
            </tr>
          </table>
        </div>
      </footer>
    </>
  );
}

export default App;
