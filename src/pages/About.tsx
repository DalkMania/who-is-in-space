import { Container } from '@/components/layout/Container'
import { Image } from '@unpic/react'
import ISS from '@/assets/images/iss-image.webp'

export const About = () => {
  return (
    <Container>
      <div className="prose lg:prose-xl max-w-none! py-12">
        <h2 className="w-full text-center">
          About the International Space Station
        </h2>
        <p className="lead">
          The International Space Station (ISS) mission is to serve as a unique
          microgravity laboratory for scientific research, enabling long-term
          human space exploration and providing benefits to Earth. ISS is
          humanity's most expensive object and has been in orbit for 25 years.
        </p>
        <Image
          alt="The Space Station"
          src={ISS}
          height={800}
          width={800}
          className="object-cover w-full object-center rounded-xl"
        />
        <p>
          Orbiting some 400km (250 miles) above the Earth, the ISS represents
          one of mankind's most ambitious engineering projects. Since the first
          Expedition 1 mission, more than 280 astronauts and cosmonauts have
          visited the ISS, and it has now been continuously occupied for 25
          years. If you were born after 2 November 2000, for your entire life,
          there has always been someone living in space.
        </p>
        <p>
          As of May 2022, 258 individuals from 20 countries have visited the
          International Space Station. The top participating countries include
          the United States (158 people) and Russia (54 people). Astronaut time
          and research time on the space station are allocated to space agencies
          according to how much money or resources (such as modules or robotics)
          they contribute. The ISS includes contributions from 15 nations. NASA
          (United States), Roscosmos (Russia) and the European Space Agency are
          the major partners of the space station and contribute most of the
          funding; the other partners are the Japanese Aerospace Exploration
          Agency and the Canadian Space Agency. Through a private company called
          Axiom Space, private astronauts are starting to work on the orbiting
          complex, from time to time; additionally, astronauts from other
          nations such as the United Arab Emirates do fly occasionally to the
          ISS.
        </p>
        <p>
          Current plans call for the space station to be operated through at
          least 2024, with the partners discussing a possible extension. NASA
          has approved an extension to 2030, although Russia says it will
          withdraw after 2024 to focus on building its own space station around
          2028. How the station will be operated after Russia's departure has
          not yet been determined. After 2030, plans for the International Space
          Station are not clearly laid out either. It could be deorbited, or
          recycled for future commercial space stations in orbit.
        </p>
        <p>
          Crews aboard the ISS are assisted by mission control centers in
          Houston and Moscow and a payload control center in Huntsville, Ala.
          Other international mission control centers support the space station
          from Japan, Canada and Europe. Elements of the ISS are controlled by
          mission control centers in Houston or Moscow.
        </p>
      </div>
    </Container>
  )
}
