var config = require('../../dbconfig');
const sql = require('mssql');
const { password } = require('../../dbconfig');

// Henter en specifik saægs kurv på kurv id
async function getSalgsKurv(kurvId) {
    try {
        let pool = await sql.connect(config);
        let kurv = await pool.request()
            .input('kurvId', sql.Int, kurvId)
            .query("SELECT * from SalgsKurv where FK_kurvId = @kurvId");
        return kurv.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

// Gemmer salgs kurv
async function addSalgsKurv(salgsKurv) {
    try {
        let pool = await sql.connect(config);
        let insertKurv = await pool.request()
            .input('kurvId', sql.Int, salgsKurv.kurvId)
            .input('filmId', sql.Int, salgsKurv.filmId)
            .input('pris', sql.Int, salgsKurv.pris)
            .input('rabat', sql.Int, salgsKurv.rabat)
            .input('maengde', sql.Int, salgsKurv.maengde)
            .query("Insert Into SalgsKurv (FK_kurvId, FK_filmId, pris, rabat, maengde) \
                    Values (@kurvId, @filmId, @pris, @rabat, @maengde)");
        return insertKurv.recordsets;
    }
    catch (err) {
        console.log(err);
    }
}

// Updatere salgs kurven
async function updateSalgsKurv(saglsKurv) {
    try {
        let pool = await sql.connect(config);
        let updateKurv = await pool.request()
            .input('filmId', sql.Int, saglsKurv.filmId)
            .input('kurvId', sql.Int, saglsKurv.kurvId)
            .input('maengde', sql.Int, saglsKurv.maengde)
            .query("Update SalgsKurv Set maengde = @maengde Where FK_kurvId = @kurvId and FK_filmId = @filmId");
        return updateKurv.recordsets;
    }
    catch (err) {
        console.log(err);
    }
}

async function deleteSalgsKurv(saglsKurv) {
    try {
        let pool = await sql.connect(config);
        let deleteSalgsKurv = await pool.request()
            .input('kurvId', sql.Int, saglsKurv.kurvId)
            .input('filmId', sql.Int, saglsKurv.filmId)
            .query("Delete From SalgsKurv where FK_kurvId = @kurvId and FK_filmId = @filmId");
        return deleteSalgsKurv.recordsets;
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = {
    getSalgsKurv: getSalgsKurv,
    addSalgsKurv: addSalgsKurv,
    updateSalgsKurv: updateSalgsKurv,
    deleteSalgsKurv: deleteSalgsKurv,
}