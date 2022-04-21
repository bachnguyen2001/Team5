export interface Timeseries {
    countryregion: string;
    lastupdate: string;
    location: { lat: number; lng: number };
    countrycode: { iso2: string; iso3: string };
    timeseries: [{
      time: { confirmed: number; deaths: number; recovered: number };
    }]
  }
  