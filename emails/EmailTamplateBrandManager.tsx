import { Html } from "@react-email/html";
import { Text } from "@react-email/text";
import { Section } from "@react-email/section";
import { Container } from "@react-email/container";
import { Tailwind } from "@react-email/tailwind";
import { Img } from "@react-email/img";
import { Hr } from "@react-email/hr";
import { Heading } from "@react-email/heading";
import { Button } from "@react-email/button";

export default function EmailTamplateBrandManager() {
  const socialMedia = [
    { link: "/", icon: "https://i.ibb.co/ftsH4f3/facebook.png" },
    { link: "/", icon: "https://i.ibb.co/F0dRyR9/linkedin.png" },
    { link: "/", icon: "https://i.ibb.co/02GNtK5/instagram.png" },
    { link: "/", icon: "https://i.ibb.co/BTxtR21/youtube.png" },
    { link: "/", icon: "https://i.ibb.co/rkJ02qp/twitter.png" },
    { link: "/", icon: "https://i.ibb.co/t2kt2mT/tiktok.png" },
  ];
  const brands = [
    {
      name: "Snackmate",
      logo: "https://i.ibb.co/92NXNXx/snackmate.png",
    },
    {
      name: "Wrappo",
      logo: "https://i.ibb.co/X7FRyhB/wrappo.png",
    },
    {
      name: "Party Pizza",
      logo: "https://i.ibb.co/Brkvmng/party-pizza.png",
    },
  ];
  return (
    <Html>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                brandColor: "#F15B25",
                gray: "#6F6F6F",
              },
              fontFamily: {
                primary: ["Poppins", "sans-serif"],
              },
              fontWeight: {
                bold: "700",
              },
            },
          },
        }}
      >
        <Section className="bg-white px-10 py-16 max-w-[750px] w-full font-primary">
          <Container>
            <Img
              src="https://i.ibb.co/60zdmJy/onnow-logo.png"
              alt="Onnow logo"
              //   width={100}
              //   height={50}
              className="w-56 mb-5"
            />

            {/*  */}
            <Hr className="border-[2px] border-gray-200" />
            <Heading className="text-black text-[24px] max-w-[320px] my-0 mt-5 mb-4 font-bold text-start">
              Onnow added you as a{" "}
              <span className="text-brandColor">Brand Manager</span> of:
            </Heading>
            <div className="flex my-4 flex-wrap">
              {brands.map((item) => (
                <div className="px-6 py-3 mr-4 mt-4 outline outline-1 outline-slate-200 rounded-xl">
                  <Img
                    src={item.logo}
                    alt={`${item.name} logo`}
                    width={80}
                    height={80}
                   className="mx-auto"
                  />
                  <Text className="text-xl font-bold mt-1 text-center block">{item.name}</Text>
                </div>
              ))}
            </div>

            <Hr className="border-[2px] border-gray-200" />
            <Text className="text-gray">
              Join the team as a Brand Manager and take control of all relevant
              aspects of your brand. As a Brand Manager, you will have the
              ability to edit brand information, manage orders, and add, edit,
              or delete menu items, along with other important responsibilities.
            </Text>
            <Button
              href="/"
              className="text-lg font-bold text-white bg-brandColor px-10 py-2 rounded-lg mt-2"
            >
              Set a password
            </Button>
            <Hr className="border-[2px] border-gray-200 my-5" />
            <Text className="text-gray">
              Onnow is a direct-to-consumer food startup which offers a wide
              range of proprietary food menus for all palates and lifestyles
              designed.
            </Text>
            <Container className="flex gap-3 mt-5">
              {socialMedia.map((item) => (
                <Button href={item.link} target="_blank" className="mr-3">
                  <Img src={item.icon} width={21} height={21} />
                </Button>
              ))}
            </Container>
          </Container>
        </Section>
      </Tailwind>
    </Html>
  );
}
