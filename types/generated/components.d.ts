import type { Schema, Attribute } from '@strapi/strapi';

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media<'images' | 'files' | 'videos'>;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SectionsTwoCols extends Schema.Component {
  collectionName: 'components_sections_two_cols';
  info: {
    displayName: 'Tv\u00E5 kolumner med varierande inneh\u00E5ll';
    description: '';
  };
  attributes: {
    heading: Attribute.String & Attribute.Required;
    anchor: Attribute.String & Attribute.Unique;
    leftContent: Attribute.Blocks & Attribute.Required;
    background: Attribute.Enumeration<
      ['bl\u00E5', 'gul', 'kalk', 'korall', 'mint']
    >;
    rightContent: Attribute.Blocks & Attribute.Required;
    leftColumnWidth: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 12;
        },
        number
      > &
      Attribute.DefaultTo<6>;
    buttons: Attribute.Component<'links.button', true>;
  };
}

export interface SectionsIngressText extends Schema.Component {
  collectionName: 'components_sections_ingress_texts';
  info: {
    displayName: 'Ingress';
    description: '';
  };
  attributes: {
    heading: Attribute.String & Attribute.Required;
    content: Attribute.Blocks & Attribute.Required;
  };
}

export interface SectionsHtmlUtanMarginaler extends Schema.Component {
  collectionName: 'components_sections_html_utan_marginaler_s';
  info: {
    displayName: 'HTML';
    description: '';
  };
  attributes: {
    content: Attribute.Text;
  };
}

