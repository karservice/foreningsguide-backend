import type { Attribute, Schema } from '@strapi/strapi';

export interface CourseElementsCourseText extends Schema.Component {
  collectionName: 'components_course_elements_course_texts';
  info: {
    description: '';
    displayName: 'Guide - Text';
  };
  attributes: {
    content: Attribute.Blocks & Attribute.Required;
    heading: Attribute.String & Attribute.Required;
    level: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          max: 3;
          min: 1;
        },
        number
      > &
      Attribute.DefaultTo<1>;
    sidenote: Attribute.Component<'elements.sidenote', true>;
  };
}

export interface ElementsFooterLeft extends Schema.Component {
  collectionName: 'components_elements_footer_lefts';
  info: {
    description: '';
    displayName: 'footerLeft';
  };
  attributes: {
    content: Attribute.Blocks & Attribute.Required;
    heading: Attribute.String & Attribute.Required;
    sponsoredLogo: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface ElementsFooterRight extends Schema.Component {
  collectionName: 'components_elements_footer_rights';
  info: {
    displayName: 'footerRight';
  };
  attributes: {
    content: Attribute.Blocks & Attribute.Required;
    copyright: Attribute.String & Attribute.Required;
    copyrightLink: Attribute.String & Attribute.Required;
    developedBy: Attribute.String & Attribute.Required;
    developedByLink: Attribute.String & Attribute.Required;
    developedByText: Attribute.String & Attribute.Required;
    heading: Attribute.String & Attribute.Required;
  };
}

export interface ElementsLogo extends Schema.Component {
  collectionName: 'components_elements_logos';
  info: {
    displayName: 'logo';
  };
  attributes: {
    logoImage: Attribute.Media<'images'> & Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

export interface ElementsSidenote extends Schema.Component {
  collectionName: 'components_elements_sidenotes';
  info: {
    description: '';
    displayName: 'Sidenote';
  };
  attributes: {
    content: Attribute.Blocks & Attribute.Required;
    heading: Attribute.String & Attribute.Required;
    type: Attribute.Enumeration<['Tips', 'Kommentar', 'Exempel']> &
      Attribute.Required;
  };
}

export interface LayoutFooter extends Schema.Component {
  collectionName: 'components_sections_footers';
  info: {
    description: '';
    displayName: 'footer';
  };
  attributes: {
    left: Attribute.Component<'elements.footer-left'> & Attribute.Required;
    middleBottomLogos: Attribute.Component<'links.linked-image', true> &
      Attribute.Required;
    middleBottomLogoSpotlight: Attribute.Component<'links.linked-image'>;
    middleBottomTitle: Attribute.String & Attribute.Required;
    middleTopLogos: Attribute.Component<'links.linked-image', true> &
      Attribute.Required;
    middleTopTitle: Attribute.String & Attribute.Required;
    right: Attribute.Component<'elements.footer-right'> & Attribute.Required;
  };
}

export interface LayoutNavbar extends Schema.Component {
  collectionName: 'components_layout_navbars';
  info: {
    displayName: 'navbar';
  };
  attributes: {
    button: Attribute.Component<'links.button'>;
    links: Attribute.Component<'links.link', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    logo: Attribute.Component<'elements.logo'> & Attribute.Required;
  };
}

export interface LinksButton extends Schema.Component {
  collectionName: 'components_links_buttons';
  info: {
    description: '';
    displayName: 'button';
  };
  attributes: {
    icon: Attribute.Enumeration<
      ['Pil', 'Instagram', 'Facebook', 'YouTube', 'TikTok']
    >;
    link: Attribute.String & Attribute.Required;
    newTab: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
    text: Attribute.String & Attribute.Required;
    type: Attribute.Enumeration<['Solid', 'Ih\u00E5lig']> &
      Attribute.Required &
      Attribute.DefaultTo<'Solid'>;
  };
}

export interface LinksLink extends Schema.Component {
  collectionName: 'components_links_links';
  info: {
    displayName: 'link';
  };
  attributes: {
    link: Attribute.String & Attribute.Required;
    newTab: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
    text: Attribute.String & Attribute.Required;
  };
}

export interface LinksLinkedImage extends Schema.Component {
  collectionName: 'components_links_linked_images';
  info: {
    displayName: 'linkedImage';
  };
  attributes: {
    image: Attribute.Media<'images'> & Attribute.Required;
    link: Attribute.String & Attribute.Required;
    newTab: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
  };
}

export interface MiscCookieConsent extends Schema.Component {
  collectionName: 'components_misc_cookie_consents';
  info: {
    description: '';
    displayName: 'cookieConsent';
  };
  attributes: {
    buttonText: Attribute.String & Attribute.Required;
    content: Attribute.String & Attribute.Required;
    heading: Attribute.String & Attribute.Required;
  };
}

export interface MiscMetadata extends Schema.Component {
  collectionName: 'components_misc_metadata';
  info: {
    displayName: 'metadata';
  };
  attributes: {
    metaDescription: Attribute.Text & Attribute.Required;
    metaTitle: Attribute.String & Attribute.Required;
  };
}

export interface MiscNotificationBanner extends Schema.Component {
  collectionName: 'components_misc_notification_banners';
  info: {
    description: '';
    displayName: 'notificationBanner';
  };
  attributes: {
    content: Attribute.Text & Attribute.Required;
    endDate: Attribute.DateTime;
    heading: Attribute.String & Attribute.Required;
    link: Attribute.Component<'links.link'>;
    startDate: Attribute.DateTime & Attribute.Required;
    type: Attribute.Enumeration<['Varning', 'Info', 'Observera']> &
      Attribute.Required &
      Attribute.DefaultTo<'Info'>;
  };
}

export interface MiscSeo extends Schema.Component {
  collectionName: 'components_misc_seos';
  info: {
    displayName: 'seo';
  };
  attributes: {
    metaDescription: Attribute.Text & Attribute.Required;
    metaTitle: Attribute.String & Attribute.Required;
    shareImage: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface SectionsBlobHomepage extends Schema.Component {
  collectionName: 'components_sections_blob_homepages';
  info: {
    description: '';
    displayName: 'Textblock med bild + form (startsidepuff)';
  };
  attributes: {
    anchor: Attribute.String & Attribute.Unique;
    background: Attribute.Enumeration<
      ['bl\u00E5', 'gul', 'kalk', 'korall', 'mint', 'vit']
    > &
      Attribute.Required;
    blobColor: Attribute.Enumeration<
      ['bl\u00E5', 'gul', 'kalk', 'korall', 'mint', 'vit', 'ingen bakgrund']
    > &
      Attribute.Required;
    buttons: Attribute.Component<'links.button', true>;
    content: Attribute.Blocks & Attribute.Required;
    heading: Attribute.String & Attribute.Required;
    image: Attribute.Media<'images'> & Attribute.Required;
    imagePosition: Attribute.Enumeration<['Left', 'Right']> &
      Attribute.Required &
      Attribute.DefaultTo<'Right'>;
    layout: Attribute.Enumeration<['Stor bild', 'Liten bild']> &
      Attribute.Required &
      Attribute.DefaultTo<'Stor bild'>;
  };
}

export interface SectionsBlobWithBg extends Schema.Component {
  collectionName: 'components_sections_blob_with_bgs';
  info: {
    description: '';
    displayName: 'Inneh\u00E5llspuff med bakgrundsf\u00E4rg';
  };
  attributes: {
    anchor: Attribute.String & Attribute.Unique;
    background: Attribute.Enumeration<
      ['bl\u00E5', 'gul', 'kalk', 'korall', 'mint', 'vit']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'vit'>;
    blobColor: Attribute.Enumeration<
      ['bl\u00E5', 'gul', 'kalk', 'korall', 'mint']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'bl\u00E5'>;
    buttons: Attribute.Component<'links.button', true>;
    content: Attribute.Blocks & Attribute.Required;
    heading: Attribute.String & Attribute.Required;
    image: Attribute.Media<'images'>;
    layout: Attribute.Enumeration<
      [
        'Image to left',
        'Image to left (with shape)',
        'Image to right',
        'Image to right (with shape)',
        'No image'
      ]
    >;
  };
}

export interface SectionsFullWidthText extends Schema.Component {
  collectionName: 'components_sections_full_width_texts';
  info: {
    description: '';
    displayName: 'L\u00F6pande text i fullbredd';
  };
  attributes: {
    anchor: Attribute.String & Attribute.Unique;
    buttons: Attribute.Component<'links.button', true>;
    content: Attribute.Blocks & Attribute.Required;
    heading: Attribute.String & Attribute.Required;
  };
}

export interface SectionsHero extends Schema.Component {
  collectionName: 'components_sections_heroes';
  info: {
    description: '';
    displayName: 'Sidhuvud startsida';
  };
  attributes: {
    heading: Attribute.String & Attribute.Required;
    image: Attribute.Media<'images'> & Attribute.Required;
    subheading: Attribute.String;
  };
}

export interface SectionsHtmlUtanMarginaler extends Schema.Component {
  collectionName: 'components_sections_html_utan_marginaler_s';
  info: {
    description: '';
    displayName: 'HTML';
  };
  attributes: {
    content: Attribute.Text;
  };
}

export interface SectionsIngressText extends Schema.Component {
  collectionName: 'components_sections_ingress_texts';
  info: {
    description: '';
    displayName: 'Ingress';
  };
  attributes: {
    content: Attribute.Blocks & Attribute.Required;
    heading: Attribute.String & Attribute.Required;
  };
}

export interface SectionsTwoCols extends Schema.Component {
  collectionName: 'components_sections_two_cols';
  info: {
    description: '';
    displayName: 'Tv\u00E5 kolumner med varierande inneh\u00E5ll';
  };
  attributes: {
    anchor: Attribute.String & Attribute.Unique;
    background: Attribute.Enumeration<
      ['bl\u00E5', 'gul', 'kalk', 'korall', 'mint']
    >;
    buttons: Attribute.Component<'links.button', true>;
    heading: Attribute.String & Attribute.Required;
    leftColumnWidth: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          max: 12;
          min: 1;
        },
        number
      > &
      Attribute.DefaultTo<6>;
    leftContent: Attribute.Blocks & Attribute.Required;
    rightContent: Attribute.Blocks & Attribute.Required;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media<'images' | 'files' | 'videos'>;
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    canonicalURL: Attribute.String;
    keywords: Attribute.Text;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 160;
        minLength: 50;
      }>;
    metaImage: Attribute.Media<'images' | 'files' | 'videos'>;
    metaRobots: Attribute.String;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaViewport: Attribute.String;
    structuredData: Attribute.JSON;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'course-elements.course-text': CourseElementsCourseText;
      'elements.footer-left': ElementsFooterLeft;
      'elements.footer-right': ElementsFooterRight;
      'elements.logo': ElementsLogo;
      'elements.sidenote': ElementsSidenote;
      'layout.footer': LayoutFooter;
      'layout.navbar': LayoutNavbar;
      'links.button': LinksButton;
      'links.link': LinksLink;
      'links.linked-image': LinksLinkedImage;
      'misc.cookie-consent': MiscCookieConsent;
      'misc.metadata': MiscMetadata;
      'misc.notification-banner': MiscNotificationBanner;
      'misc.seo': MiscSeo;
      'sections.blob-homepage': SectionsBlobHomepage;
      'sections.blob-with-bg': SectionsBlobWithBg;
      'sections.full-width-text': SectionsFullWidthText;
      'sections.hero': SectionsHero;
      'sections.html-utan-marginaler': SectionsHtmlUtanMarginaler;
      'sections.ingress-text': SectionsIngressText;
      'sections.two-cols': SectionsTwoCols;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
    }
  }
}
