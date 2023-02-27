export const mapMenu = (menu = {}) => {
  const {
    open_new_tab: newTab = false,
    logo_text: text = '',
    logo_link: link = '',
    menu_link: links = [],
  } = menu;

  const src = menu.logo_image.data ? menu.logo_image.data.attributes.url : '';
  return {
    newTab,
    text,
    link,
    src,
    links: mapMenuLinks(links),
  };
};

export const mapMenuLinks = (links = []) => {
  return links.map((item) => {
    const {
      link_text: children = '',
      link_url: link = '',
      open_new_tab: newTab = false,
    } = item;
    return {
      children,
      link,
      newTab,
    };
  });
};
