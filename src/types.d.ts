interface AccessInfo {
  accessViewStatus: string;
  country: string;
  embeddable: boolean;
  epub: {
    isAvailable: boolean;
    acsTokenLink: string;
  };
  pdf: {
    isAvailable: boolean;
    acsTokenLink: string;
  };
  publicDomain: boolean;
  quoteSharingAllowed: boolean;
  textToSpeechPermission: string;
  viewability: string;
  webReaderLink: string;
}

interface SalesInfo {
  country: string;
  isEbook: boolean;
  saleability: string;
}

interface ImageLinks {
  smallThumbnail: string;
  thumbnail: string;
  extraLarge: string;
  large: string;
  medium: string;
  small: string;
}

interface IndustryIdentifier {
  type: string;
  identifier: string;
}

interface ReadingModes {
  text: boolean;
  image: boolean;
}

interface VolumeInfo {
  allowAnonLogging: boolean;
  authors: string[];
  averageRating: number;
  canonicalVolumeLink: string;
  categories: string[];
  contentVersion: string;
  description: string;
  imageLinks: ImageLinks;
  industryIdentifiers: IndustryIdentifier[];
  infoLink: string;
  language: string;
  maturityRating: string;
  pageCount: number;
  panelizationSummary: {
    containsEpubBubbles: boolean;
    containsImageBubbles: boolean;
  };
  previewLink: string;
  printType: string;
  publishedDate: string;
  publisher: string;
  ratingsCount: number;
  readingModes: ReadingModes;
  subtitle: string;
  title: string;
}

interface Book {
  accessInfo: AccessInfo;
  etag: string;
  id: string;
  kind: string;
  salesInfo: SalesInfo;
  searchInfo: {
    textSnippet: string;
  };
  selfLink: string;
  volumeInfo: VolumeInfo;
}

interface User {
  name: string;
  email: string;
  password: string;
}

type SignIn = Omit<User, 'name'>;
