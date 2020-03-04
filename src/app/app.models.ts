export interface autocompleteResult {
  Version: number;
  Key: string;
  Type: string;
  Rank: number;
  LocalizedName: string;
  Country: {
    ID: string;
    LocalizedName: string;
  }
  AdministrativeArea: {
    ID: string;
    LocalizedName: string;
  }
}

export interface savedLocation {
  key: string;
  city: string;
  administrativeArea: string;
  country: string;
  forecast: boolean;
}

export interface currentConditions {
  LocalObservationDateTime: string;
  EpochTime: number;
  WeatherText: string;
  WeatherIcon: number;
  HasPrecipitation: boolean;
  PrecipitationType: string;
  IsDayTime: boolean;
  Temperature: {
    Metric: {
      Value: number;
      Unit: string;
      UnitType: number;
    }
    Imperial: {
      Value: number;
      Unit: string;
      UnitType: number;
    }
  }
  MobileLink: string;
  Link: string;
}

export interface twelveHourForecast {
  DateTime: string;
  EpochDateTime: number;
  WeatherIcon: number;
  IconPhrase: string;
  HasPrecipitation: boolean;
  IsDaylight: boolean;
  Temperature: {
    Value: number;
    Unit: string;
    UnitType: number;
  }
  PrecipitationProbability: number;
  MobileLink: string;
  Link: string;
}