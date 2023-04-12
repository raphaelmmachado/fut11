import {
  FacebookIcon,
  FacebookShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";

interface Props {
  link: string | undefined;
  club: string;
}
const Socials = ({ link, club }: Props) => {
  return (
    <>
      <div className="flex items-center justify-center gap-5">
        <TwitterShareButton
          url="https://fut11.netlify.app"
          title={
            link
              ? `Esta é a melhor formação para o ${club} ${link}`
              : `Achei legal esse site para montar formação.`
          }
          hashtags={[`${club}`]}
        >
          <TwitterIcon size={40} round={true} />
        </TwitterShareButton>

        <FacebookShareButton
          url="https://fut11.netlify.app"
          quote={
            link
              ? `Esta é a melhor formação para o ${club} ${link}`
              : `Achei legal esse site para montar formação.`
          }
          hashtag={`${club}`}
        >
          <FacebookIcon size={40} round={true} />
        </FacebookShareButton>
        <WhatsappShareButton
          url="https://fut11.netlify.app"
          title={
            link
              ? `Esta é a melhor formação para o ${club} ${link}`
              : `Achei legal esse site para montar formação.`
          }
          separator=" "
        >
          <WhatsappIcon size={40} round={true} />
        </WhatsappShareButton>
        <TelegramShareButton
          url="https://fut11.netlify.app"
          title={
            link
              ? `Esta é a melhor formação para o ${club} ${link}`
              : `Achei legal esse site para montar formação.`
          }
        >
          <TelegramIcon size={40} round={true} />
        </TelegramShareButton>
      </div>
    </>
  );
};
export default Socials;
