export class ShowDTO {

  constructor(public id: number, public title: string, public image?: {
    medium: string;
    original: string;
  }, public summary?: string ){}
}
