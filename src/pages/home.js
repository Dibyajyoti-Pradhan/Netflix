import React from "react";
import { FaqsContainer } from "../containers/faqs";
import { Feature, OptForm } from "../components";
import { JumbotronContainer } from "../containers/jumbotron";
import { FooterContainer } from "../containers/footer";
import { HeaderContainer } from "../containers/header";
const Home = () => (
  <>
    <HeaderContainer>
      <Feature>
        <Feature.Title>
          100% entertainment. Pay for 1 month, get 1 month free.
        </Feature.Title>
        <Feature.SubTitle>Watch anywhere. Cancel at any time.</Feature.SubTitle>
        <OptForm>
          <OptForm.Text>
            Ready to watch? Enter your email to create or restart your
            membership.
          </OptForm.Text>
          <OptForm.Break />
          <OptForm.Input placeholder="Email address" />
          <OptForm.Button>Get 1 Month Free</OptForm.Button>
          <OptForm.Break />
          <OptForm.Text>
            Only new members are eligible for this offer.
          </OptForm.Text>
        </OptForm>
      </Feature>
    </HeaderContainer>
    <JumbotronContainer />
    <FaqsContainer />
    <FooterContainer />
  </>
);

export default Home;
