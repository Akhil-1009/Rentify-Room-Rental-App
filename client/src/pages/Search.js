import SearchForm from "../components/forms/SearchForms";
import { useSearch } from "../context/search";
// import AdCard from "../components/cards/AdCards";
import RecentCard from "../components/cards/recent/RecentCard";
import CommonSection from "../components/about/CommonSection";
import { Container } from "reactstrap";
import { ScrollToTop } from "../components/misc/ScrollToTop";
import styles from "../components/cards/recent/recent.module.css";

export default function Search() {
  // context
  const [search] = useSearch();

  return (<>
    <ScrollToTop />
    <CommonSection title="Search" subtitle='Elevate Your Living Experience: Find Your Ideal Room' />

    <section >
      <Container >
        <SearchForm />
      </Container>
    </section>
    <section className={`${styles.recent} ${styles.padding}`}>
      <div className='container'>
        {search.results?.length > 0 ? (
          <div className="col-md-12 text-center">
            <h5>
              Found {search.results?.length} Result
            </h5>
          </div>
        )
          :
          (
            <div className="col-md-12 text-center p-5">No Property Found</div>
          )
        }

        <RecentCard adsForRent={search.results} />
      </div>
    </section>

  </>
  );
}

