// Assets
import BurgerMonster from "../assets/img/BurgerMonster.png";
import ChubbeeMonkee from "../assets/img/ChubbeeMonkee.png";
import EggSlice from "../assets/img/EggSlice.png";
import PitaGrill from "../assets/img/PitaGrill.png";
import SignaturePho from "../assets/img/SignaturePho.png";

// Components
import React from "react";
import { Container, Typography } from "@material-ui/core";

const PartnerList = [
  {
    image: BurgerMonster,
    hours: "TBA",
    phone: "714-886-9627",
    instagram: "https://www.instagram.com/ocburgermonster/",
    website: "http://burgermonster.net",
    description: [
      <Container>
        <Typography variant="body1">
          Burger Monster began with a simple concept: to provide bold flavors
          with a focus on standard of quality. Our standard of quality began
          with distilled wisdom of the industry and of the people we represent-
          our guest. The standards maintained at Burger Monster are not based on
          ‘rules’ rather, we offer ways to do things better. Where others fall
          short, Burger Monster would achieve.
        </Typography>
        <Container style={{ height: "20px" }} />
        <Typography variant="body1">
          We strive to conceptualize, through our menu, the origins of the food
          truck boom. Continuously elevating and creating unique culinary
          interpretations, resulting in a refined and more demanding experience
          among Burger loving Monsters. With a significant focus on freshness
          and quality, Burger Monster sought to hand craft each burger.
        </Typography>
        <Container style={{ height: "20px" }} />
        <Typography variant="body1">
          Finally, Burger Monster is more than a food truck committed to quality
          food and exceptional service. We are a group of monsters dedicated to
          the common goal of making Monster memories for our guest and
          ourselves, elevating the standards and expectations of the food
          truck/restaurant/catering industry and developing a secure and ideal
          work environment. To achieve these goals, Burger Monster’s unflagging
          pursuit of excellence, we fearlessly focus on the following values
          deeply imbedded in our core.
        </Typography>
      </Container>,
    ],
  },
  {
    image: ChubbeeMonkee,
    hours: "TBA",
    phone: "TBA",
    instagram: "https://www.instagram.com/chubbeemonkee/",
    website: "https://www.chubbeemonkee.com/",
    description: [
      <Container>
        <Typography variant="body1">It's simple. We LOVE food!</Typography>
        <Container style={{ height: "20px" }} />
        <Typography variant="body1">
          In his "previous life", Chef/Owner Sam worked for a large corporation
          in a lucrative, cushy office job. He spent 18 years climbing the
          corporate ladder and had achieved great success. The problem was, he
          always knew that he wanted something else. Something more.
        </Typography>
        <Container style={{ height: "20px" }} />
        <Typography variant="body1">
          What started out as a passion to eat amazing food turned into a
          bonafide obsession to create his version of the food he loves. This is
          how Chubbee Monkee was born. We wouldn't put out food that we wouldn't
          eat ourselves and we pride ourselves on that fact. In saying that, we
          hope you can taste the love we put into our food and embrace the fact
          that...
        </Typography>
        <Container style={{ height: "20px" }} />
        <Typography variant="body1">
          ...There's a Chubbee Monkee in all of us!
        </Typography>
      </Container>,
    ],
  },
  {
    image: EggSlice,
    hours: "7AM - 7PM",
    phone: "714-276-1113",
    instagram: "https://www.instagram.com/eggslice/",
    website: "https://www.eggslice.com/",
    description: [
      <Container>
        <Typography variant="body1">
          I’m Chef Bill, the founder of Eggslice. After popping up at
          restaurants in Orange County, we're egg-cited to share that our new
          location in Grange Hall 39 in Buena Park is opening October 2020! Our
          crew is ready to welcome you again and perfectly craft our breakfast
          sandwiches that you've been patiently waiting for.
        </Typography>
        <Container style={{ height: "20px" }} />
        <Typography variant="body1">
          My special sandwich was born at local Farmers Markets in Sydney,
          Australia more than 18 years ago. Over the years I’ve enjoyed making
          thousands of sandwiches for our loyal Aussie customers featuring our
          unique locally made Chilli Jam, combined with fresh, local
          ingredients. Our OC fans are discovering just how good my all day
          breakfast sandwiches are.
        </Typography>
        <Container style={{ height: "20px" }} />
        <Typography variant="body1">
          We pledge that you will get your sandwich piping hot, stacked with
          flavor and served with a reverence towards sustainable, local
          ingredients in a timely manner.
        </Typography>
        <Container style={{ height: "20px" }} />
        <Typography variant="body1">
          I truly hope you enjoy your sandwich and we thank you for supporting
          Eggslice.
        </Typography>
      </Container>,
    ],
  },
  {
    image: PitaGrill,
    hours: "12PM - 7PM",
    phone: "714-276-1180",
    instagram: "https://www.instagram.com/californiapitagrill/",
    website: "https://www.californiapitagrills.com/",
    description: [
      <Container>
        <Typography variant="body1">
          California Pita Grill was founded by entrepreneur Amer Taha, as a
          healthy alternative to fast food while maintaining an authentic
          approach to delicious Mediterranean cuisine.
        </Typography>
        <Container style={{ height: "20px" }} />
        <Typography variant="body1">
          Nutrition is one of the hottest “buzz words” these days. At California
          Pita Grill, the driving philosophy is built around one word:
          FRESHNESS! When it comes to the nutritional value of the food you eat,
          one of the essential components is incorporating a diet built around
          fresh produce and meats.
        </Typography>
        <Container style={{ height: "20px" }} />
        <Typography variant="body1">
          When the founders of California Pita Grill sat down to design their
          menu, the goal was to prepare their salads from scratch and to make
          them daily. They cook all meat to order —nothing is pre-processed or
          sitting under heat lamps. It is with these high standards that
          California Pita Grill hopes to build a loyal following of “fans of
          freshness” and good food. Give it a try.
        </Typography>
        <Container style={{ height: "20px" }} />
        <Typography variant="body1">
          You’ve Never Tasted Fresh Like This!
        </Typography>
      </Container>,
    ],
  },

  {
    image: SignaturePho,
    hours: "TBA",
    phone: "TBA",
    instagram: "https://www.instagram.com/signature_pho_seafood/",
    website: "TBA",
    description: [
      <Container>
        <Typography variant="body1">
          Provides a unique experience to customers by introducing a family own
          Pho and Seafood house all fresh made..
        </Typography>
      </Container>,
    ],
  },
];

export default PartnerList;
