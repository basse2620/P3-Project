export interface Ordre {
    PK_ordreId: number;
    datoOpretet: Date;
    datoSendt: Date;
    totalPris: number;
    FK_statusId: number;
    FK_addresseId: number;
    FK_brugernavn: string;
}
