export default class Resource {
  imageUrl: string;
  title: string;
  description: string;

  constructor(imageUrl: string, title: string, description: string) {
    this.imageUrl = imageUrl;
    this.title = title;
    this.description = description;
  }
}
