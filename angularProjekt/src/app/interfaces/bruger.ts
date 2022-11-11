export interface Bruger {
    PK_brugernavn: string;
    password: string;
    newPassword: string;
    fornavn: string;
    efternavn: string;
    salgsScore: number;
    email: string;
    FK_addresseId: number;
    FK_kortNr: number;
    FK_typeId: number;
}
