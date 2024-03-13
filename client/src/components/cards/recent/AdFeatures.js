
import { IoBedOutline } from "react-icons/io5";
import { TbBath } from "react-icons/tb";

export default function AdFeatures({ ad }) {
  return (<>
    {ad?.bedrooms ? (
      <span>
        <IoBedOutline /> {ad?.bedrooms}
      </span>
    ) : (
      ""
    )}
    {ad?.bathrooms ? (
      <span>
        <TbBath /> {ad?.bathrooms}
      </span>
    ) : (
      ""
    )}
   
    {ad?.wifi ? (
      <span>
        <i class="fa-solid fa-wifi"></i>{ad?.wifi}
      </span>
    ) : (
      ""
    )}

    {ad?.ROwater ? (
      <span>
        <i class="fa-solid fa-droplet"></i>{ad?.ROwater}
      </span>
    ) : (
      ""
    )}

    {ad?.laundry ? (
      <span>
        <i class="fa-solid fa-shirt"></i>{ad?.laundry}
      </span>
    ) : (
      ""
    )}


  </>
  );
}