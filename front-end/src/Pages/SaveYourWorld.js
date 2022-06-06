import "./SaveYourWorld.css";

function SaveTheEarth() {
  return (
    <div>
      <div id="save-our-world-image">
        <h1>TAKE THESE URGENT ACTIONS NOW:</h1>
        <ul>
          <li>
            <h2>
              COMPOST - FOOD WASTE is one of the BIGGEST CONTRIBUTORS of global
              warming!
            </h2>
          </li>
          <li>
            <h2>
              BUY{" "}
              <a
                href={
                  "https://www.traderjoes.com/home/products/pdp/peppermint-and-tea-tree-shampoo-bar-068069"
                }
              >
                SOLID SHAMPOO,
              </a>{" "}
              a WATER FILTER & a{" "}
              <a
                href={
                  "https://www.bedbathandbeyond.com/store/product/reduce-cold1-stainless-steel-travel-mug/5415901?keyword=reduce+50oz+cold1+insulated+stainless+steel+straw+tumbler+mug&skuId=69072024"
                }
              >
                DRINKING VESSEL.
              </a>{" "}
              REDUCE single-use plastics --<br></br>
              <a
                href={"https://www.ecco-verde.com/search?keyword=solid+shampoo"}
              >
                <br></br>LUXURY BRANDS
              </a>{" "}
              are catching on! Divas & influencers: SCREAM it FROM the
              MOUNTAINTOPS!<br></br>
              <br></br>If you MUST use a single-use water bottle, REFILL it 2-3
              times-especially same day.<br></br>
              Whales & marine life are dying from tummies FULL of plastic :({" "}
            </h2>
          </li>
          <li>
            <h2>TURN OFF the LIGHTS & SWITCH OFF the power strip at night.</h2>
          </li>
          <li>
            <h2>
              DRASTIC CHANGE is NEEDED, We've only 7 years before it's too late.
              <br></br>
              <br></br>PLEASE RECYCLE & DON'T LITTER. We're almost OUT of TIME.
            </h2>
          </li>
          <br></br>
          <br></br>
          <div id="climate">
            <climate-clock />
          </div>
        </ul>
        <img
          className="turtleplastic"
          src="https://www.condorferries.co.uk/remote.axd/condorlivemedia.azureedge.net/media/11088/plastic-in-the-ocean.jpg"
          alt="Soon, oceans will have more plastic than fish."
        ></img>
      </div>
    </div>
  );
}

export default SaveTheEarth;
