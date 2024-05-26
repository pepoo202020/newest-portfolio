import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { BsFillTelephoneFill } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { IoLogoWhatsapp } from "react-icons/io";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MainContactContainer = styled.div`
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding-left: 50px;
  padding-right: 50px;
`;

const ContactContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  justify-content: center;
  box-sizing: border-box;
  position: relative;
  background-color: #a8dada;
  color: #1d3557;
  margin-bottom: 3rem;
  padding: 2rem;
  gap: 1rem;
  box-sizing: border-box;
  z-index: 2;
  box-shadow: 0 1px 1px 0
      rgba(
        ${(props) =>
          props.colortheme === "light" ? "29, 53, 87" : "241, 250, 238"},
        0.06
      ),
    0 2px 5px 0
      rgba(
        ${(props) =>
          props.colortheme === "light" ? "29, 53, 87" : "241, 250, 238"},
        0.2
      );
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: start;
  }
`;
const Column = styled.div`
  flex: 0 0 45%;
  max-width: 50%;
  @media (max-width: 768px) {
    position: relative;
    width: 100%;
    max-width: 100%;
  }
`;

const TitleBoxOne = styled.div`
  margin-bottom: 3rem;
`;
const TitleBoxTwo = styled.div`
  margin-bottom: 3rem;
`;
const Title = styled.h5`
  font-size: 2rem;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    height: 3px;
    background-color: #1d3557;
    width: 100px;
    bottom: -12px;
  }
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ContactForm = styled.form`
  display: block;
  margin-top: 0em;
  unicode-bidi: isolate;
  width: 100%;
`;
const SuccessSendMessage = styled.div`
  display: none;
  text-align: center;
  padding: 15px;
  font-weight: 600;
  margin-bottom: 15px;
  color: #1d3557;
  border: 1px solid #1d3557;
`;
const ErrorSendMessage = styled.div`
  display: none;
  text-align: center;
  padding: 15px;
  font-weight: 600;
  margin-bottom: 15px;
  color: red;
  border: 1px solid red;
`;
const FormColumn = styled.div`
  flex: 0 0 100%;
  max-width: 100%;
  margin-bottom: 2rem;
  width: 100%;
`;

const InputForm = styled.input`
  display: block;
  width: 100%;
  height: calc(1.5em + 0.75em + 2px);
  padding: 1.5rem 1rem;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #a8dada;
  background-clip: padding-box;
  border: 1px solid #1d3557;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;

const TextArea = styled.textarea`
  display: block;
  width: 100%;
  padding: 1.5rem 1rem;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #a8dada;
  background-clip: padding-box;
  border: 1px solid #1d3557;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;

const ValidationBox = styled.div`
  color: red;
  display: none;
  margin: 0 0 20px;
  font-weight: 400;
  box-sizing: border-box;
`;

const SubmitButton = styled.button`
  border-radius: 5rem;
  padding: 0.9rem 2.3rem;
  font-size: 1.2rem;
  background-color: #1d3557;
  color: #fff;
  border-color: #cde1f8;
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  transition: all 0.5s ease;
  text-transform: none;
`;

const MoreInfoPar = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
  margin-top: 0;
  margin-bottom: 1rem;
`;

const SocialIconsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

const SoicalIcon = styled(Link)`
  transition: all 1s ease-in-out;
  color: #1d3557;
  text-decoration: none;
  background-color: transparent;
  box-sizing: border-box;
  border: 2px solid #1d3557;
  border-radius: 50%;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;

  &:hover {
    background-color: #1d3557;
    color: #fff;
  }
`;

const MapContainer = styled.div`
  width: 100%;
  height: 300px;
  background-color: lightgray; /* Placeholder color for map */
  margin-top: 2rem;
`;

const Contact = () => {
  const { t } = useTranslation();
  const theme = useSelector((state) => state.themes.selectedTheme);
  return (
    <MainContactContainer>
      <ContactContainer
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        colortheme={theme}
      >
        <Column>
          <TitleBoxOne>
            <Title>{t("send_a_message")}</Title>
          </TitleBoxOne>
          <div>
            <ContactForm action="https://formspree.io/f/xvoendon" method="POST">
              <SuccessSendMessage>{t("success_send")}</SuccessSendMessage>
              <ErrorSendMessage></ErrorSendMessage>
              <FormColumn>
                <InputForm
                  type="text"
                  name="name"
                  id="name"
                  placeholder={t("your_name")}
                  data-rule="minlen:4"
                  data-msg={t("name_validate")}
                  required
                />
                <ValidationBox></ValidationBox>
              </FormColumn>
              <FormColumn>
                <InputForm
                  type="email"
                  name="email"
                  id="email"
                  placeholder={t("your_email")}
                  data-rule="email"
                  data-msg={t("email_validate")}
                  required
                />
                <ValidationBox></ValidationBox>
              </FormColumn>
              <FormColumn>
                <InputForm
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder={t("subject")}
                  data-rule="minlen:4"
                  data-msg={t("subject_validate")}
                  required
                />
                <ValidationBox></ValidationBox>
              </FormColumn>
              <FormColumn>
                <TextArea
                  name="message"
                  rows="5"
                  data-rule="required"
                  data-msg={t("message_validate")}
                  placeholder={t("message")}
                  required
                ></TextArea>
                <ValidationBox></ValidationBox>
              </FormColumn>
              <FormColumn>
                <SubmitButton type="submit">{t("send_message")}</SubmitButton>
              </FormColumn>
            </ContactForm>
          </div>
        </Column>
        <Column>
          <TitleBoxTwo>
            <Title>{t("get_in_touch")}</Title>
          </TitleBoxTwo>
          <MoreInfoPar>{t("get_in_touch_p")}</MoreInfoPar>
          <SocialIconsContainer>
            <SoicalIcon
              target="_blank"
              to={"https://www.facebook.com/abanob.shosh"}
            >
              <FaFacebookF />
            </SoicalIcon>
            <SoicalIcon target="_blank" to={"https://github.com/pepoo202020"}>
              <FiGithub />
            </SoicalIcon>
            <SoicalIcon target="_blank" to={"https://wa.me/+201126884803"}>
              <IoLogoWhatsapp />
            </SoicalIcon>
            <SoicalIcon target="_blank" to={"tel:+201126884803"}>
              <BsFillTelephoneFill />
            </SoicalIcon>
            <SoicalIcon
              target="_blank"
              to={"mailto:abanob.shenoda@hotmail.com"}
            >
              <CiMail />
            </SoicalIcon>
          </SocialIconsContainer>
          <MapContainer>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d443.6675761309837!2d31.173174516442995!3d27.177029580354155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1716720504226!5m2!1sen!2seg"
              height="300"
              style={{ border: 0, width: "100%" }}
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </MapContainer>
        </Column>
      </ContactContainer>
    </MainContactContainer>
  );
};

export default Contact;
