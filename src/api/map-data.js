import { mapMenu } from './map-menu';
import { mapSections } from './map-sections';

export const mapData = (pageData = {}) => {
  return pageData.map((data, index) => {
    const id = index;
    const {
      footer_text: footerHtml = '',
      title = '',
      slug = '',
      icon: { data: { attributes: { url: icon = '' } = '' } = '' } = '',
      sections = [],
      menu = {},
    } = data.attributes;

    return {
      id,
      footerHtml,
      title,
      slug,
      icon,
      sections: mapSections(sections),
      menu: mapMenu(menu),
    };
  });
};
