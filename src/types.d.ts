/**
 * AEDがおいてある施設の情報
 * name:施設名
 * address:住所
 * lat:緯度
 * lon:経度
 */
interface AEDPlace {
  name: string;
  address: string;
  lat: number;
  lon: number;
}

export { AEDPlace };
