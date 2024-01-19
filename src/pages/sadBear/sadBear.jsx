import React, { useEffect, useRef } from "react";
import "./sadBear.scss";
import BearHeader from "../../components/bearHeader/bearHeader";
import LongArrow from "../../image/long-arrow.svg";
import ShortArrow from "../../image/short-arrow.svg";
import ConnectBear from "../../image/bear7.png";
import Twitter from "../../image/twitter.png";
import Discord from "../../image/discord.png";
import Jefe from "../../image/jefe-bear.png";
import Picasso from "../../image/picasso-bear.png";
import Blue from "../../image/blue-bear.png";
import Kosher from "../../image/kosher-bear.png";
import Nugget from "../../image/nugget-bear.png";
// import SecondCloud from "../../image/bottom_rain.png";

export default function SadBear() {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 300);
  }, []);

  const scrTargetArr = useRef([]);

  const handleNavClick = (id) => {
    let e = scrTargetArr.current[id];
    e.scrollIntoView({
      block: "start",
      behavior: "smooth",
      inline: "start",
    });
  };

  return (
    <div className="sad-bear">
      <BearHeader handleNavClick={handleNavClick} />
      <div className="main-section">
        <div
          ref={(el) => (scrTargetArr.current[0] = el)}
          className="main-title-wrapper"
        >
          <div className="main-title">
            <p className="title">SAD BEARS</p>
            <p className="description">Shorting Solana since $3.</p>
            <p className="content">
              It all started with a group of investment bears who found success
              in 2020 hoarding and selling toilet paper during the start of the
              pandemic. The group is also famous for shorting tiger petting zoos
              during the Tiger King hype. Then they decided to short some
              crypto, SOL specifically. Didn't go well ... They became the{" "}
              <b className="sad-bears">Sad Bears</b>.<br />
              <br />
              Join this community of Sad Bears to give moral support to other
              Sad Bears and eat our feelings together.
            </p>
            {/* <button className="connect-button">CONNECT WALLET TO BUY</button>
            <p className="counter-placeholder">0/10000 SOLD</p> */}
            <p className="counter-placeholder">Minting in late October</p>
          </div>
          <div className="bear-image-section"></div>
        </div>

        <div className="second-cloud-wrapper position-relative">
          {/* <img
            src={SecondCloud}
            alt="RAIN"
            className="second-cloud position-absolute w-100"
          /> */}
          <div
            ref={(el) => (scrTargetArr.current[1] = el)}
            className="road-map-wrapper"
          >
            <img
              src={LongArrow}
              alt={"long-arrow"}
              className="road-left-arrow"
            />
            <div className="road-map-content-wrapper">
              <p className="road-map-title">ROAD MAP</p>
              <p className="road-map-content">
                An owner of a Sad Bear will receive many benefits including free
                generative NFTs as well as first access to and discounted
                pricing of future Sad Bears releases, including a 3D version.
                <br />
                <br />
                Sad Bears is the first project by 7Labs, a collective of several
                NFT projects. In the future we plan to create a DAO for holders
                of 7Labs NFTs. More detailed information on benefits and the
                roadmap coming soon.
              </p>
              <img
                src={LongArrow}
                alt={"long-arrow"}
                className="roadmap-arrow"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        ref={(el) => (scrTargetArr.current[2] = el)}
        className="connect-section"
      >
        <div className="midline"></div>
        <img src={ShortArrow} alt={"short-arrow"} className="short-arrow" />
        <img src={ConnectBear} alt={"connect-bear"} className="connect-bear" />
        <div className="connect-link">
          <p className="connect-link-title">CONNECT</p>
          <div className="connect-group">
            <a href="https://discord.gg/fTxYEpTfYk">
              <img src={Discord} className="link-icon" alt={"discord"} />
            </a>
            <a href="https://twitter.com/sadbearsnft">
              <img src={Twitter} className="link-icon" alt={"twitter"} />
            </a>
          </div>
        </div>
      </div>

      <div ref={(el) => (scrTargetArr.current[3] = el)}>
        <div className="rarities-section">
          <div className="midline">
            <p className="coming-soon">"Coming soon"</p>
          </div>
          <p className="rarities-title">RARITIES</p>
          <img src={LongArrow} alt={"long-arrow"} className="rarities-arrow" />
        </div>
      </div>

      <div
        ref={(el) => (scrTargetArr.current[4] = el)}
        className="team-section-wrapper"
      >
        <p className="title">Team</p>
        <div className="team-wrapper">
          <div className="team-member">
            <img src={Jefe} alt={"jefe-bear"} className="member-avatar" />
            <div className="member-wrapper">
              <p className="name">Jefe Bear</p>
              <p className="role">CEO</p>
              <p className="description">
                Took a &nbsp;long position on commercial real estate in 2020.
                Not sure what went wrong. Somehow got promoted to boss bear and
                is in charge of &nbsp;leading all things Sad Bears related.
              </p>
            </div>
          </div>
          <div className="team-member">
            <img src={Picasso} alt={"picasso-bear"} className="member-avatar" />
            <div className="member-wrapper">
              <p className="name">Picasso Bear</p>
              <p className="role">Art</p>
              <p className="description">
                Spent early cub years in his parent's cave painting on the
                walls. Just found out this year that you're not supposed to
                sniff the paint ... has not stopped. Explains a &nbsp;lot about
                the art in the Sad Bears collection.
              </p>
            </div>
          </div>
          <div className="team-member">
            <img src={Blue} alt={"blue-bear"} className="member-avatar" />
            <div className="member-wrapper">
              <p className="name">Blue Bear</p>
              <p className="role">CTO</p>
              <p className="description">
                Heard about the chip shortage and started hoarding chips. No one
                is buying Lays Sour Cream & Onion, not sure if he got the wrong
                kind. Luckily he won't run out of snacks while he develops the
                tech for Sad Bears.
              </p>
            </div>
          </div>
          <div className="team-member">
            <img src={Kosher} alt={"kosher-bear"} className="member-avatar" />
            <div className="member-wrapper">
              <p className="name">Kosher Bear</p>
              <p className="role">Marketing</p>
              <p className="description">
                Started hoarding hand sanitizer during the pandemic, noticed it
                had alcohol, and tried drinking it. Hallucinated some cool ideas
                in the hospital. Now is responsible for marketing and community
                management.
              </p>
            </div>
          </div>
          <div className="team-member">
            <img src={Nugget} alt={"nugget-bear"} className="member-avatar" />
            <div className="member-wrapper">
              <p className="name">Nugget Bear</p>
              <p className="role">Marketing</p>
              <p className="description">
                Owned a business selling farm-raised salmon &nbsp;labeled as
                wild caught. Got arrested at the US/Mexico border trying to flee
                the country. Turning over a new &nbsp;leaf in marketing and
                community management.
              </p>
            </div>
          </div>
        </div>
        <img src={LongArrow} alt={"long-arrow"} className="team-arrow" />
      </div>

      <div ref={(el) => (scrTargetArr.current[5] = el)}>
        <div className="FAQ-section">
          <p className="title">FAQ</p>
          <p className="question">Q: What are Sad Bears? </p>
          <div className="answer-content">
            <p className="answer">
              A: Sad Bears are a collection of 10,000 algorithmically generated
              Bears that exist on the Solana blockchain.{" "}
            </p>
          </div>
          <p className="question">Q: How can I buy a Sad Bear? </p>
          <div className="answer-content">
            <p className="answer mb-0">
              A: Minting happens on this site. When the bears go &nbsp;live,
              connect your Solana wallet and then click Mint. Congrats, you are
              now a Sad Bear. Specific steps are as follows:
            </p>
            <div className="child-answer">
              <ul>
                <li>
                  Download a Solana Wallet (Phantom, Solflare, or Sollet).
                </li>
                <li>
                  Deposit SOL to your wallet. SOL can be purchased on an
                  exchange such as Coinbase or FTX. You’ll then transfer your
                  SOL from your exchange account to your Solana Wallet.
                </li>
                <li>
                  At the time of &nbsp;launch, connect your wallet to the Sad
                  Bears website. Once the sale is &nbsp;live, you’ll be able to
                  click the Mint button.
                </li>
                <li>
                  Once you click Mint, approve the transaction and you are now
                  one of us - a Sad Bear. Your Sad Bear NFT will appear in your
                  Solana wallet.
                </li>
              </ul>
            </div>
          </div>
          <p className="question">
            Q: When is the &nbsp;launch? How much will it cost?{" "}
          </p>
          <div className="answer-content">
            <p className="answer">
              A: We are launching in October. Stay tuned for the exact date. The
              price will be 1 SOL per bear.
            </p>
          </div>
          <p className="question">Q: Is there a buy &nbsp;limit? </p>
          <div className="answer-content">
            <p className="answer">
              A: You can purchase one Sad Bear per transaction, but you can make
              as many transactions as you would like, while supplies &nbsp;last.{" "}
            </p>
          </div>
          <p className="question">
            Q: How many traits do the Sad Bears have, and what are their
            rarities?{" "}
          </p>
          <div className="answer-content">
            <p className="answer">
              A: The bears have approximately 180 total traits divided among 8
              categories, which can generate over 23 billion unique Sad Bears.
              Please see the Rarities section above.
            </p>
          </div>
          <p className="question">Q: What wallets can I use? </p>
          <div className="answer-content">
            <p className="answer">
              A: We support Phantom, Solflare, and Sollet wallets.
            </p>
          </div>
          <p className="question">Q: Will there be a secondary market? </p>
          <div className="answer-content">
            <p className="answer">A: Yes. In progress.</p>
          </div>
          <p className="question">Q: Are there secondary sale royalties?</p>
          <div className="answer-content">
            <p className="answer">A: Yes, royalties are set at 5%.</p>
          </div>
          <p className="question">Q: What if I have additional questions: </p>
          <div className="answer-content">
            <p className="answer">
              A: Reach out to us on our Discord server or view the FAQ channel
              on our Discord.
            </p>
          </div>
        </div>
      </div>
      <div className="bottom-background"></div>
    </div>
  );
}
