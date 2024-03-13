

import { Container, Row, Col } from "reactstrap";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ImageGallery from "../components/misc/ImageGallery";
import Logo from "../../src/logo.svg";
import AdFeatures from "../components/cards/recent/AdFeatures";
import { formatNumber } from "../helpers/ad";
import dayjs from "dayjs";
import LikeUnlike from "../components/misc/LikeUnlike";
import MapCard from "../components/cards/MapCard";
import ContactSeller from "../components/forms/ContactSeller";
import RecentCard from "../components/cards/recent/RecentCard";
import styles from "./adview1.module.css";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const AdDetails = () => {
  const [ad, setAd] = useState([]);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);


  const params = useParams();

  useEffect(() => {
    setLoading(true);

    window.scrollTo(0, 0);

    const fetchAd = async () => {
      try {
        const { data } = await axios.get(`/ad/${params?.slug}`);
        setAd(data.ad);
        console.log(data.ad);
        setRelated(data.related);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    fetchAd();
  }, []);


  const generatePhotosArray = (photos) => {
    if (photos?.length > 0) {
      const x = photos?.length === 1 ? 2 : 4;
      let arr = [];
      photos.map((p) =>
        arr.push({
          src: p.Location,
          width: x,
          height: x,
        })
      );
      return arr;
    } else {
      return [
        {
          src: Logo,
          width: 2,
          height: 1,
        },
      ];
    }
  };
  return (
    <>
      {!loading ? (
        <>
          <section>
            <Container>
              <Row>
                <Col lg="6">
                  <ImageGallery photos={generatePhotosArray(ad?.photos)} />
                </Col>
                <Col lg="6" >
                  {/* <div className="car__info"> */}
                  <div className="card shadow px-4 py-4">

                    <div className=" d-flex align-items-center justify-content-between gap-5 mb-4 mt-3">
                      <h6 className="fw-bold fs-5">

                        <span style={{ background: ad.type === "House" ? "#25b5791a" : "#ff98001a", color: ad.type === "House" ? "#25b579" : "#ff9800" }}>{ad.type}</span>
                      </h6>
                      <LikeUnlike ad={ad} />
                    </div>
                    <div className=" d-flex align-items-center gap-5 mb-2 mt-2">

                      <h3 className="rent__price fw-bold fs-4">&#x20B9;{formatNumber(ad?.price)}</h3>
                    </div>
                    {/* <div className=" d-flex align-items-center justify-content-between gap-5"> */}
                    <h3>{ad.title}</h3>
                    {/* </div> */}
                    <h3 className="mt-3">{ad.label}</h3>
                    <p className="section__description">
                      {ad.description}
                    </p>

                    <div
                      className=" d-flex align-items-center  "
                      style={{ columnGap: "5rem" }}
                    >
                      <AdFeatures ad={ad} />
                    </div>
                  </div>
                </Col>

                <Col lg="6" className="mt-5">
                  <div className="booking-info mt-5">
                    {/* <h5 className="mb-4 fw-bold ">Contact Seller</h5> */}
                    {/* <BookingForm /> */}
                    <ContactSeller ad={ad} />
                  </div>
                </Col>

                <Col lg="6" className="mt-5">
                  <div className="payment__info mt-5">

                    <MapCard ad={ad} />
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

          <section className='recent padding'>
            <div className='container'>
              <h4 className="text-center">Related Ads</h4>
              <hr style={{ width: '99%' }} />
              <RecentCard adsForRent={related} />
            </div>
          </section>
        </>
      ) : (
        <>
          <p>loading page....</p>
        </>
      )}
    </>
  );
};

export default AdDetails;