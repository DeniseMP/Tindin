
export class Jogos{


 public _id!: number;
 public title!: string;
 public description!: string;
 public photos!: {name: string,url: string ,dp: string};
 public genres!: string;
 public platforms!: string;
 public tags!: string;
 public rating!: number;
 public totalVotes!: number;
 public videos! : string;
 public createdAt!: Date;
 public updatedAt!: Date;
 public __v!: number;
 public mediumPrice!: number;
 public releaseYear!: number;
 public objeto!: Object;


 constructor() { }
 


}