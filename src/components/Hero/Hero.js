import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim,
          reprehenderit consequatur molestias minima velit possimus commodi
          voluptas accusantium est debitis nostrum dolor laborum error unde
          placeat doloribus iure temporibus eveniet!
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
