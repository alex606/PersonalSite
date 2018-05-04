import React from 'react';
import componentStyles from './styles/componentStyles';
import Resume from './components/Resume';

import hthon from './assets/hthon.JP2';
import gj2015 from './assets/gj2015.JP2';
import gj2016 from './assets/gj2016.JP2';

const pictureDisplay = {
  height: '300px',
  minWidth: '400px',
  marginTop: '10px',
  marginBottom: '10px',
};

const Portfolio = () => (
  <div style={componentStyles.bodyStyle}>
    <p style={componentStyles.headerStyle}>Portfolio</p>
    <p style={componentStyles.textStyle}>
        I graduated with a B.S. in Mechanical Engineering from Kansas State University
        with a minor in Physics and another minor in Computer Science.
        Most of my professional experience is in using Automation tools such as Selenium for QA Automation.
        I have experience in using front-end technologies such as React, and back-end technologies
        such as C#, Java, and NodeJS.
    </p>
    <Resume />
    <p style={componentStyles.textStyle}>
    Unfortunately, much of the stuff that I have worked on during work is proprietary stuff,
    but here is a small sample of stuff that I can freely showcase
    </p>
    <h2>Unity stuff</h2>
    <p style={componentStyles.textStyle}>
    While in college, I participated in Game Jams competitions for fun.
    While they provide fond nostalgic memories for me, these games are pretty terrible, lol.
    Makes sense considering they were made in a short timespan of 2 continuous days
    </p>
    <hr />
    <div style={componentStyles.textStyle}>
      <div style={componentStyles.alignElementsCenter}>
        <div style={pictureDisplay}>
          <h4>VR Piano w/ Leap motion sensor (2016):</h4>
          <p> Hack-a-thon that was sponsored by Kansas State.
            Not a Game Jam competition per se, but I ended up making a game anyways.
            First Hackathon that I participated in and no one that I knew wanted to try it with me.
            I showed up and found random team-mates to join with.
          </p>
        </div>
        <img
          src={hthon}
          alt="A screenshot of myself demo-ing the VR Piano with motion sensor"
          style={pictureDisplay}
        />
      </div>
      <div style={componentStyles.alignElementsCenter}>
        <div style={pictureDisplay}>
          <h4>Live or Diabetes (2016):</h4>
          <p>
            In Game Jam competitions, in my experience, there is usually some sort of competition theme to abide by.
            The theme for this year was diabetes, and that was a weird theme to work with.
            Neat lessons learned from this competition:
            Character Animations, health bar, rubber-banded camera movements, attack ability
          </p>
        </div>
        <img
          src={gj2016}
          alt="A screenshot of LiveOrDiabetes."
          style={pictureDisplay}
        />
      </div>
      <div style={componentStyles.alignElementsCenter}>
        <div style={pictureDisplay}>
          <h4>Hack The Hacker (2015):</h4>
          <p> The first game I ever helped create using Unity.
          I was on a team with several other intern co-workers from GE Aviation.
          We modeled the end game boss after our Manager.
          In the game, we decided to have him throw instant killer cats at us for some reason.
          </p>
        </div>
        <img
          src={gj2015}
          alt="A screenshot of HackTheHacker. The first game I ever helped create using Unity."
          style={pictureDisplay}
        />
      </div>

    </div>
  </div>
);
export default Portfolio;
