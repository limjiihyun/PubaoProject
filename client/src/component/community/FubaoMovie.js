import React, { useEffect } from 'react';
import styled from 'styled-components';

const Grid = styled.section`
  /* CSS Grid styles */
  display: grid;
  grid-template-columns: 1.167fr 0.45fr 0.225fr 0.3fr 0.8fr;
  grid-template-rows: 0.44fr 0.1875fr 0.4fr 0.9fr;
  grid-gap: var(--gutter);

  /* Additional styles */
  /* ... */
`;

const Figure = styled.figure`
  /* CSS figure styles */
  overflow: hidden;
  background: var(--main-color);
  position: relative;
  opacity: 0;
  transition: 0.2s;
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  /* CSS image styles */
  vertical-align: middle;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.2s;
  will-change: transform;
  clip-path: polygon(
    var(--border-width) var(--border-width),
    calc(100% - var(--border-width)) var(--border-width),
    calc(100% - var(--border-width)) calc(100% - var(--border-width)),
    var(--border-width) calc(100% - var(--border-width))
  );
  flex-grow: 1;
`;

const Figcaption = styled.figcaption`
  /* CSS figcaption styles */
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  z-index: 2;

  /* Additional styles */
  /* ... */
`;

const H3 = styled.h3`
  /* CSS h3 styles */
  font-weight: 700;
  color: #fdfdfd;
  margin-left: 10px;
  font-size: calc(0.5em + 1.7vw);
  line-height: 1;
`;

const FubaoMovie = () => {
  useEffect(() => {
    const images = document.querySelectorAll('img');
    for (let image of images) {
      image.addEventListener('load', function () {
        this.parentNode.style.opacity = '1';
      });
    }
  }, []);

  return (
    <Grid className="grid">
      <Figure style={{ gridColumn: '1 / 2', gridRow: '1 / 2' }}>
        <Image src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3794/1.jpg" alt="" />
        <Figcaption>
          <div>
            <div>
              <H3>Ms Marvel</H3>
            </div>
          </div>
        </Figcaption>
      </Figure>
      <Figure style={{ gridColumn: '2 / 4', gridRow: '1 / 3' }}>
        <Image src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3794/2.jpg" alt="" />
        <Figcaption>
          <div>
            <div>
              <H3>Starlord</H3>
            </div>
          </div>
        </Figcaption>
      </Figure>
      <Figure style={{ gridColumn: '4 / 6', gridRow: '1 / 2' }}>
        <Image src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3794/3.jpg" alt="" />
        <Figcaption>
          <div>
            <div>
              <H3>Spider-Man</H3>
            </div>
          </div>
        </Figcaption>
      </Figure>
      <Figure style={{ gridColumn: '1 / 2', gridRow: '2 / 4' }}>
        <Image src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3794/4.jpg" alt="" />
        <Figcaption>
          <div>
            <div>
              <H3>Black Panther</H3>
            </div>
          </div>
        </Figcaption>
      </Figure>
      <Figure style={{ gridColumn: '2 / 4', gridRow: '3 / 4' }}>
        <Image src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3794/5.jpg" alt="" />
        <Figcaption>
          <div>
            <div>
              <H3>Venom</H3>
            </div>
          </div>
        </Figcaption>
      </Figure>
      <Figure style={{ gridColumn: '4 / 6', gridRow: '2 / 4' }}>
        <Image src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3794/6.jpg" alt="" />
        <Figcaption>
          <div>
            <div>
              <H3>Thanos</H3>
            </div>
          </div>
        </Figcaption>
      </Figure>
      <Figure style={{ gridColumn: '1 / 2', gridRow: '4 / 5' }}>
        <Image src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3794/7.jpg" alt="" />
        <Figcaption>
          <div>
            <div>
              <H3>Iron Man</H3>
            </div>
          </div>
        </Figcaption>
      </Figure>
      <Figure style={{ gridColumn: '2 / 3', gridRow: '4 / 5' }}>
        <Image src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3794/8.jpg" alt="" />
        <Figcaption>
          <div>
            <div>
              <H3>Thor</H3>
            </div>
          </div>
        </Figcaption>
      </Figure>
      <Figure style={{ gridColumn: '3 / 5', gridRow: '4 / 5' }}>
        <Image src="client/public/goods_image/yellow-pubao.jpg" alt="" />
        <Figcaption>
          <div>
            <div>
              <H3>Captain America</H3>
            </div>
          </div>
        </Figcaption>
      </Figure>
      <Figure style={{ gridColumn: '5 / 6', gridRow: '4 / 5' }}>
        <Image src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3794/10.jpg" alt="" />
        <Figcaption>
          <div>
            <div>
              <H3>Black Widow</H3>
            </div>
          </div>
        </Figcaption>
      </Figure>
    </Grid>
  );
};

export default FubaoMovie;
