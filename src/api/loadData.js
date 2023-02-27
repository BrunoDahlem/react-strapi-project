import { mapData } from './map-data';
import { config } from '../config';

export const loadData = async (slug) => {
  try {
    const data = await fetch(config.url);
    const json = await data.json();
    const pageData = await mapData(json.data);
    const pages = pageData.map((page) => {
      return page.slug == slug ? page : undefined;
    });
    const page = pages.filter((page) => page != undefined);
    return page[0];
  } catch (e) {
    return undefined;
  }
};