export interface SectionsHero extends Schema.Component {
  collectionName: 'components_sections_heroes';
  info: {
    displayName: 'Sidhuvud startsida';
    description: '';
  };
  attributes: {
    heading: Attribute.String & Attribute.Required;
    subheading: Attribute.String;
    image: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface SectionsFullWidthText extends Schema.Component {
  collectionName: 'components_sections_full_width_texts';
  info: {
    displayName: 'L\u00F6pande text i fullbredd';
    description: '';
  };
  attributes: {
    heading: Attribute.String & Attribute.Required;
    anchor: Attribute.String & Attribute.Unique;
    content: Attribute.Blocks & Attribute.Required;
    buttons: Attribute.Component<'links.button', true>;
  };
}

export interface SectionsBlobWithBg extends Schema.Component {
  collectionName: 'components_sections_blob_with_bgs';
  info: {
    displayName: 'Inneh\u00E5llspuff med bakgrundsf\u00E4rg';
    description: '';
  };
  attributes: {
    heading: Attribute.String & Attribute.Required;
    anchor: Attribute.String & Attribute.Unique;
    background: Attribute.Enumeration<
      ['bl\u00E5', 'gul', 'kalk', 'korall', 'mint', 'vit']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'vit'>;
    layout: Attribute.Enumeration<
      [
        'Image to left',
        'Image to left (with shape)',
        'Image to right',
        'Image to right (with shape)',
        'No image'
      ]
    >;
    blobColor: Attribute.Enumeration<
      ['bl\u00E5', 'gul', 'kalk', 'korall', 'mint']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'bl\u00E5'>;
    content: Attribute.Blocks & Attribute.Required;
    image: Attribute.Media<'images'>;
    buttons: Attribute.Component<'links.button', true>;
  };
}

export interface SectionsBlobHomepage extends Schema.Component {
  collectionName: 'components_sections_blob_homepages';
  info: {
    displayName: 'Textblock med bild + form till h\u00F6ger (startsidepuff)';
    description: '';
  };
  attributes: {
    heading: Attribute.String & Attribute.Required;
    anchor: Attribute.String & Attribute.Unique;
    content: Attribute.Blocks & Attribute.Required;
    imagePosition: Attribute.Enumeration<['Left', 'Right']> &
      Attribute.Required &
      Attribute.DefaultTo<'Right'>;
    layout: Attribute.Enumeration<['Stor bild', 'Liten bild']> &
      Attribute.Required &
      Attribute.DefaultTo<'Stor bild'>;
    image: Attribute.Media<'images'> & Attribute.Required;
    blobColor: Attribute.Enumeration<
      ['bl\u00E5', 'gul', 'kalk', 'korall', 'mint', 'vit', 'ingen bakgrund']
    > &
      Attribute.Required;
    buttons: Attribute.Component<'links.button', true>;
  };
}

export interface MiscSeo extends Schema.Component {
  collectionName: 'components_misc_seos';
  info: {
    displayName: 'seo';
  };
  attributes: {
    metaTitle: Attribute.String & Attribute.Required;
    metaDescription: Attribute.Text & Attribute.Required;
    shareImage: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface MiscNotificationBanner extends Schema.Component {
  collectionName: 'components_misc_notification_banners';
  info: {
    displayName: 'notificationBanner';
    description: '';
  };
  attributes: {
    type: Attribute.Enumeration<['Varning', 'Info', 'Observera']> &
      Attribute.Required &
      Attribute.DefaultTo<'Info'>;
    heading: Attribute.String & Attribute.Required;
    content: Attribute.Text & Attribute.Required;
    startDate: Attribute.DateTime & Attribute.Required;
    endDate: Attribute.DateTime;
    link: Attribute.Component<'links.link'>;
  };
}

export interface MiscMetadata extends Schema.Component {
  collectionName: 'components_misc_metadata';
  info: {
    displayName: 'metadata';
  };
  attributes: {
    metaTitle: Attribute.String & Attribute.Required;
    metaDescription: Attribute.Text & Attribute.Required;
  };
}

export interface MiscCookieConsent extends Schema.Component {
  collectionName: 'components_misc_cookie_consents';
  info: {
    displayName: 'cookieConsent';
    description: '';
  };
  attributes: {
    heading: Attribute.String & Attribute.Required;
    content: Attribute.String & Attribute.Required;
    buttonText: Attribute.String & Attribute.Required;
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

export interface LinksLink extends Schema.Component {
  collectionName: 'components_links_links';
  info: {
    displayName: 'link';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    link: Attribute.String & Attribute.Required;
    newTab: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
  };
}

export interface LinksButton extends Schema.Component {
  collectionName: 'components_links_buttons';
  info: {
    displayName: 'button';
    description: '';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    link: Attribute.String & Attribute.Required;
    newTab: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
    type: Attribute.Enumeration<['Solid', 'Ih\u00E5lig']> &
      Attribute.Required &
      Attribute.DefaultTo<'Solid'>;
    icon: Attribute.Enumeration<
      ['Pil', 'Instagram', 'Facebook', 'YouTube', 'TikTok']
    >;
  };
}

export interface LayoutNavbar extends Schema.Component {
  collectionName: 'components_layout_navbars';
  info: {
    displayName: 'navbar';
  };
  attributes: {
    links: Attribute.Component<'links.link', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    button: Attribute.Component<'links.button'>;
    logo: Attribute.Component<'elements.logo'> & Attribute.Required;
  };
}

export interface LayoutFooter extends Schema.Component {
  collectionName: 'components_sections_footers';
  info: {
    displayName: 'footer';
    description: '';
  };
  attributes: {
    left: Attribute.Component<'elements.footer-left'> & Attribute.Required;
    middleTopTitle: Attribute.String & Attribute.Required;
    middleTopLogos: Attribute.Component<'links.linked-image', true> &
      Attribute.Required;
    middleBottomTitle: Attribute.String & Attribute.Required;
    middleBottomLogos: Attribute.Component<'links.linked-image', true> &
      Attribute.Required;
    right: Attribute.Component<'elements.footer-right'> & Attribute.Required;
    middleBottomLogoSpotlight: Attribute.Component<'links.linked-image'>;
  };
}

export interface ElementsSidenote extends Schema.Component {
  collectionName: 'components_elements_sidenotes';
  info: {
    displayName: 'Sidenote';
    description: '';
  };
  attributes: {
    heading: Attribute.String & Attribute.Required;
    content: Attribute.Blocks & Attribute.Required;
    type: Attribute.Enumeration<['Tips', 'Kommentar', 'Exempel']> &
      Attribute.Required;
  };
}

export interface ElementsLogo extends Schema.Component {
  collectionName: 'components_elements_logos';
  info: {
    displayName: 'logo';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    logoImage: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface ElementsFooterRight extends Schema.Component {
  collectionName: 'components_elements_footer_rights';
  info: {
    displayName: 'footerRight';
  };
  attributes: {
    heading: Attribute.String & Attribute.Required;
    content: Attribute.Blocks & Attribute.Required;
    copyright: Attribute.String & Attribute.Required;
    developedByText: Attribute.String & Attribute.Required;
    developedBy: Attribute.String & Attribute.Required;
    developedByLink: Attribute.String & Attribute.Required;
    copyrightLink: Attribute.String & Attribute.Required;
  };
}

export interface ElementsFooterLeft extends Schema.Component {
  collectionName: 'components_elements_footer_lefts';
  info: {
    displayName: 'footerLeft';
    description: '';
  };
  attributes: {
    heading: Attribute.String & Attribute.Required;
    content: Attribute.Blocks & Attribute.Required;
    sponsoredLogo: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface CourseElementsCourseText extends Schema.Component {
  collectionName: 'components_course_elements_course_texts';
  info: {
    displayName: 'Guide - Text';
    description: '';
  };
  attributes: {
    heading: Attribute.String & Attribute.Required;
    content: Attribute.Blocks & Attribute.Required;
    level: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 3;
        },
        number
      > &
      Attribute.DefaultTo<1>;
    sidenote: Attribute.Component<'elements.sidenote', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.seo': SharedSeo;
      'shared.meta-social': SharedMetaSocial;
      'sections.two-cols': SectionsTwoCols;
      'sections.ingress-text': SectionsIngressText;
      'sections.html-utan-marginaler': SectionsHtmlUtanMarginaler;
      'sections.hero': SectionsHero;
      'sections.full-width-text': SectionsFullWidthText;
      'sections.blob-with-bg': SectionsBlobWithBg;
      'sections.blob-homepage': SectionsBlobHomepage;
      'misc.seo': MiscSeo;
      'misc.notification-banner': MiscNotificationBanner;
      'misc.metadata': MiscMetadata;
      'misc.cookie-consent': MiscCookieConsent;
      'links.linked-image': LinksLinkedImage;
      'links.link': LinksLink;
      'links.button': LinksButton;
      'layout.navbar': LayoutNavbar;
      'layout.footer': LayoutFooter;
      'elements.sidenote': ElementsSidenote;
      'elements.logo': ElementsLogo;
      'elements.footer-right': ElementsFooterRight;
      'elements.footer-left': ElementsFooterLeft;
      'course-elements.course-text': CourseElementsCourseText;
    }
  }
}
