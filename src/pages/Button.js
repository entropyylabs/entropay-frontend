import React from "react";
import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import { CopyBlock, dracula } from "react-code-blocks";
import saly from "../assets/saly.png";

function ButtonPage() {
  const text = `<link
   href="https://entropyylabs.github.io/entropay-widget/index.css"
   rel="stylesheet"
   />
<script
   src="https://entropyylabs.github.io/entropay-widget/index.js"
   defer
   ></script>
<div class="entropay_widget" data-entropay="16DxkcySj"></div>`;

  return (
    <div className="page">
      <div className="page-header">
        <h5 className="heading">Payment Buttons</h5>
        <p className="subheading">
          Customers will see this button to initiate a transaction
        </p>

        <div className="holder button-page">
          <div className="button-create">
            <h6
              style={{
                fontSize: "24px",
                fontWeight: "500",
                marginBottom: "30px",
              }}
            >
              Button Created Successfully!
            </h6>
            <FormControl>
              <FormLabel htmlFor="title">Title of the Button</FormLabel>
              <Input className="button-input" id="title" type="text" />

              <div className="theme-chooser">
                <h5>Theme</h5>
                <div className="theme-holder">
                  <Button colorScheme="black" variant="outline">
                    Dark
                  </Button>
                  <Button colorScheme="black" variant="outline">
                    Light
                  </Button>
                  <Button colorScheme="black" variant="outline">
                    Color
                  </Button>
                  <div className="color-buttons pink"></div>
                  <div className="color-buttons blue"></div>
                  <div className="color-buttons green"></div>
                  <div className="color-buttons purple"></div>
                </div>
              </div>

              <FormLabel htmlFor="label">Label</FormLabel>
              <Input className="button-input" id="label" type="text" />

              <div className="labels-holder">
                <div className="label-toast">Buy Now</div>
                <div className="label-toast">Pay Now</div>
                <div className="label-toast">Donations</div>
                <div className="label-toast">Custom Button</div>
              </div>
            </FormControl>
            <h5 style={{ marginBottom: "20px" }}>HTML code</h5>
            <CopyBlock text={text} language="html" theme={dracula} copyBlock />

            <button class="test-button">
              <a
                href="https://codepen.io/ayushjain2205/pen/NWyYryW"
                target="_blank"
              >
                Test your button
              </a>
            </button>
          </div>
          <div className="button-preview">
            <img src={saly} alt="" srcset="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ButtonPage;
