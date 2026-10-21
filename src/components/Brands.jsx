import { Link } from "react-router-dom";
import styled from "styled-components";

const BrandsLink = styled(Link)`
  display: block;
  width: 120px;
  height: 120px;
  flex-shrink: 0;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (min-width: 720px) {
    width: 220px;
    height: 220px;
  }

  @media (max-width: 719px) {
    width: 64px;
    height: 64px;
  }
`;

const BrandsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  padding: 10px;
  background-color: rgba(16, 20, 21, 0.65);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 20px 0 0 20px;

  position: absolute;
  top: 240px;
  right: 0;
  z-index: 5;

  @media (max-width: 719px) {
    top: 60%;
    right: 0;
    gap: 8px;
    padding: 8px 5px;
    border-radius: 14px 0 0 14px;
  }
`;

const BrandItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  @media (max-width: 719px) {
    gap: 6px;
  }
`;

export function Brands() {

  return (
    <BrandsContainer>
      <BrandItems>
        {(
          <div>
            <BrandsLink to="/" aria-label="Jerelo">
              <img alt="Jerelo" src="/photos/general/jerelo.png" />
            </BrandsLink>
            <BrandsLink to="/" aria-label="Nova">
              <img alt="Nova" src="/photos/general/nova.png" />
            </BrandsLink>
          </div>
        )}
      </BrandItems>
    </BrandsContainer>
  );
}
