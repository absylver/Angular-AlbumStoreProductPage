export interface Album {
    name: string;
    releaseDate: string;
    coverImage: string;
    tracks: Track[];
}

import { from } from "rxjs/observable/from";
import {Track} from './track';