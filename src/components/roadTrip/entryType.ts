type Paragraph = {
    type: 'p';
    text: string;
}

type Image = {
    type: 'img';
    caption: string;
    alt: string;
    source: string;
}

export type EntryType = {
    day: number;
    date: string;
    drivingMiles?: number;
    hikingMiles?: number;
    location: string;
    content: Array<Paragraph | Image>;
}