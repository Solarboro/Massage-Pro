import { Reservation } from './reservation';

export class RevPanelItem {
    revMasg: string;
    revDateList: string[];
    revDateDetailMap: { [key: string]: { [key: number]: Reservation} };

}
