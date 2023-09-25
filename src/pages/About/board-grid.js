const Board = () => {
  const jenny = require("../../components/board-photos/jenny-tran.png");
  const ellie = require("../../components/board-photos/elizabeth-lee.png");
  const emi = require("../../components/board-photos/emi-cervantes.png");
  const ashley = require("../../components/board-photos/ashley-yung.png");
  const katherine = require("../../components/board-photos/katherine-frields.png");
  const azra = require("../../components/board-photos/azra-zahin.png");
  const kaylie = require("../../components/board-photos/kaylie-chong.png");
  const nathan = require("../../components/board-photos/nathan-samarasena.png");
  const shreya = require("../../components/board-photos/shreya-shyam.png");
  const jake = require("../../components/board-photos/jake-silverman.png");
  const natalie = require("../../components/board-photos/natalie-nguyen.png");
  const will = require("../../components/board-photos/william-hou.png");
  const gordon = require("../../components/board-photos/gordon-lin.png");
  const rosalind = require("../../components/board-photos/rosalind-guo.jpg");
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <div className="logistics">
        <h2 id="board-h2">Logistics</h2>
        <div class="image-grid">
          <div id="member-card">
            <img src={jenny} alt="Jenny Tran" id="board-headshot" />
            <h4>Jenny Tran</h4>
            <p>Co-President</p>
          </div>
          <div id="member-card">
            <img src={ellie} alt="Elizabeth Lee" id="board-headshot" />
            <h4>Elizabeth Lee</h4>
            <p>Co-President</p>
          </div>
          <div id="member-card">
            <img src={emi} alt="Emi Cervantes" id="board-headshot" />
            <h4>Emi Cervantes</h4>
            <p>Executive Vice President</p>
          </div>
          <div id="member-card">
            <img src={gordon} alt="Gordon Lin" id="board-headshot" />
            <h4>Gordon Lin</h4>
            <p>VP of Finance</p>
          </div>
          <div id="member-card">
            <img src={will} alt="William Hou" id="board-headshot" />
            <h4>William Hou</h4>
            <p>Advisor</p>
          </div>
        </div>
      </div>

      <div className="community">
        <h2 id="board-h2">Community Development</h2>
        <div className="image-grid">
          <div id="member-card">
            <img src={ashley} alt="Ashley Yung" id="board-headshot" />
            <h4>Ashley Yung</h4>
            <p>Co-Director of Community Development</p>
          </div>
          <div id="member-card">
            <img src={natalie} alt="Natalie Nguyen" id="board-headshot" />
            <h4>Natalie Nguyen</h4>
            <p>Co-Director of Community Development</p>
          </div>
          <div id="member-card">
            <img src={katherine} alt="Katherine Frields" id="board-headshot" />
            <h4>Katherine Frields</h4>
            <p>VP of Community Development</p>
          </div>
          <div id="member-card">
            <img src={azra} alt="Azra Zahin" id="board-headshot" />
            <h4>Azra Zahin</h4>
            <p>VP of Community Development</p>
          </div>
        </div>
      </div>

      <div className="marketing">
        <h2 id="board-h2">Marketing</h2>
        <div class="image-grid">
          <div id="member-card">
            <img src={kaylie} alt="Kaylie Chong" id="board-headshot" />
            <h4>Kaylie Chong</h4>
            <p>Co-Director of Marketing</p>
          </div>
          <div id="member-card">
            <img src={nathan} alt="Nathan Samarasena" id="board-headshot" />
            <h4>Nathan Samarasena</h4>
            <p>Co-Director of Marketing</p>
          </div>
          <div id="member-card">
            <img src={shreya} alt="Shreya Shyam" id="board-headshot" />
            <h4>Shreya Shyam</h4>
            <p>VP of Marketing </p>
          </div>
          <div id="member-card">
            <img src={jake} alt="Jake Silverman" id="board-headshot" />
            <h4>Jake Silverman</h4>
            <p>VP of Marketing</p>
          </div>
          <div id="member-card">
            <img src={rosalind} alt="Rosalind Guo" id="board-headshot" />
            <h4>Rosalind Guo</h4>
            <p>Website Master</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;
