import { LatLngBoundsLiteral } from "leaflet";

export const DEFAULT_ZOOM = 8;
export const MIN_ZOOM = 6;
export const VIETNAM_BOUNDS: LatLngBoundsLiteral = [
  [8.1790665, 102.14441],
  [23.393395, 109.46463],
];

export const LAT_CENTER = 18;
export const LON_CENTER = 106;

export const MIN_ZOOM_SIZE_DISTRICT_LEVEL = 9;

export type LayerNameTypes =
  | 'imerg_e_10KM_daily'
  | 'imerg_l_10KM_daily';

export type GeopolygonLevelTypes = 
'province' 
| 'district'; 

export type GranularityTypes =
  | 'day'
  // | 'week'
  | 'month'
  | 'quarter'
  | 'year';