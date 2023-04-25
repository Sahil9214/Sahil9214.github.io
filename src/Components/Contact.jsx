import React from "react";
import { Text, Box, Flex, Image, Input, Divider } from "@chakra-ui/react";
import "../Styles/Contact.css";

const Contact = () => {
  return (
    <Box>
      <Text className="Contact_ME">Contact Me</Text>
      <br />
      <br />
      <Divider width={"80%"} margin={"auto"}/>
      <br/>
      <Flex className="contact_flex">
        <Box className="Contact_Box1">
          <Box className="contact_Email">
            <br />
            <Image
              style={{ width: "50px", margin: "auto" }}
              src={
                "https://user-images.githubusercontent.com/106021674/222425736-e96bf5b9-7391-44eb-bd98-01a997b4dcf1.png"
              }
            />
            <Text className="email-Text">Email</Text>
            <Text style={{ color: "#fff", fontWeight: "700" }}>
              utkarshsinghal369@gmail.com
            </Text>
          </Box>
          <br />
          <br />
          <br />
          <Box className="contact_address">
            <Image
              style={{ width: "50px", margin: "auto" }}
              src={
                "https://user-images.githubusercontent.com/106021674/222427267-f903757b-6853-47ae-8ac7-7fb15a8ae6b7.png"
              }
            />
            <Text className="email-Text">Address</Text>
            <Text style={{ color: "#fff", fontWeight: "700" }}>
              4/203 kala kuan Alwar
            </Text>
          </Box>
          <br />
          <br />
          <br />
          <Box className="contact_phone">
            <Image
              style={{ width: "50px", margin: "auto" }}
              src={
                "https://user-images.githubusercontent.com/106021674/222426673-62627fec-7184-4504-a2e3-92c98c5302c7.png"
              }
            />
            <Text className="email-Text">Phone Number</Text>
            <Text style={{ color: "#fff", fontWeight: "700" }}>
              92145523881
            </Text>
          </Box>
        </Box>
        <Box className="Contact_Box2">
          <Box className="contact_boxmin">
            <Text className="Text_work">Lets,s Work Together</Text>
            <br />
            <br />
            <Input type="text" placeholder="Name" className="input_area" />
            <Divider height={"7px"} className="widthchange" />
            <br />
            <Input type="email" placeholder="Email" className="input_area" />
            <Divider height={"7px"} className="widthchange" />
            <br />
            <textarea
              style={{
                width: "340px",
                backgroundColor: "#000",
                margin: "auto",
                border: "1px solid #fff",
                letterSpacing: "1px",
                borderRadius: "5px",
              }}
              classname="form_control"
              rows="8"
              placeholder="MESSAGE"
              name="message"
              required
            ></textarea>
            <br />

            <button
              class="btn btn-primary send-button"
              id="submit"
              type="submit"
              value="SEND"
            >
              <div class="alt-send-button">
                <Image
                  style={{
                    margin: "auto",
                  }}
                  src="https://user-images.githubusercontent.com/106021674/222916067-69629ca4-4834-4fe7-8082-72c70aed64f6.png"
                  width="30px"
                />
                <span class="send-text">SEND</span>
              </div>
            </button>
            <br />
            <Flex className="iconsBox">
              <a href="https://www.instagram.com/uttkarshsinghal/">
                <Image
                  w={"50px"}
                  src="https://user-images.githubusercontent.com/106021674/222916959-63503a3e-ca32-4d2a-8d85-76d1df7c43b3.png"
                  alt="instragram"
                />
              </a>
              <a href="www.linkedin.com/in/utkarsh-singhal-3171b7182">
                <Image
                  w={"50px"}
                  src="https://user-images.githubusercontent.com/106021674/222916905-24625bb2-0c49-4a58-910a-0d0d3fb5105b.png"
                  alt="linkedin"
                />
              </a>
              <a href="https://github.com/Sahil9214">
                <Image
                  w={"50px"}
                  src="https://user-images.githubusercontent.com/106021674/222916865-59655899-6d7e-40af-ac55-290f6dd7b8cb.png"
                  alt="giithub"
                />
              </a>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Contact;
