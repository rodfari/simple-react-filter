import { useState } from "react";

export const useFilterHook = (properties) => {

    const [filteredProperties, setFilteredProperties] = useState(properties);

    return {
        filter: (event) => {
            const form  = new FormData(event.target);
            const filterOptions = Object.fromEntries(form.entries());

            console.log(filterOptions);
            

            const filtered = properties.filter((property) => {

                    const bedrooms = Number.parseInt(property["Bedrooms"]);
                    const bathrooms = Number.parseInt(property["Bathrooms"]);
                    const parking = Number.parseInt(property["Parking"]);
                    const price = Number.parseInt(property["Sale Price"]);

                    const bedroomsOptions = Number.parseInt(filterOptions["Bedrooms"]);
                    const bathroomsOptions = Number.parseInt(filterOptions["Bathrooms"]);
                    const parkingOptions = Number.parseInt(filterOptions["Parking"]);
                    const priceOptions = Number.parseInt(filterOptions["Sale Price"]);
                
                console.log(priceOptions <= price);

                if( 
                    (isNaN(bedroomsOptions)
                    || bedroomsOptions === bedrooms) 
                    && (isNaN(bathroomsOptions)
                    || bathroomsOptions === bathrooms) 
                    && (isNaN(parkingOptions)
                    || parkingOptions === parking)
                    && (isNaN(priceOptions)
                    || priceOptions >= price)
                ){
                    return true
                }
                return false;
            });
            
            setFilteredProperties(filtered);
            
        },
        properties: filteredProperties
    }
};