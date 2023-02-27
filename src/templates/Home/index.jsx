import { Default } from '../Default';
import { PageNotFound } from '../PageNotFound';
import { Loading } from '../Loading';

import { GridTwoColumn } from '../../components/GridTwoColumn';
import { GridContent } from '../../components/GridContent';
import { GridSection } from '../../components/GridSection';
import { GridImage } from '../../components/GridImage';

import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { config } from '../../config';
import { loadData } from '../../api/loadData';

import * as Styled from './styles';
import { Menu } from '../../components/Menu';
import { MenuHome } from '../../components/MenuHome';

export function Home() {
  const [data, setData] = useState([]);
  const [pageIcon, setPageIcon] = useState(
    document.querySelector('link[rel="icon"]').href,
  );
  const location = useLocation();
  useEffect(() => {
    const pathName = location.pathname.replace(/[^a-z0-9-_]/gi, '');
    const slug = pathName ? pathName : config.homePage;
    const load = async () => {
      const pageData = await loadData(slug);
      setData(pageData);
    };
    load();
  }, [location]);

  document.querySelector('link[rel="icon"]').href = pageIcon;

  useEffect(() => {
    if (data === undefined) {
      document.title = `${config.siteName} Page Not Found`;
      setPageIcon('assets/images/no-results.png');
    }
    if (data && !data.slug) {
      document.title = `${config.siteName} Page Loading...`;
    }
    if (data && data.title) {
      document.title = `${config.siteName} ${data.title}`;
      if (data.icon) {
        setPageIcon(data.icon);
      }
    }
  }, [data]);
  if (data === undefined) {
    return <PageNotFound />;
  }
  if (data && !data.slug) {
    return <Loading />;
  }

  const { slug, menu, sections, footerHtml } = data;
  const { links, text, link, src } = menu;

  return (
    <Default
      links={links}
      logoData={{ text, link, src }}
      footerHtml={footerHtml}
    >
      {sections.map((section, index) => {
        if (section.component == 'section.section-two-columns') {
          return <GridTwoColumn key={index} {...section} />;
        }
        if (section.component == 'section.section-content') {
          return <GridContent key={index} {...section} />;
        }
        if (section.component == 'section.section-grid' && section.hasText) {
          return <GridSection key={index} {...section} />;
        }
        if (section.component == 'section.section-grid' && section.hasImage) {
          return <GridImage key={index} {...section} />;
        }
      })}
    </Default>
  );
}
