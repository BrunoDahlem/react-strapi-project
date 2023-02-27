export const mapSections = (sections = []) => {
  return sections.map((section) => {
    if (section.__component == 'section.section-two-columns') {
      return mapSectionTwoColumns(section);
    }
    if (section.__component == 'section.section-content') {
      return mapSectionContent(section);
    }
    if (section.__component == 'section.section-grid') {
      return mapSectionGrid(section);
    }
  });
};

export const mapSectionTwoColumns = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    description: text = '',
    image: {
      data: {
        attributes: { url: src = '' },
      },
    } = '',
    metadata: { section_id = '', background: bg = false } = '',
  } = section;
  return {
    component,
    title,
    text,
    src,
    section_id,
    bg,
  };
};
export const mapSectionContent = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    description: contentHtml = '',
    metadata: { section_id = '', background: bg = false } = '',
  } = section;
  return {
    component,
    title,
    contentHtml,
    section_id,
    bg,
  };
};
export const mapSectionGrid = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    description = '',
    metadata: { section_id = '', background: bg = false } = '',
    text_grid = [],
  } = section;
  const image_grid =
    section.image_grid && section.image_grid[0]
      ? section.image_grid[0].image.data
      : [];
  const hasImage = image_grid && image_grid.length > 0 ? true : false;
  const hasText = text_grid && text_grid.length > 0 ? true : false;
  return {
    component,
    title,
    description,
    section_id,
    bg,
    text_grid,
    image_grid,
    hasImage,
    hasText,
  };
};
