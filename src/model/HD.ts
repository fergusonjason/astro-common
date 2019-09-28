
/**
 * Interface for objects representing an entry in the Henry Draper (HD) catalog
 *
 * RAJ2000 - Right Ascension (J2000)
 * DEJ2000 - Declination (J2000)
 * HD - HD Number
 * DM - DM catalog number
 * RAB1900 - Right Ascension (B1900)
 * DEB1900 - Declination (B1900)
 * // TODO: Finish description of properties
 */
export interface IHd {

    RAJ2000 : string;
    DEJ2000 : string;
    HD : number;    // natural id
    DM : string;
    RAB1900 : string;
    DEB1900 : string;
    QPTM : string;
    PTM : string;
    NPTM : string;
    QPTG : string;
    PTG : string;
    NPTG : string;
    SPT : string;
    INTENSITY : string;
    REM : string;
    RAICRS : string;
    DEICRS : string;
}